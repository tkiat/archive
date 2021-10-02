#!/usr/bin/env python3
"""
A simple pomodoro timer that supports pause, configuration, and statistics
With polybar and xmobar integrations.
"""

import textwrap
import argparse
import curses
from datetime import datetime, timedelta
from enum import Enum, auto
import json
import os
from pathlib import Path
from shutil import which
import signal
import sys
import time
import xdg.BaseDirectory as bd


class BarType(Enum):
    xmobar = auto()
    polybar = auto()
    none = auto()

    def __str__(self):
        return self.name

    def __repr__(self):
        return str(self)

    @staticmethod
    def arg_parse_type(s):
        try:
            return BarType[s]
        except KeyError:
            return s


# TODO chnage this
class CustomFormatter(argparse.HelpFormatter):
    def __init__(self, prog):
        super().__init__(prog, max_help_position=40, width=80)

    def add_usage(self, usage, actions, groups, prefix='Usage: '):
        return super(CustomFormatter, self).\
            add_usage(usage, actions, groups, prefix)

    def _format_action_invocation(self, action):
        if action.option_strings and action.nargs != 0:
            default = self._get_default_metavar_for_optional(action)
            args_string = self._format_args(action, default)
            return ', '.join(action.option_strings) + ' ' + args_string
        return super()._format_action_invocation(action)


def bar_update(text_w, text_i):
    def named_pipe_write(path, content):
        with open(path, "w") as fp:
            fp.write(content + "\n")

    if BARTYPE == BarType.polybar or BARTYPE == BarType.xmobar:
        named_pipe_write(PIPE_WORK_PATH, text_w)
        named_pipe_write(PIPE_IDLE_PATH, text_i)


def create_timer_digit(sec):
    """Convert seconds to HH:MM:SS format."""
    minute, second = divmod(sec, 60)
    hour, minute = divmod(minute, 60)
    hour_str = str(hour).zfill(2) + ":" if hour > 0 else ''
    return hour_str + str(minute).zfill(2) + ":" + str(second).zfill(2)


def create_session_bar(session):
    progress = "w-b-w-b-w-b-w-lb"
    index_left = 2 * ((session - 1) % 8)
    index_right = index_left + (0 if session % 8 != 0 else 1)
    return (progress[:index_left] + "[" +
            progress[index_left:index_right + 1] + "]" +
            progress[index_right + 1:])


def get_session_length(session_num):
    """Get duration in minutes from session number"""
    if session_num % 8 in [1, 3, 5, 7]:
        return W_MIN * 60
    if session_num % 8 in [2, 4, 6]:
        return B_MIN * 60
    return L_MIN * 60


def named_pipes_ensure_exist(path):
    if path != None:
        temp_path = Path(path)
        if not temp_path.is_fifo():
            print(path + " not found ...")
            temp_path.unlink(missing_ok=True)
            os.mkfifo(path)
            print("Created a named pipe at " + path)
            return 1
    return 0


def named_pipe_get_paths(bartype):
    if bartype == BarType.polybar or bartype == BarType.xmobar:
        idle_path = "/tmp/.pomodoro-bar-i"
        work_path = "/tmp/.pomodoro-bar-w"
        return idle_path, work_path
    return None, None


