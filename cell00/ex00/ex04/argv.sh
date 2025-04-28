#!/bin/bash

if [ "$#" -eq  0 ]; then
	exit 1
elif [ "$#" -eq 1 ]; then
	echo "$1"
elif [ "$#" -eq 2 ]; then
        echo "$1"
	echo "$2"
else
        echo "$1"
        echo "$2"
	echo "$3"
fi
