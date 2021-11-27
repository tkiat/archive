#!/usr/bin/env python3
import curses
from curses import textpad
import configparser
from datetime import date, datetime
import json
import math
import os
import platform
import string
import subprocess
import sys

def get_average(sum, num):
    return 0 if num == 0 else sum // num

def get_index_page(max_games_per_page, num_games_total):
    cumsum = 0
    result = [cumsum]
    while cumsum < num_games_total:
        if num_games_total - cumsum >= max_games_per_page:
            cumsum += max_games_per_page
            result += [cumsum]
        else:
            cumsum = num_games_total
            result += [cumsum]
    return result

def get_index_pages(max_games_per_page, num_linux_games, num_win_games):
    if max_games_per_page <= 0:
        sys.exit()
    pages_linux = get_index_page(max_games_per_page, num_linux_games)
    pages_win = get_index_page(max_games_per_page, num_win_games)
    return pages_linux, pages_win

def get_week_before(y, w, offset): # offset > 0, at least work for offset < 52
    return (y, w - offset) if w > offset else (y - 1, lastweeknumber(y - 1) - (offset - 1))

def hhmmss_to_sec(hhmmss):
    h, m, s = hhmmss.split(':')
    return int(h) * 3600 + int(m) * 60 + int(s)

def is_window_clicked(window, x, y):
    y_tl, x_tl = window.getbegyx()
    h, w = window.getmaxyx()
    if y_tl <= y <= y_tl + h and x_tl <= x <= x_tl + w:
        return True
    return False

def make_title(x, title):
    firstline = title['1stline']
    secondline = title['2ndline']
    maxlen = max(len(firstline), len(secondline))
    win = curses.newwin(2, maxlen, 0, x)
    win.addstr(0, 0, firstline)
    win.addstr(1, 0, secondline)
    return win, maxlen

def open_file(editor, path):
    subprocess.run([editor, path])

def get_offsetx_mapping(pages, games):
    mapping = {}
    for pagenum in range(len(pages) - 1):
        index_begin = pages[pagenum]
        index_end = pages[pagenum + 1]
        max_playtime_digit = 0
        # determine longest playtime digit on the current page (only number of hour digit varies)
        for game in games[index_begin:index_end]:
            if game['title'] in game_record:
                max_playtime_digit = len(game_record[game['title']]) if len(game_record[game['title']]) > max_playtime_digit else max_playtime_digit
        # calculate offset for each game on this page
        for game in games[index_begin:index_end]:
            if max_playtime_digit == 0:
                offset_x = 11
            else:
                offset_x = max_playtime_digit + 4 if not game['title'] in game_record else 2 + max_playtime_digit - len(game_record[game['title']])
            mapping[game['title']] = offset_x
    return mapping

def print_err_log(window, log):
    h, _ = window.getmaxyx()
    if not hasattr(log, 'stderr'):
        return
    log_s = log.stderr.decode().split("\n")
    firstline = 0
    if len(log_s) > h - 2:
        firstline = len(log_s) - (h - 2)
    linenum = 1
    for i in range(firstline, len(log_s)):
        window.addstr(linenum, 3, log_s[i])
        linenum += 1

def print_game_entries(window, entries, pages, page_num, offset_x, row):
    index_begin = pages[page_num]
    index_end = pages[page_num + 1]
    h, w = window.getmaxyx()
    linenum = 0
    window.attron(curses.color_pair(CONTENT_WINDOW))
    linenum += 1
    linenum += 2
    max_offset = 0
    for index, entry in enumerate(entries[index_begin:index_end]):
        offset = offset_x[entry['title']]
        max_offset = offset if offset > max_offset else max_offset
        window.addstr(linenum, offset, entry['playtime'] + entry['title'] + entry['title_extra'])
        linenum += 1
    page_str = ' page ' + str(page_num + 1) + '/' + str(len(pages) - 1)
    window.addstr(1, max_offset - 7, 'Total  Title')
    window.addstr(0, w - len(page_str) - 2, page_str)
    window.attroff(curses.color_pair(CONTENT_WINDOW))
    # highlight current row
    window.attron(curses.color_pair(CONTENT_WINDOW_HIGHLIGHT))
    window.addstr(3 + row - index_begin, offset_x[entries[row]['title']], entries[row]['playtime'] + entries[row]['title'] + entry['title_extra'])
    window.attroff(curses.color_pair(CONTENT_WINDOW_HIGHLIGHT))