def parser_declare():
    def check_command_type(s):
        if s != '' and which(s) == None:
            raise argparse.ArgumentTypeError("%s not found in PATH" % s)
        return s

    def check_posint_type(s):
        try:
            ival = int(s)
        except:
            raise argparse.ArgumentTypeError("%s must be positive integer" % s)
        else:
            if ival <= 0:
                raise argparse.ArgumentTypeError(
                    "%s must be positive integer" % s)
            return ival

    parser = argparse.ArgumentParser(
        add_help=False,
        formatter_class=lambda prog: CustomFormatter(prog),
        prog='pomodoro-bar.py')

    parser_timer = parser.add_argument_group("Timer options")
    parser_timer.add_argument(
        "-w",
        "--work",
        type=check_posint_type,
        default=25,
        metavar="MIN",
        help="work duration (default: 25 minutes)",
    )
    parser_timer.add_argument(
        "-b",
        "--break",
        type=check_posint_type,
        default=5,
        metavar="MIN",
        help="break duration (default: 5 minutes)",
    )
    parser_timer.add_argument(
        "-l",
        "--longbreak",
        type=check_posint_type,
        default=15,
        metavar="MIN",
        help="long break duration (default: 15 minutes)",
    )
    parser_timer.add_argument(
        "--cmdwork",
        type=check_command_type,
        default="",
        metavar="CMD",
        help="system command to execute when work session ends\
                (e.g. \"xset dpms force off\") (default: \"\")",
    )
    parser_timer.add_argument(
        "--cmdbreak",
        type=check_command_type,
        default="",
        metavar="CMD",
        help="like --cmdwork but for unskipped break session (default: \"\")",
    )
    parser_timer.add_argument(
        "--bar",
        type=BarType.arg_parse_type,
        default=BarType.none,
        metavar="BAR",
        choices=list(BarType),
        help="specify bar type " + str(list(BarType)) + " to update.\
        May require additional settings (default: none)",
    )

    parser_info = parser.add_argument_group("Information options")
    parser_info.add_argument(
        "--raw",
        action="store_true",
        help="show raw record in minutes",
    )
    parser_info.add_argument(
        "-r",
        "--record",
        action="store_true",
        help="show last 4 week records (adjust session length using -w option)",
    )
    parser_info.add_argument(
        "-v",
        "--version",
        action="store_true",
        help="show version",
    )
    parser_info.add_argument(
        "-h",
        "--help",
        action="store_true",
        help="show help message",
    )
    return parser


def parser_read(parser):
    args = parser.parse_args()

    if args.help:
        text = "pomodoro-bar: A pausable and configurable Pomodoro Timer with \
    stats.\nThe record file is stored at $XDG_DATA_HOME/pomodoro-bar/record.json, \
    where XDG_DATA_HOME is currently at " + bd.xdg_data_home
        print(textwrap.fill(text, width=80), end="\n\n")
        parser.print_help()
        sys.exit()

    if args.version:
        print("pomodoro-bar-py, version 0.1.0\n\n\
    License (SPDX): GPL-2.0-only\n\
    Author: Theerawat Kiatdarakun")
        sys.exit()

    if args.raw:
        print(json.dumps(RECORD))
        sys.exit()

    w_min = args.work

    if args.record:
        today = datetime.now().date()
        this_monday = today - timedelta(days=today.weekday())

        print("Number of Sessions, " + str(w_min) +
              " Minutes Each (Mon - Sun)")
        print("This Week      : ", end="")
        record_show_week(this_monday, 0)
        print("Last Week      : ", end="")
        record_show_week(this_monday, 1)
        print("Two Weeks Ago  : ", end="")
        record_show_week(this_monday, 2)
        print("Three Weeks Ago: ", end="")
        record_show_week(this_monday, 3)
        sys.exit()

    b_min = getattr(args, 'break')
    l_min = args.longbreak

    return w_min, b_min, l_min, args.cmdwork, args.cmdbreak, args.bar


def record_ensure_exist(folder, path):
    Path(folder).mkdir(mode=0o755, parents=True, exist_ok=True)
    if not Path(path).is_file():
        Path(path).write_text("{}")


def record_read(path):
    try:
        result = json.loads(Path(path).read_text())
    except ValueError:
        print(RECORD_PATH + " is not a valid JSON")
        sys.exit()
    return result


def record_show_week(this_monday, wk_offset):
    past_monday_str = lambda wk_o: str(this_monday - timedelta(days=(wk_o * 7))
                                       )
    actual_days_in_week = lambda wk_o: datetime.now().date().weekday(
    ) + 1 if wk_o == 0 else 7

    if past_monday_str(wk_offset) in RECORD:
        week_workload_full = list(RECORD[past_monday_str(wk_offset)].values())
        week_workload = week_workload_full[:actual_days_in_week(wk_offset)]

        sessions = [round(x / W_MIN, 1) for x in week_workload]
        avg = round(sum(sessions) / len(sessions), 1)
        print(str(sessions) + " Avg: " + str(avg))
    else:
        print("--- No Entry ---")


def sigterm_handler(*_):
    """Handler for SIGTERM, to exit gracefully."""
    global RUNNING
    RUNNING = False


