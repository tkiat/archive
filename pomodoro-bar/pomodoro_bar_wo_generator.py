#!/usr/bin/env python3
"""
A simple pomodoro timer that supports pause, configuration, and statistics
With polybar and xmobar integrations.
"""

import argparse
import copy
from datetime import datetime, timedelta, date
from enum import Enum, auto
import json
from operator import itemgetter
import os
from pathlib import Path
from shutil import get_terminal_size, which
from statistics import mean
import sys
import termios
import textwrap
import time
import tty
from typing import Callable, Dict, NewType, Tuple, Union, List

# -----------------------------------------------------------------------------
# types


class BarType(Enum):
    NONE = auto()
    POLYBAR = auto()
    XMOBAR = auto()

    def __str__(self):
        return self.name.lower()

    def __repr__(self):
        return str(self)

    @staticmethod
    def arg_parse_type(s):
        try:
            return BarType[s.upper()]
        except KeyError:
            return s


class CustomHelpFormatter(argparse.ArgumentDefaultsHelpFormatter):
    def __init__(self, prog):
        super().__init__(prog, max_help_position=28, width=80)

    def _format_action_invocation(self, action):
        if action.option_strings and action.nargs != 0:
            default = self._get_default_metavar_for_optional(action)
            args_string = self._format_args(action, default)
            result = ', '.join(action.option_strings) + ' ' + args_string
        else:
            result = super()._format_action_invocation(action)
        return result + ' ' * (23 - len(result))

    def add_usage(self, usage, actions, groups, prefix='Usage: '):
        return super().add_usage(usage, actions, groups, prefix)


class NamedPipeStatus(Enum):
    VALID = auto()
    INVALID = auto()


class TimerSession(Enum):
    WORK = auto()
    BREAK = auto()
    LONGBREAK = auto()


class TimerStatus(Enum):
    ACTIVE = auto()
    PAUSE = auto()
    IDLE = auto()
    SKIP = auto()


Record = dict[str, dict[str, int]]
SessionLengths = NewType('SessionLengths', Dict[TimerSession, int])
SessionNum = int

# -----------------------------------------------------------------------------
# functions


def ask_until_valid_char(charset: List[str]) -> str:
    readchar = lambda: sys.stdin.buffer.read(1).decode(sys.stdin.encoding)

    fd = sys.stdin.fileno()
    attr_old = termios.tcgetattr(fd)
    tty.setraw(fd, when=termios.TCSAFLUSH)
    while not (ch := readchar()) in charset:
        pass
    termios.tcsetattr(fd, termios.TCSADRAIN, attr_old)
    return ch


def bar_create_status(tmr_status: TimerStatus,
                      tmr_session: TimerSession) -> str:
    if tmr_status == TimerStatus.IDLE:
        return "START" if tmr_session == TimerSession.WORK else "BREAK"
    return "PAUSE"


def bar_update(working: bool, text: str, bartype: BarType) -> None:
    (path_w, path_i) = named_pipe_get_paths(bartype)
    if path_w == None or path_i == None:
        return
    else:
        (text_w, text_i) = ("", text) if working else (text, "")
        named_pipe_write(path_w, text_w)
        named_pipe_write(path_i, text_i)


def cli_create_keyhint(status: TimerStatus, session: TimerSession) -> str:
    if status == TimerStatus.ACTIVE:
        if session == TimerSession.WORK:
            return "CTRL+c to Pause"
        else:
            return "CTRL+c to Skip"
    else:
        return "[s]tart or [q]uit"


def cli_create_sessionbar(n: SessionNum) -> str:
    bar = "w-b-w-b-w-b-w-l"
    i = 2 * (n - 1)
    return (bar[:i] + "[" + bar[i:i + 1] + "]" + bar[i + 1:])


def cli_create_text(st: TimerStatus, se: TimerSession, n: SessionNum,
                    sec: int) -> str:
    return cli_create_sessionbar(n) + " " + display_create_hhmmss(
        sec) + " - " + cli_create_keyhint(st, se)


def cli_get_echo_functions() -> Tuple[Callable[[], None], Callable[[], None]]:
    fd = sys.stdin.fileno()
    attr_old = termios.tcgetattr(fd)
    attr_new = termios.tcgetattr(fd)
    attr_new[3] = attr_new[3] & ~termios.ECHO  # lflags
    disable_echo = lambda: termios.tcsetattr(fd, termios.TCSADRAIN, attr_new)
    restore_echo = lambda: termios.tcsetattr(fd, termios.TCSADRAIN, attr_old)
    return disable_echo, restore_echo