def print_record(window, options, row_cur_record):
    h, _ = window.getmaxyx()
    if h < 14:
        window.addstr(1, 1, "Make window higher to view the records")
    else:
        i = 0
        window.addstr(i + 1,  1, "Average Time Spent per Week")
        window.addstr(i + 3,  1, "This Week   : " + avg_record['thisweek'])
        window.addstr(i + 4,  1, "Last Week   : " + avg_record['lastweek'])
        window.addstr(i + 5,  1, "Last 2 Weeks: " + avg_record['last2weeks'])
        window.addstr(i + 6,  1, "Last 4 Weeks: " + avg_record['last4weeks'])
        window.addstr(i + 7,  1, "This Year   : " + avg_record['thisyear'])
        window.addstr(i + 8,  1, "Last Year   : " + avg_record['lastyear'])
        window.addstr(i + 9,  1, "All Time    : " + avg_record['alltime'])
        window.addstr(i + 11, 1, options[0])
        window.addstr(i + 12, 1, options[1])
        window.attron(curses.color_pair(CONTENT_WINDOW_HIGHLIGHT))
        window.addstr(i + 11 + row_cur_record, 1, options[row_cur_record])
        window.attroff(curses.color_pair(CONTENT_WINDOW_HIGHLIGHT))

def read_config_file(path):
    conf = configparser.ConfigParser()
    conf.read(path)
    conf_default = conf['DEFAULT']

    directories = list(filter(None, conf_default.get("directories").split('\n')))
    editor_linux = conf_default.get("editor_linux")
    menu = json.loads(conf_default.get("menu_order"))
    temp = [None] * len(menu)
    for key, value in menu.items():
        temp[int(key)] = value
    menu = temp

    mwb_l  = conf_default.get("mainwin_border_l") if not conf_default.get("mainwin_border_l") == "default" else 0
    mwb_r  = conf_default.get("mainwin_border_r") if not conf_default.get("mainwin_border_r") == "default" else 0
    mwb_t  = conf_default.get("mainwin_border_t") if not conf_default.get("mainwin_border_t") == "default" else 0
    mwb_b  = conf_default.get("mainwin_border_b") if not conf_default.get("mainwin_border_b") == "default" else 0
    mwb_tl = conf_default.get("mainwin_border_tl") if not conf_default.get("mainwin_border_tl") == "default" else 0
    mwb_tr = conf_default.get("mainwin_border_tr") if not conf_default.get("mainwin_border_tr") == "default" else 0
    mwb_bl = conf_default.get("mainwin_border_bl") if not conf_default.get("mainwin_border_bl") == "default" else 0
    mwb_br = conf_default.get("mainwin_border_br") if not conf_default.get("mainwin_border_br") == "default" else 0
    mwb = [mwb_l, mwb_r, mwb_t, mwb_b, mwb_tl, mwb_tr, mwb_bl, mwb_br]

    game_record_path = os.path.dirname(os.path.realpath(__file__)) + conf_default.get('game_record')
    help_path = os.path.dirname(os.path.realpath(__file__)) + conf_default.get('help')
    time_record_path = os.path.dirname(os.path.realpath(__file__)) + conf_default.get('time_record')
    startfile_linux = conf_default.get("startfile_linux")
    startfile_linux_dosbox = conf_default.get("startfile_linux_dosbox")
    startfile_linux_wine32 = conf_default.get("startfile_linux_wine32")
    startfile_linux_wine64 = conf_default.get("startfile_linux_wine64")
    startfile_windows = conf_default.get("startfile_windows")
    themes = json.loads(conf_default.get('themes'))
    theme = themes[conf_default.get("theme_chosen")]
    return directories, editor_linux, game_record_path, help_path, menu, mwb, startfile_linux, startfile_linux_dosbox, startfile_linux_wine32, startfile_linux_wine64, startfile_windows, theme, time_record_path

def read_json_file(path):
    if not os.path.exists(path):
        f = open(path, 'w+')
        f.close()
    with open(path, 'r') as f:
        my_json = f.read()
    try:
        my_json = json.loads(my_json)
    except ValueError:
        if not my_json:
            my_json = {}
        else:
            print("Log file must be either in JSON format or absolutely empty")
            sys.exit()
    return my_json

def sec_to_hhmmss(sec):
    return str(math.floor(sec/3600)) + ":" + str(math.floor(sec % 3600 / 60)).zfill(2) + ":" + str(sec % 60).zfill(2)