def start_session(stdscr, seconds_left, session, progress_bar):
    """Start/Continue a pomodoro session."""
    is_working = False
    try:
        session_num = session % 8
        is_working = bool(session_num in [1, 3, 5, 7])
        instruction_text = "CTRL+c to Pause    " if is_working else "CTRL+c to Skip    "
        stdscr.refresh()
        while seconds_left > 0:
            hhmmss = create_timer_digit(seconds_left)
            xmobar_text = "[" + str(session_num) + "]" + hhmmss
            update_cli_text(stdscr, progress_bar, hhmmss, instruction_text)
            if is_working:
                bar_update(xmobar_text, "")
            else:
                bar_update("", xmobar_text)
            stdscr.refresh()
            time.sleep(1)
            seconds_left -= 1
        new_session = session + 1
        if is_working:
            os.system(CMD_W)
            bar_update("", "[" + str(new_session % 8) + "]BREAK")
            record_update(W_MIN)
        else:
            os.system(CMD_B)
            bar_update("", "[" + str(new_session % 8) + "]START")
        return get_session_length(new_session), new_session, False
    except KeyboardInterrupt:
        # save progress if working else skip
        if is_working:
            xmobar_text = "[P]" + create_timer_digit(seconds_left)
            bar_update("", xmobar_text)
            return seconds_left, session, False
        bar_update("", "[" + str(session % 8) + "]START")
        return get_session_length(session + 1), session + 1, True


def update_cli_text(stdscr, progress_bar, hhmmss, instruction):
    stdscr.addstr(0, 0, progress_bar + " " + hhmmss + " - " + instruction)


def record_update(minutes):
    today = datetime.now().date()
    this_monday = today - timedelta(days=today.weekday())
    if not str(this_monday) in RECORD:
        template = {
            "Mon": 0,
            "Tue": 0,
            "Wed": 0,
            "Thu": 0,
            "Fri": 0,
            "Sat": 0,
            "Sun": 0,
        }
        RECORD[str(this_monday)] = template
    RECORD[str(this_monday)][today.strftime("%a")] += minutes
    Path(RECORD_PATH).write_text(json.dumps(RECORD))


def timer_manager(stdscr):
    curses.noecho()
    curses.cbreak()
    stdscr.keypad(1)
    curses.curs_set(0)

    skip_prompt = False
    session_num = 1
    sec_left = W_MIN * 60
    bar_update("", "[1]START")
    try:
        while RUNNING:
            progress_bar = create_session_bar(session_num)
            hhmmss = create_timer_digit(sec_left)
            instruction = "[s]tart or [q]uit"
            update_cli_text(stdscr, progress_bar, hhmmss, instruction)
            ans = ord("s")
            if not skip_prompt:
                ans = stdscr.getch()
            if ans == ord("s"):
                if sec_left:
                    stdscr.clear()
                    sec_left, session_num, skip_prompt = start_session(
                        stdscr, sec_left, session_num, progress_bar)
            elif ans == ord("q"):
                break
            elif ans == curses.KEY_RESIZE:
                stdscr.clear()
                update_cli_text(stdscr, progress_bar, hhmmss, instruction)
    except KeyboardInterrupt:
        pass
    finally:
        bar_update("", "POMODORO")
        stdscr.keypad(0)
        curses.echo()
        curses.nocbreak()
        curses.endwin()


# -----------------------------------------------------------------------------
RECORD_FOLDER = bd.xdg_data_home + '/pomodoro-bar/'
RECORD_PATH = RECORD_FOLDER + "record.json"

record_ensure_exist(RECORD_FOLDER, RECORD_PATH)
RECORD = record_read(RECORD_PATH)

W_MIN, B_MIN, L_MIN, CMD_W, CMD_B, BARTYPE = parser_read(parser_declare())

PIPE_IDLE_PATH, PIPE_WORK_PATH = named_pipe_get_paths(BARTYPE)

status_i = named_pipes_ensure_exist(PIPE_IDLE_PATH)
status_w = named_pipes_ensure_exist(PIPE_WORK_PATH)
if status_i == 1 or status_w == 1:
    if BARTYPE == BarType.xmobar:
        print("*** Please compile xmobar and rerun ***")
    if BARTYPE == BarType.polybar:
        print("*** Please rerun ***")
    sys.exit()

# handle SIGTERM gracefully
RUNNING = True
signal.signal(signal.SIGTERM, sigterm_handler)

if __name__ == "__main__":
    curses.wrapper(timer_manager)
