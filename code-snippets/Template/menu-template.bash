#!/usr/bin/env bash
this_script_path="$( cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
# insertion order matters here
declare -a options; declare -a commands
options+=('Option 1'); commands+=('echo "Execute Command 1"')
options+=('Option 2'); commands+=('echo "Execute Command 2"')
options+=('Option 3'); commands+=('echo "Execute Command 3"')

while true; do
	echo '========================================'
	echo '       ⭐⭐Bash Menu Template ⭐⭐      '
	echo '========================================'
	PS3='Please enter your choice: '
	COLUMNS=1
	select opt in "${options[@]}" "Quit"; do
	echo '----------------------------------------'
		if (( 1<=$REPLY && $REPLY<${#options[@]}+1 )); then
			eval ${commands[$REPLY-1]}
			break
		elif (( $REPLY==${#options[@]}+1 )); then
			break 2
		else
			echo "Invalid Choice!"
			break
		fi
	done
done