def start_game(pages, os_name, row):
    global avg_record
    start = datetime.now()
    if os_name == 'linux':
        title = linux_games[row]['title']
        path = linux_games[row]['path']
        realpath = os.path.realpath(path) # deference symbolic link. Put here due to bugs e.g. from game Haimrik (wine) the data folder must have the same name as the executable
        prefix = []
        if os.path.basename(path) == startfile_linux_wine32:
            prefix = ['wine32']
        elif os.path.basename(path) == startfile_linux_wine64:
            prefix = ['wine64']
        elif os.path.basename(path) == startfile_linux_dosbox:
            prefix = ['dosbox']
        p_log = subprocess.run(prefix + [realpath], stderr=subprocess.PIPE, stdout=subprocess.DEVNULL)
    elif os_name == 'windows':
        title = win_games[row]['title']
        path = win_games[row]['path']
        realpath = os.path.realpath(path)
        p_log = subprocess.run('"' + realpath + '"', shell=True, stderr=subprocess.PIPE, stdout=subprocess.DEVNULL)
    playtime_sec = math.floor((datetime.now() - start).total_seconds())
    # error happens
    if playtime_sec == 0:
        return p_log
    # update time record
    y, w, _ = date.today().isocalendar()
    y = str(y)
    w = str(w)
    if not y in time_record:
        time_record[y] = {}
    time_record[y][w] = sec_to_hhmmss(playtime_sec if not w in time_record[y] else (hhmmss_to_sec(time_record[y][w]) + playtime_sec))
    with open(time_record_path, 'w') as f:
        f.write(json.dumps(time_record, sort_keys=True, indent=2))
    avg_record = summarize_record(time_record)
    # update game record
    game_record[title] = sec_to_hhmmss(playtime_sec if not title in game_record else hhmmss_to_sec(game_record[title]) + playtime_sec)
    if os_name == 'linux':
        linux_games[row]['playtime'] = game_record[title] + '  '
    elif os_name == 'windows':
        win_games[row]['playtime'] = game_record[title] + '  '
    with open(game_record_path, 'w') as f:
        f.write(json.dumps(game_record, sort_keys=True, indent=2))
    return p_log

def lastweeknumber(year):
    return date(year, 12, 28).isocalendar()[1]

def summarize_record(record):
    thisyear, thisweek, _ = date.today().isocalendar()
    lastweek = [get_week_before(thisyear, thisweek, t) for t in [1]]
    lasttwoweek = [get_week_before(thisyear, thisweek, t) for t in [1, 2]]
    lastfourweek = [get_week_before(thisyear, thisweek, t) for t in [1, 2, 3, 4]]
    lastyear = thisyear - 1

    total_thisweek   = {'sec': 0}
    total_lastweek   = {'sec': 0}
    total_last2weeks = {'sec': 0, 'num': 0}
    total_last4weeks = {'sec': 0, 'num': 0}
    total_thisyear   = {'sec': 0, 'num': 0}
    total_lastyear   = {'sec': 0, 'num': 0}
    total_alltime    = {'sec': 0, 'num': 0}
    for y in record:
        for w in record[y]:
            if (int(y), int(w)) in lastfourweek:
                total_last4weeks['sec'] += hhmmss_to_sec(record[y][w])
                total_last4weeks['num'] += 1
                if (int(y), int(w)) in lasttwoweek:
                    total_last2weeks['sec'] += hhmmss_to_sec(record[y][w])
                    total_last2weeks['num'] += 1
                    if (int(y), int(w)) in lastweek:
                        total_lastweek['sec'] = hhmmss_to_sec(record[y][w])
            if int(y) == thisyear:
                total_thisyear['sec'] += hhmmss_to_sec(record[y][w])
                total_thisyear['num'] += 1
                if int(w) == thisweek:
                    total_thisweek['sec'] = hhmmss_to_sec(record[y][w])
            if int(y) == lastyear:
                total_lastyear['sec'] += hhmmss_to_sec(record[y][w])
                total_lastyear['num'] += 1
            total_alltime['sec'] += hhmmss_to_sec(record[y][w])
            total_alltime['num'] += 1
    avg_thisweek   = sec_to_hhmmss(total_thisweek['sec'])
    avg_lastweek   = sec_to_hhmmss(total_lastweek['sec'])
    avg_last2weeks = sec_to_hhmmss(get_average(total_last2weeks['sec'], total_last2weeks['num']))
    avg_last4weeks = sec_to_hhmmss(get_average(total_last4weeks['sec'], total_last4weeks['num']))
    avg_thisyear   = sec_to_hhmmss(get_average(total_thisyear['sec'], total_thisyear['num']))
    avg_lastyear   = sec_to_hhmmss(get_average(total_lastyear['sec'], total_lastyear['num']))
    avg_alltime    = sec_to_hhmmss(get_average(total_alltime['sec'], total_alltime['num']))
    return {"thisweek": avg_thisweek, "lastweek": avg_lastweek, "last2weeks": avg_last2weeks, "last4weeks": avg_last4weeks, "thisyear": avg_thisyear, "lastyear": avg_lastyear, "alltime": avg_alltime}