def cli_hide_cursor() -> None:
    if os.name == 'posix':
        print("\x1b[?25l", end="")


def cli_show_cursor() -> None:
    if os.name == 'posix':
        print("\x1b[?25h", end="")


def cli_update(text: str) -> None:
    w = get_terminal_size().columns
    print("\r\033[2K" + text[:w], end='')


def date_get_monday(week_offset: int) -> date:
    today = datetime.now().date()
    return today - timedelta(days=(today.weekday() + week_offset * 7))


def display_create_hhmmss(sec: int) -> str:
    minute, second = divmod(sec, 60)
    hour, minute = divmod(minute, 60)
    hour_str = str(hour).zfill(2) + ":" if hour > 0 else ''
    return hour_str + str(minute).zfill(2) + ":" + str(second).zfill(2)


def get_timer_session(n: SessionNum) -> TimerSession:
    if n in [1, 3, 5, 7]:
        return TimerSession.WORK
    elif n == 8:
        return TimerSession.LONGBREAK
    else:
        return TimerSession.BREAK


def is_working(tmr_status: TimerStatus, tmr_session: TimerSession) -> bool:
    return (tmr_status == TimerStatus.ACTIVE) and \
        (tmr_session == TimerSession.WORK)


def make_session_lengths(w: int, b: int, l: int) -> SessionLengths:
    return SessionLengths({
        TimerSession.WORK: w,
        TimerSession.BREAK: b,
        TimerSession.LONGBREAK: l
    })


def make_session_num(n: int) -> SessionNum:
    if n > 0:
        return (n - 1) % 8 + 1
    raise ValueError("error in make_session_num(" + str(n) +
                     "): input must be positive integer")


def named_pipe_ensure_exist(path: str) -> NamedPipeStatus:
    status = named_pipe_get_status(path)
    if status == NamedPipeStatus.INVALID:
        print(path + " is not a named pipe ...")
        Path(path).unlink(missing_ok=True)
        os.mkfifo(path)
        print("Created a named pipe at " + path)
    return status


def named_pipes_ensure_exist(bartype: BarType) -> None:
    path_i, path_w = named_pipe_get_paths(bartype)
    status_i = path_i != None and named_pipe_ensure_exist(path_i)
    status_w = path_w != None and named_pipe_ensure_exist(path_w)

    will_show_hint = status_i == NamedPipeStatus.INVALID or status_w == NamedPipeStatus.INVALID
    named_pipes_show_recompile_hint(will_show_hint, bartype)


def named_pipe_get_paths(
        bartype: BarType) -> Tuple[Union[str, None], Union[str, None]]:
    idle_path, work_path = None, None
    if bartype == BarType.POLYBAR or bartype == BarType.XMOBAR:
        idle_path, work_path = "/tmp/.pomodoro-bar-i", "/tmp/.pomodoro-bar-w"
    return idle_path, work_path


def named_pipe_get_status(path: str) -> NamedPipeStatus:
    if Path(path).is_fifo():
        return NamedPipeStatus.VALID
    return NamedPipeStatus.INVALID


def named_pipes_show_recompile_hint(will_show: bool, bartype: BarType) -> None:
    if will_show:
        if bartype == BarType.XMOBAR:
            print("*** Please compile xmobar and rerun ***")
        if bartype == BarType.POLYBAR:
            print("*** Please rerun ***")
        sys.exit()


def named_pipe_write(path, text) -> None:
    Path(path).write_text(text + "\n")


