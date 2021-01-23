#!/usr/bin/env python3
options = []
commands = []
# insertion order matters here
options += ['Option 1']
commands += ['print("Execute Command 1")']

options += ['Option 2']
commands += ['print("Execute Command 2")']

options += ['Option 3']
commands += ['print("Execute Command 3")']
try:
	while True:
		print('========================================')
		print('     ⭐⭐Python Menu Template ⭐⭐      ')
		print('========================================')
		for index, option in enumerate(options + ["Quit"]):
			print(str(index + 1) + ") " + option)
		choice = input("Please Enter Your Choice: ")
		choice = int(choice) if choice.isdigit() else -1
		if 1 <= choice and choice <= len(options):
			eval(commands[choice - 1])
		elif choice == len(options) + 1:
			print("Exiting ...")
			break
		else:
			print("Invalid Choice!")
except KeyboardInterrupt:
	print("\nExiting ...")