# global variable
TITLE_WINDOW = 1
TITLE_WINDOW_HIGHLIGHT = 2
CONTENT_WINDOW = 3
CONTENT_WINDOW_HIGHLIGHT = 4
CONTENT_WINDOW_BORDER = 5
color_mapping = { "black": curses.COLOR_BLACK, "blue": curses.COLOR_BLUE, "cyan": curses.COLOR_CYAN, "green": curses.COLOR_GREEN, "magenta": curses.COLOR_MAGENTA, "red": curses.COLOR_RED, "white": curses.COLOR_WHITE, "yellow": curses.COLOR_YELLOW }
# config file
conf_path = os.path.dirname(os.path.realpath(__file__)) + '/data/settings.conf'
directories, editor_linux, game_record_path, help_path, menu, mwb, startfile_linux, startfile_linux_dosbox, startfile_linux_wine32, startfile_linux_wine64, startfile_windows, theme, time_record_path = read_config_file(conf_path)
roles = [x['role'] for x in menu]

color_tw_fg = theme["title_window"]["fg"]
color_tw_bg = theme["title_window"]["bg"]
color_twh_fg = theme["title_window_highlight"]["fg"]
color_twh_bg = theme["title_window_highlight"]["bg"]
color_cw_fg = theme["content_window"]["fg"]
color_cw_bg = theme["content_window"]["bg"]
color_cwh_fg = theme["content_window_highlight"]["fg"]
color_cwh_bg = theme["content_window_highlight"]["bg"]
color_cwb_fg = theme["content_window_border"]["fg"]
color_cwb_bg = theme["content_window_border"]["bg"]

# records
game_record = read_json_file(game_record_path)
time_record = read_json_file(time_record_path)
avg_record = summarize_record(time_record)
# iterate all directories
linux_games, win_games = [], []
for games_dir in directories:
    if not os.path.isdir(games_dir):
        continue
    for i in os.listdir(games_dir):
        if not os.path.isfile(i):
            game_title = i
            game_folder_path = games_dir + "/" + i
        if not os.path.isdir(game_folder_path):
            continue
        for f in os.listdir(game_folder_path):
            file_path = game_folder_path + "/" + f
            if os.path.isfile(file_path):
                playtime = game_record[game_title] + '  ' if game_title in game_record else ''
                if f == startfile_linux:
                    linux_games += [{'title': game_title, 'path': file_path, 'playtime': playtime, 'title_extra': ''}]
                if f == startfile_linux_dosbox:
                    linux_games += [{'title': game_title, 'path': file_path, 'playtime': playtime, 'title_extra': ' (Dosbox)'}]
                if f == startfile_linux_wine32:
                    linux_games += [{'title': game_title, 'path': file_path, 'playtime': playtime, 'title_extra': ' (Wine32)'}]
                if f == startfile_linux_wine64:
                    linux_games += [{'title': game_title, 'path': file_path, 'playtime': playtime, 'title_extra': ' (Wine64)'}]
                if f == startfile_windows:
                    win_games += [{'title': game_title, 'path': file_path, 'playtime': playtime, 'title_extra': ''}]
# sort by title
linux_games = sorted(linux_games, key = lambda i : i['title'].lower())
win_games = sorted(win_games, key = lambda i : i['title'].lower())
# num games
num_linux_games = len(linux_games)
num_win_games = len(win_games)