def parser_create() -> argparse.ArgumentParser:
    type_err = lambda x: argparse.ArgumentTypeError(x)

    def check_command_type(s: str) -> str:
        if s == '""':
            return ""
        elif which(s.split(' ')[0]) == None:
            raise type_err("%s not found in PATH" % s)
        return s

    def check_posint_type(s: str) -> int:
        try:
            ival = int(s)
        except:
            raise type_err("%s must be positive integer" % s)
        else:
            if ival <= 0:
                raise type_err("%s must be positive integer" % s)
            return ival

    parser = argparse.ArgumentParser(add_help=False,
                                     formatter_class=CustomHelpFormatter,
                                     prog='pomodoro-bar.py')

    parser_timer = parser.add_argument_group("Timer options")
    parser_timer.add_argument(
        "-w",
        "--work",
        type=check_posint_type,
        default=25,
        metavar="MIN",
        help="Minutes per work session",
    )
    parser_timer.add_argument(
        "-b",
        "--break",
        type=check_posint_type,
        default=5,
        metavar="MIN",
        help="Minutes per break session",
    )
    parser_timer.add_argument(
        "-l",
        "--longbreak",
        type=check_posint_type,
        default=15,
        metavar="MIN",
        help="Minutes per long break session",
    )
    parser_timer.add_argument(
        "--cmdwork",
        type=check_command_type,
        default='""',
        metavar="CMD",
        help="System command to execute when work session ends\
                (e.g. \"xset dpms force off\")",
    )
    parser_timer.add_argument(
        "--cmdbreak",
        type=check_command_type,
        default='""',
        metavar="CMD",
        help="Like --cmdwork but for unskipped break session",
    )
    parser_timer.add_argument(
        "--bartype",
        type=BarType.arg_parse_type,
        default=BarType.NONE,
        metavar="BAR",
        choices=list(BarType),
        help="Specify bar type from " + str(list(BarType)) + " to update.\
        May require additional settings",
    )

    parser_info = parser.add_argument_group("Information options")
    parser_info.add_argument(
        "--raw",
        action="store_true",
        default=argparse.SUPPRESS,
        help="Show raw record in minutes",
    )
    parser_info.add_argument(
        "-r",
        "--record",
        action="store_true",
        default=argparse.SUPPRESS,
        help="Show last 4 week records (adjust session length using -w option)",
    )
    parser_info.add_argument(
        "-v",
        "--version",
        action="store_true",
        default=argparse.SUPPRESS,
        help="Show version",
    )
    parser_info.add_argument(
        "-h",
        "--help",
        action="store_true",
        default=argparse.SUPPRESS,
        help="Show this help text",
    )
    return parser


def record_with_new_session_added(old_record: Record, minutes: int) -> Record:
    new_record = copy.deepcopy(old_record)
    this_monday_str = str(date_get_monday(0))
    if not this_monday_str in old_record:
        days_3_chars = ("Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun")
        week_template = dict.fromkeys(days_3_chars, 0)
        new_record[this_monday_str] = week_template

    today_3_chars = datetime.now().date().strftime("%a")
    new_record[this_monday_str][today_3_chars] += minutes
    return new_record


def record_ensure_exist() -> None:
    path = RECORD_PATH
    Path(path).parents[0].mkdir(mode=0o755, parents=True, exist_ok=True)
    if not Path(path).is_file():
        Path(path).write_text("{}")


def record_read(path: str) -> Record:
    try:
        result = json.loads(Path(path).read_text())
    except ValueError:
        print(path + " is not a valid JSON")
        sys.exit()
    return result


def record_week_summary(record: Record, w_min: int, wk_offset: int) -> str:
    monday_str = str(date_get_monday(wk_offset))
    num_days_in_week = datetime.now().date().weekday(
    ) + 1 if wk_offset == 0 else 7

    if monday_str in record:
        week_workload_full = list(record[monday_str].values())
        week_workload = week_workload_full[:num_days_in_week]
        sessions = [round(x / w_min, 1) for x in week_workload]
        return str(sessions) + " Avg: " + str(mean(sessions))
    else:
        return "--- No Entry ---"


def record_update(updated_record: Record) -> None:
    Path(RECORD_PATH).write_text(json.dumps(updated_record))


def show_help(parser: argparse.ArgumentParser) -> None:
    intro = "pomodoro-bar: A pausable and configurable Pomodoro Timer with \
stats.\nThe record file is stored at $XDG_DATA_HOME/pomodoro-bar\
/record.json, where XDG_DATA_HOME is " + XDG_DATA_HOME_FOLDER
    print(textwrap.fill(intro, width=80), end="\n\n")
    parser.print_help()


def show_record_4weeks(record: Record, w_min: int) -> None:
    weeks = [(0, "This Week      : "), (1, "Last Week      : "),
             (2, "Two Weeks Ago  : "), (3, "Three Weeks Ago: ")]

    print("Number of Sessions, " + str(w_min) + " Minutes Each (Mon - Sun)")
    for n, text in weeks:
        print(text + record_week_summary(record, w_min, n))


def show_record_raw() -> None:
    print(Path(RECORD_PATH).read_text())


def show_version() -> None:
    print("pomodoro-bar-py, version 0.1.0\n\n\
License (SPDX): GPL-2.0-only\n\
Author: Theerawat Kiatdarakun")


