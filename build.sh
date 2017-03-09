#!/bin/sh
if [ "$1" = "upload" ];then
	echo upload
	echo $RANDOM >> README.md
else
	echo build
	webpack --progress -colors
fi
git add -A app/* > /dev/null
git commit -am "build" > /dev/null
git push origin master
