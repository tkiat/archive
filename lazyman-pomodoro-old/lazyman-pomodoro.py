#!/usr/bin/env python3
from datetime import datetime, timedelta
import ast
import calendar
import configparser
import math
# import matplotlib.pyplot as plt
import os
import platform
import sys
import time
import json

# constants
data_dir = os.path.dirname(os.path.realpath(sys.argv[0])) + '/data'
conf_path = data_dir + '/settings.conf'
logfile_path = data_dir + '/log.json'

work_min = None
normalbreak_min = None
longbreak_min = None
workend_notif = None
breakend_notif = None

prompt_len = 50

def print_title(lhs, rhs, length):
	print(lhs + " " * max([1, (prompt_len-len(lhs)-len(rhs))]) + rhs)

def menu(options, title_lhs, title_rhs):
	keys = options.keys()
	try:
		os.system('cls' if platform.system() == 'Windows' else 'clear')
		print('TODO Put session length in json! and implement plot! and also put work and break in menu options also display todays number of sessions')
		while True:
			print('='*prompt_len)
			print_title(title_lhs, title_rhs, prompt_len)
			print('='*prompt_len)
			for key in keys:
				print(key + ") " + options[key])
			choice = input("Select Option: ")
			if choice in keys:
				return choice
			else:
				print("Invalid Option!")
	except KeyboardInterrupt:
		print("\nExiting...")
		sys.exit()

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

def sec_to_hhmmss(sec):
	m, s = divmod(sec, 60)
	h, m = divmod(m, 60)
	return str(h).zfill(2) + ":" + str(m).zfill(2) + ":" + str(s).zfill(2)

def pomodoro_start():
	options_common = {'2': 'Edit Log', '3': 'Edit Config', '4': 'Plot', '5': 'Quit'}
	options_start = {**{'1': 'Start'}, **options_common}
	options_continue = {**{'1': 'Continue'}, **options_common}

	isWorkSession = True
	isClockStarted = False
	remaining_sec = work_min * 60
	numSessions = 0

	try:
		while 1:
			if remaining_sec:
				break_sec = (longbreak_min if numSessions % 4 == 0 else normalbreak_min) * 60
				options_current = options_continue if isClockStarted else options_start
				ans = menu(options_current, 'Pomodoro', ("Time Left: " + sec_to_hhmmss(remaining_sec)) if remaining_sec > 0 and isClockStarted else '')
				if ans == '1':
					isClockStarted = True
					remaining_sec = pomodoro_session(remaining_sec, isWorkSession)
				elif ans == '2':
					os.system('xdg-open ' + logfile_path)
				elif ans == '3':
					os.system('xdg-open ' + conf_path)
				elif ans == '4':
					continue
# 					with open(logfile_path, 'r') as f:
# 						logfile = f.read()
# 						logfile_json = json.loads(logfile)
# 					plt.plot(logfile_json.keys())
# 					# plt.plot([1, 2, 3, 4])
# 					plt.ylabel('some numbers')
# 					plt.show()
				elif ans == '5':
					print(f'\33]0;Terminal\a', end='', flush=True)
					break
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
	session = 'Working' if isWorkSession else 'Resting'
	try:
		while remaining_sec > 0:
			os.system('cls' if platform.system() == 'Windows' else 'clear')
			current_time = sec_to_hhmmss(remaining_sec)
			print('='*prompt_len)
			print_title('(CTRL^C to ' + ('pause' if isWorkSession else 'skip') + ')', session + ': ' + current_time, prompt_len)
			print('='*prompt_len, end='', flush=True)
			print(f'\33]0;{session} ({current_time})\a')
			time.sleep(1)
			remaining_sec -= 1
		print('(CTRL^C to pause) Remaining: 00:00:00', end='')
		print(f'\33]0;00:00:00\a')
		return 0
	except KeyboardInterrupt:
		os.system('cls' if platform.system() == 'Windows' else 'clear')
		return (remaining_sec if isWorkSession else 0)

# functions: utility
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

# def create_date_if_not_exist(_dict, _date):
# 	if _date.year not in _dict:
# 		_dict[_date.year] = {}
# 	if _date.month not in _dict[x.year]:
# 		_dict[_date.year][_date.month] = {}
# 		# _dict[_date.year][_date.month] = ['0'] * calendar.monthrange(_date.year, _date.month)[1]
# 	if _date.day not in _dict[_date.year][_date.month]:
# 		_dict[_date.year][_date.month][_date.day] = 0
# data = {}
# for i in range(0,20):
# 	x = datetime.now() + timedelta(days=i)
# 	create_date_if_not_exist(data, x)
# 	data[x.year][x.month][x.day] = 35
# with open(logfile_path, 'w') as f:
# 	f.write(json.dumps(data))
	# f.write(json.dumps(data, indent=2))
# code
read_conf()
pomodoro_start()