def timer(n: SessionNum, bartype: BarType, tmr_len: int) -> int:

    tmr_session = get_timer_session(n)
    working = is_working(TimerStatus.ACTIVE, tmr_session)

    _bartext = lambda s: "[" + str(n) + "]" + display_create_hhmmss(s)
    _clitext = lambda s: cli_create_text(TimerStatus.ACTIVE, tmr_session, n, s)

    custom_update_bar: Callable[[int], None] = \
           lambda s: bar_update(working, _bartext(s), bartype)
    custom_update_cli = lambda s: cli_update(_clitext(s))

    sec_left = timer_start(custom_update_bar, custom_update_cli, tmr_len)
    return sec_left

def timer_end_handler(cmd_w: str, cmd_b: str, tmr_session: TimerSession,
                      session_len: int, sec_left: int) \
                      -> Tuple[TimerStatus, int]:
    if sec_left == 0:
        if tmr_session == TimerSession.WORK:
            os.system(cmd_w)
            new_record = record_with_new_session_added(
                record_read(RECORD_PATH), int(session_len / 60))
            record_update(new_record)
        else:
            os.system(cmd_b)
        return (TimerStatus.IDLE, 1)
    elif tmr_session == TimerSession.WORK:
        return (TimerStatus.PAUSE, 0)
    else:
        return (TimerStatus.SKIP, 1)


def timer_manager(lens: SessionLengths, cmd_w: str, cmd_b: str,
                  bartype: BarType) -> None:
    disable_keyboard_echo, restore_keyboard_echo = cli_get_echo_functions()
    try:
        disable_keyboard_echo()
        cli_hide_cursor()

        timer_manager_start(lens, cmd_w, cmd_b, bartype, TimerStatus.IDLE, \
                            maybe_session_num=1, sec_left=0)
    finally:
        cli_show_cursor()
        restore_keyboard_echo()


def timer_manager_start(session_lengths: SessionLengths, cmd_w: str,
                        cmd_b: str, bartype: BarType, tmr_status: TimerStatus,
                        maybe_session_num: int, sec_left: int) -> None:
    session_num = make_session_num(maybe_session_num)
    tmr_session = get_timer_session(session_num)

    full_session_length = session_lengths[tmr_session]
    tmr_len = sec_left if tmr_status == TimerStatus.PAUSE \
         else full_session_length
    working = is_working(tmr_status, tmr_session)

    bar_text = "[" + str(session_num) + "]" + \
        bar_create_status(tmr_status, tmr_session)
    cli_text = cli_create_text(tmr_status, tmr_session, session_num, tmr_len)

    bar_update(working, bar_text, bartype)
    cli_update(cli_text)

    user_choice = 's'
    if tmr_status != TimerStatus.SKIP:
        user_choice = ask_until_valid_char(['q', 's'])

    if user_choice == 's':
        sec_left_new = timer(session_num, bartype, tmr_len)

        (tmr_status_new, inc) = timer_end_handler(cmd_w, cmd_b, tmr_session,
                                                  full_session_length,
                                                  sec_left_new)
        timer_manager_start(session_lengths, cmd_w, cmd_b, bartype,
                            tmr_status_new, session_num + inc, sec_left_new)
    else:
        print("\033[2K", end='\r')
        bar_update(working, 'POMODORO', bartype)


def timer_start(f1: Callable[[int], None], f2: Callable[[int], None],
                s: int) -> int:
    try:
        while s > 0:
            f1(s)
            f2(s)
            time.sleep(1)
            s = s - 1
        return 0
    except KeyboardInterrupt:
        return s


# -----------------------------------------------------------------------------
try:
    import xdg.BaseDirectory as bd
    XDG_DATA_HOME_FOLDER = bd.xdg_data_home
except ImportError:
    XDG_DATA_HOME_FOLDER = str(Path.home() / ".local/share")

RECORD_PATH = XDG_DATA_HOME_FOLDER + "/pomodoro-bar/record.json"

if __name__ == "__main__":
    parser = parser_create()
    args = parser.parse_args()

    if 'help' in args and args.help:
        show_help(parser)
    elif 'version' in args and args.version:
        show_version()
    elif 'raw' in args and args.raw:
        show_record_raw()
    elif 'record' in args and args.record:
        show_record_4weeks(record_read(RECORD_PATH), w_min=args.work)
    else:
        w_min, b_min, l_min, cmd_w, cmd_b, bartype = itemgetter(
            'work', 'break', 'longbreak', 'cmdwork', 'cmdbreak',
            'bartype')(vars(args))

        record_ensure_exist()
        named_pipes_ensure_exist(bartype)

        (w_sec, b_sec, l_sec) = map(lambda x: x * 60, (w_min, b_min, l_min))
        session_lengths = make_session_lengths(w_sec, b_sec, l_sec)

        timer_manager(session_lengths, cmd_w, cmd_b, bartype)