def main(stdscr):
    curses.mousemask(1)
    curses.curs_set(0)
    stdscr.keypad(1)
    curses.init_pair(TITLE_WINDOW, color_mapping[color_tw_fg], color_mapping[color_tw_bg])
    curses.init_pair(TITLE_WINDOW_HIGHLIGHT, color_mapping[color_twh_fg], color_mapping[color_twh_bg])
    curses.init_pair(CONTENT_WINDOW, color_mapping[color_cw_fg], color_mapping[color_cw_bg])
    curses.init_pair(CONTENT_WINDOW_HIGHLIGHT, color_mapping[color_cwh_fg], color_mapping[color_cwh_bg])
    curses.init_pair(CONTENT_WINDOW_BORDER, color_mapping[color_cwb_fg], color_mapping[color_cwb_bg])

    h, w = stdscr.getmaxyx()
    # main window
    win_main = curses.newwin(h - 2, w, 2, 0)
    win_main.erase()
    win_main.attron(curses.color_pair(CONTENT_WINDOW_BORDER))
    win_main.border(*mwb)
    win_main.attroff(curses.color_pair(CONTENT_WINDOW_BORDER))
    win_main.bkgd(' ', curses.color_pair(CONTENT_WINDOW))
    # title windows
    win_title = [None] * len(menu)
    x_offset = 0
    for i in range(len(menu)):
        win_title[i], offset = make_title(x_offset, menu[i])
        x_offset += offset

    p_log = ""
    col_cur = 0
    row_cur_linux = 0
    row_cur_win = 0
    row_cur_record = 0
    page_cur_linux = 0
    page_cur_win = 0
    pages_linux, pages_win = get_index_pages(win_main.getmaxyx()[0] - 4, num_linux_games, num_win_games)
    offsetx_linux = get_offsetx_mapping(pages_linux, linux_games)
    offsetx_win = get_offsetx_mapping(pages_win, win_games)
    record_options = ['View Time Record', 'View Game Record']
    # TODO editor linux or windows add
    while 1:
        stdscr.refresh()
        # update title windows
        for i in range(len(menu)):
            win_title[i].bkgd(' ', curses.color_pair(TITLE_WINDOW_HIGHLIGHT if i == col_cur else TITLE_WINDOW))
            win_title[i].refresh()
        # update main window
        win_main.erase()
        win_main.attron(curses.color_pair(CONTENT_WINDOW_BORDER))
        win_main.border(*mwb)
        win_main.attroff(curses.color_pair(CONTENT_WINDOW_BORDER))
        if roles[col_cur] == 'linux':
            print_game_entries(win_main, linux_games, pages_linux, page_cur_linux, offsetx_linux, row_cur_linux)
        elif roles[col_cur] == 'windows':
            print_game_entries(win_main, win_games, pages_win, page_cur_win, offsetx_win, row_cur_win)
        elif roles[col_cur] == 'errlog':
            print_err_log(win_main, p_log)
        elif roles[col_cur] == 'record':
            print_record(win_main, record_options, row_cur_record)
        win_main.refresh()
        try:
            key = stdscr.getch()
        except KeyboardInterrupt:
            break
        # resize
        if key == curses.KEY_RESIZE:
            # create all windows again
            h, w = stdscr.getmaxyx()
            win_main = curses.newwin(h - 2, w, 2, 0)
            win_main.bkgd(' ', curses.color_pair(CONTENT_WINDOW))
            x_offset = 0
            for i in range(len(menu)):
                win_title[i], offset = make_title(x_offset, menu[i])
                x_offset += offset

            pages_linux, pages_win = get_index_pages(win_main.getmaxyx()[0] - 4, num_linux_games, num_win_games)
            offsetx_linux = get_offsetx_mapping(pages_linux, linux_games)
            offsetx_win = get_offsetx_mapping(pages_win, win_games)
            page_cur_linux = 0
            row_cur_linux = 0
            page_cur_win = 0
            row_cur_win = 0
        # q: previous page
        elif key == ord('q'):
            if roles[col_cur] == 'linux' and page_cur_linux > 0:
                page_cur_linux -= 1
                row_cur_linux = pages_linux[page_cur_linux]
            elif roles[col_cur] == 'windows' and page_cur_win > 0:
                page_cur_win -= 1
                row_cur_win = pages_win[page_cur_win]
        # w: next page
        elif key == ord('e'):
            if roles[col_cur] == 'linux' and page_cur_linux < len(pages_linux) - 2:
                page_cur_linux += 1
                row_cur_linux = pages_linux[page_cur_linux]
            elif roles[col_cur] == 'windows' and page_cur_win < len(pages_win) - 2:
                page_cur_win += 1
                row_cur_win = pages_win[page_cur_win]
        # left arrow, h, a
        elif (key == curses.KEY_LEFT or key == ord('h') or key == ord('a')) and col_cur > 0:
            col_cur -= 1
        # right arrow, l, d
        elif (key == curses.KEY_RIGHT or key == ord('l') or key == ord('d')) and col_cur < len(menu) - 1:
            col_cur += 1
        # down, j, s
        elif key == curses.KEY_DOWN or key == ord('j') or key == ord('s'):
            if roles[col_cur] == 'linux' and row_cur_linux < pages_linux[page_cur_linux + 1] - 1:
                row_cur_linux += 1
            elif roles[col_cur] == 'windows' and row_cur_win < pages_win[page_cur_win + 1] - 1:
                row_cur_win += 1
            elif roles[col_cur] == 'record' and row_cur_record < len(record_options) - 1:
                row_cur_record += 1
            elif roles[col_cur] == 'exit':
                break
        # up, k, w
        elif (key == curses.KEY_UP or key == ord('k') or key == ord('w')):
            if roles[col_cur] == 'linux' and row_cur_linux > pages_linux[page_cur_linux]:
                row_cur_linux -= 1
            elif roles[col_cur] == 'windows' and row_cur_win > pages_win[page_cur_win]:
                row_cur_win -= 1
            elif roles[col_cur] == 'record' and row_cur_record > 0:
                row_cur_record -= 1
        # enter
        elif key == curses.KEY_ENTER or key in [10, 13]:
            if roles[col_cur] == 'linux':
                p_log = start_game(pages_linux, 'linux', row_cur_linux)
                offsetx_linux = get_offsetx_mapping(pages_linux, linux_games)
            elif roles[col_cur] == 'windows':
                p_log = start_game(pages_win, 'windows', row_cur_win)
                offsetx_win = get_offsetx_mapping(pages_win, win_games)
            elif roles[col_cur] == 'record':
                if row_cur_record == 0:
                    open_file(editor_linux, time_record_path)
                elif row_cur_record == 1:
                    open_file(editor_linux, game_record_path)
            elif roles[col_cur] == 'setting':
                open_file(editor_linux, conf_path)
            elif roles[col_cur] == 'help':
                open_file(editor_linux, help_path)
            elif roles[col_cur] == 'exit':
                break
        # mouse
        elif (key == curses.KEY_MOUSE):
            _, x, y, _, _ = curses.getmouse()
            for i in range(len(win_title)):
                if is_window_clicked(win_title[i], x, y):
                    if i == col_cur:
                        if roles[col_cur] == 'setting':
                            open_file(editor_linux, conf_path)
                        elif roles[col_cur] == 'help':
                            open_file(editor_linux, help_path)
                        elif roles[col_cur] == 'exit':
                            return
                    else:
                        col_cur = i
                    break
            if is_window_clicked(win_main, x, y):
                y_tl, x_tl = win_main.getbegyx()
                if roles[col_cur] == 'linux':
                    y = y - y_tl - 3
                    row_select = pages_linux[page_cur_linux] + y
                    if row_select == row_cur_linux:
                        p_log = start_game(pages_linux, 'linux', row_cur_linux)
                        offsetx_linux = get_offsetx_mapping(pages_linux, linux_games)
                    elif pages_linux[page_cur_linux] <= row_select <= pages_linux[page_cur_linux + 1] - 1:
                        row_cur_linux = pages_linux[page_cur_linux] + y
                elif roles[col_cur] == 'windows':
                    y = y - y_tl - 3
                    row_select = pages_win[page_cur_win] + y
                    if row_select == row_cur_win:
                        p_log = start_game(pages_win, 'windows', row_cur_win)
                        offsetx_win = get_offsetx_mapping(pages_win, win_games)
                    elif pages_win[page_cur_win] <= row_select <= pages_win[page_cur_win + 1] - 1:
                        row_cur_win = pages_win[page_cur_win] + y
                elif roles[col_cur] == 'record':
                    y = y - y_tl - 11
                    if y == row_cur_record:
                        if row_cur_record == 0:
                            open_file(editor_linux, time_record_path)
                        elif row_cur_record == 1:
                            open_file(editor_linux, game_record_path)
                    elif 0 <= y <= 1:
                        row_cur_record = y
        # ESC
        elif key == 27:
            break

if __name__ == '__main__':
    curses.wrapper(main)
