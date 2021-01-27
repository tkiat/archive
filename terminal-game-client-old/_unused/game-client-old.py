#!/usr/bin/env python3
# README
# every Linux game folder must contain start.sh (create symlink if necessary) and must not contain start.exe
# every Windows game folder must contain start.exe (create shortcut if necessary) and must not contain start.sh
import ast
import configparser
from datetime import date, datetime
import json
import math
import os
import platform
import subprocess
import sys

def prepend_zeroes(num, digit):
	return str(10 ** digit + num)[-digit:]

def read_int(prompt, minimum=-math.inf, maximum=math.inf):
	while True:
		try:
			result = int(input(prompt))
		except ValueError:
			print("Enter an integer!",end=" ")
			continue
		else:
			if minimum <= result <= maximum:
				return result
			else:
				print("Enter an integer from " + str(minimum) + " to " + str(maximum) + "!",end=" ")

def sec_to_hh_mm_ss(sec):
	return str(math.floor(sec/3600)) + ":" + prepend_zeroes(math.floor(sec % 3600 / 60), 2) + ":" + prepend_zeroes(sec % 60, 2)

def open_default(path):
	if platform.system() == 'Linux':
		subprocess.call(('xdg-open', path))
	if platform.system() == 'Windows':
		os.system('notepad ' + path)

def run_game(path):
	realpath = os.path.realpath(path)
	if platform.system() == 'Linux':
		if os.path.basename(path) == startfile_linux_wine:
			subprocess.call(['wine64' if platform.architecture()[0] == '64bit' else 'wine', realpath])
		elif os.path.basename(path) == startfile_linux_dosbox:
			subprocess.call(['dosbox', realpath])
		else:
			subprocess.call(realpath)
	if platform.system() == 'Windows':
		subprocess.call(realpath, shell=True)

def get_today_playtime(data):
	return 0 if not '_today_playtime' in data or not '_today' in data or date.today() > datetime.strptime(data['_today'], '%Y-%m-%d').date() else data['_today_playtime']

def get_terminal_size():
	if platform.system() == 'Linux':
		return subprocess.check_output(['tput', 'cols'])
	if platform.system() == 'Windows':
		return 60

def print_title(lhs, rhs, symbol, length):
	print(lhs + symbol * max([1, (prompt_len-len(lhs)-len(rhs))]) + rhs)

print("TODO change record format to weekly")
# Constant
# _, prompt_len = subprocess.check_output(['stty', 'size']).split()
prompt_len = get_terminal_size()
prompt_len = int(prompt_len)
# External files
conf_path = os.path.dirname(__file__) + '/data/settings.conf'
log_path = os.path.dirname(__file__) + '/data/log.json'
# Config file
conf = configparser.ConfigParser()
conf.read(conf_path)
conf_default = conf['DEFAULT']
games_dirs = list(filter(None, conf_default.get("directories").split('\n')))
startfile_linux = conf_default.get("startfile_linux")
startfile_linux_dosbox = conf_default.get("startfile_linux_dosbox")
startfile_linux_wine = conf_default.get("startfile_linux_wine")
startfile_windows = conf_default.get("startfile_windows")

# Data
if not os.path.exists(log_path):
	f = open(log_path, 'w+')
	f.close()
with open(log_path, 'r') as f:
	data = f.read()
try:
	data = json.loads(data)
except ValueError:
	if not data:
		data = {}
	else:
		print("Log file must be either in JSON format or absolutely empty")
		sys.exit()

# Iterate all directories
linux_games, windows_games = [], []
for games_dir in games_dirs:
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
				if f == startfile_linux:
					linux_games += [{'title': game_title, 'path': file_path}]
				if f == startfile_linux_dosbox:
					linux_games += [{'title': game_title + ' (Dosbox)', 'path': file_path}]
				if f == startfile_linux_wine:
					linux_games += [{'title': game_title + ' (Wine)', 'path': file_path}]
				if f == startfile_windows:
					windows_games += [{'title': game_title, 'path': file_path}]
linux_games = sorted(linux_games, key = lambda i : i['title'].lower())
windows_games = sorted(windows_games, key = lambda i : i['title'].lower())

# Selection menu
available_os = ['Linux', 'Windows']
current_os_ind = [index for index, value in enumerate(available_os) if value == platform.system()][0]
special_options = [{'title': 'Quit'}, {'title': 'Edit Config File'}, {'title': 'Edit Log File'}, {'title': 'Switch to ' + available_os[1 - current_os_ind]}]
game_options = linux_games if available_os[current_os_ind] == 'Linux' else windows_games
welcome_str = " " * (len(str(1 + len(special_options) + len(game_options))) - 1) + available_os[current_os_ind] + ' Game Client'
try:
	while True:
		print('=' * prompt_len)
		today_playtime = "Today's Playtime: " + sec_to_hh_mm_ss(get_today_playtime(data))
		print_title(welcome_str, today_playtime, " ", prompt_len)
		print('='*prompt_len)
		for index, option in enumerate(special_options + game_options):
			index += 1
			if (index == len(special_options) + 1):
				print('=' * prompt_len)
				title_str = " " * len(str(1 + len(special_options) + len(game_options))) + '  <Title>'
				print(title_str + " " * max([1, (prompt_len-len(title_str)-len('<Total>'))]) + '<Total>')
			option_str = " " * (len(str(1 + len(special_options) + len(game_options))) - len(str(index))) + str(index) + ") " + option['title']
			if index >= len(special_options) and option['title'] in data:
				record_str = " " + sec_to_hh_mm_ss(data[option['title']])
				print_title(option_str + ' ', record_str, '-', prompt_len)
			else:
				print(option_str)
		choice = read_int(prompt="Select Option: ", minimum=1, maximum=len(special_options) + len(game_options))
		os.system('cls' if platform.system() == 'Windows' else 'clear')
		if choice == 1:
			print("Exiting ...")
			break
		elif choice == 2:
			open_default(conf_path)
		elif choice == 3:
			open_default(log_path)
		elif choice == 4:
			current_os_ind = (current_os_ind + 1) % 2
			special_options = [{'title': 'Quit'}, {'title': 'Edit Config File'}, {'title': 'Edit Log File'}, {'title': 'Switch to ' + available_os[1 - current_os_ind]}]
			game_options = linux_games if available_os[current_os_ind] == 'Linux' else windows_games
			welcome_str = " " * (len(str(1 + len(special_options) + len(game_options))) - 1) + available_os[current_os_ind] + ' Game Client'
		else:
			ind = choice - len(special_options) - 1
			title = game_options[ind]['title']
			start = datetime.now()
			run_game(game_options[ind]['path'])
			playtime_sec = math.floor((datetime.now() - start).total_seconds())
			data[title] = playtime_sec if not title in data else data[title] + playtime_sec
			data['_today_playtime'] = get_today_playtime(data) + playtime_sec
			data['_today'] = str(date.today())
			with open(log_path, 'w') as f:
				f.write(json.dumps(data, sort_keys=True, indent=2))
except KeyboardInterrupt:
	print("\nExiting ...")
