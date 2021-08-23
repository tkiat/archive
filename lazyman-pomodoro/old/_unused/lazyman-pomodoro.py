#!/usr/bin/env python3
from datetime import datetime, timedelta
from termios import tcflush, TCIFLUSH
import ast
import calendar
import configparser
import os
import sys
import time
import json

# constants
data_dir = os.path.dirname(os.path.realpath(sys.argv[0])) + '/pomodoro-data'
conf_path = data_dir + '/pomodoro.conf'
logfile_path = data_dir + '/log.json'

work_min = None
normalbreak_min = None
longbreak_min = None
workend_notif = None
breakend_notif = None

def read_conf():
	config = configparser.ConfigParser()
	config.read(conf_path)
	conf = config['DEFAULT']

	global work_min, normalbreak_min, longbreak_min, workend_notif, breakend_notif
	work_min = conf.getint('WorkDurationMinutes')
	normalbreak_min = conf.getint('BreakDurationMinutes')
	longbreak_min = conf.getint('LongBreakDurationMinutes')

	workend_notif = conf.get('WorkEndTextToSpeech')
	breakend_notif = conf.get('BreakEndTextToSpeech')

def pomodoro_start():
	print('Welcome to Lazyman Pomodoro!')

	options_common = {'q': 'quit', 'l': 'log', 'f': 'config'}
	options_start = {**{'s': 'start'}, **options_common}
	options_continue = {**{'c': 'continue'}, **options_common}

	isWorkSession = True
	isClockStarted = False
	remaining_sec = work_min * 60
	numSessions = 0

	try:
		while 1:
			if remaining_sec:
				break_sec = (longbreak_min if numSessions % 4 == 0 else normalbreak_min) * 60
				options_current = options_continue if isClockStarted else options_start
				# options_current = options_continue if not (isWorkSession and remaining_sec == work_min * 60) and not (not isWorkSession and remaining_sec == break_sec) else options_start
				tcflush(sys.stdin, TCIFLUSH)
				ans = prompt(get_prompt_dialog(options_current), options_current)
				if ans == 'q':
					print(f'\33]0;Terminal\a', end='', flush=True)
					break
				elif ans == 'f':
					clear_previous_line()
					os.system('xdg-open ' + conf_path)
				elif ans == 'l':
					clear_previous_line()
					os.system('xdg-open ' + logfile_path)
				elif ans == 's' or ans == 'c':
					clear_previous_line()
					isClockStarted = True
					remaining_sec = pomodoro_session(remaining_sec, isWorkSession)
			else:
				isClockStarted = False
				if isWorkSession:
					read_conf()
					print("Finish 1 Pomodoro Session!")
					numSessions += 1
					ensure_file_exist(logfile_path)
					create_or_update_thisweek(logfile_path)
				choice = os.system(f"zenity --question --ellipsize --title='{'Work' if isWorkSession else 'Break'} Session Ends!' --text='Do you want to start {'break' if isWorkSession else 'work'} session now\?' 2>/dev/null") # yes,no returns 0,256
				break_sec = (longbreak_min if numSessions % 4 == 0 else normalbreak_min) * 60
				remaining_sec = break_sec if isWorkSession else work_min * 60
				isWorkSession = not isWorkSession
				if choice == 0:
					remaining_sec = pomodoro_session(remaining_sec, isWorkSession)
	except KeyboardInterrupt:
		print("\r")

def pomodoro_session(remaining_sec, isWorkSession):
	os.system("stty -echo")
	os.system("stty igncr")
	try:
		while remaining_sec > 0:
			m, s = divmod(remaining_sec, 60)
			h, m = divmod(m, 60)
			current_session = 'Working' if isWorkSession else 'Resting'
			current_time = str(h).zfill(2) + ":" + str(m).zfill(2) + ":" + str(s).zfill(2)
			current_progress = '(CTRL^C to ' + ('pause' if isWorkSession else 'skip') + ') ' + current_session +': ' + current_time
			print(current_progress, end="\r")
			print(f'\33]0;{current_session} ({current_time})\a', end='', flush=True)
			time.sleep(1)
			remaining_sec -= 1
		print(f'\33]0;00:00:00\a', end='', flush=True)
		print('(CTRL^C to pause) Remaining: 00:00:00')
		clear_previous_line()
		os.system(f"echo {workend_notif if isWorkSession else breakend_notif} | festival --tts")
		os.system("stty echo")
		os.system("stty -igncr")
		return 0
	except KeyboardInterrupt:
		os.system("stty -igncr")
		os.system("stty echo")
		return (remaining_sec if isWorkSession else 0)

# functions: utility
def clear_previous_line():
	cursor_up_one = '\x1b[1A'
	erase_line = '\x1b[2K'
	print(cursor_up_one + erase_line + cursor_up_one)

def get_prompt_dialog(options):
	return "Select Option " + '(' + '/'.join(options.values()) + ')' + '[' + ','.join(options.keys()) + ']: '

def prompt(question, options):
	reply = str(input(question)).lower().strip()
	if reply and reply[0] in options.keys():
		return reply[0]
	else:
		clear_previous_line()
		return prompt(question, options)

def ensure_file_exist(filepath):
	if not os.path.exists(filepath):
		f = open(filepath, 'w+')
		f.close()

def create_or_update_thisweek(filepath):
	# read
	with open(filepath, 'r') as f:
		logfile = f.read()
	# modify
	today_index = datetime.today().weekday() # Monday = 0
	today_str = calendar.day_abbr[today_index]
	thisweek_key = thisweek_gen(today_index)
	logfile_json = {}
	if not logfile:
		thisweek_val = log_thisweek_gen()
	else:
		try:
			logfile_json = json.loads(logfile)
			if thisweek_key in logfile_json:
				thisweek_val = logfile_json[thisweek_key]
			else:
				thisweek_val = log_thisweek_gen()
		except ValueError:
			print("Can't update log. Please make sure it's really empty or in JSON format ")
			sys.exit()
	thisweek_val_dict = eval(thisweek_val)
	thisweek_val_dict[today_str] += 1
	logfile_json[thisweek_key] = str(thisweek_val_dict)
	# reverse
	logfile_json_reversed = {}
	for i in sorted(logfile_json, reverse=True):
		logfile_json_reversed[i] = logfile_json[i]
	# write
	with open(filepath, 'w') as f:
		f.write(json.dumps(logfile_json_reversed, indent=2))

def log_thisweek_gen():
	return "{'Mon': 0, 'Tue': 0, 'Wed': 0, 'Thu': 0, 'Fri': 0, 'Sat': 0, 'Sun': 0}"

def thisweek_gen(today): # ISO 8601
	monday = (datetime.today() - timedelta(days=today)).strftime('%Y/%m/%d')
	sunday = (datetime.today() + timedelta(days=(6-today))).strftime('%Y/%m/%d')
	return monday + '-' + sunday

# code
read_conf()
pomodoro_start()
