#!/bin/bash

Files="$(git diff --name-only)"
toCopy=""
echo "${Files}"

while read -r line; do
	toCopy="$toCopy $line"
done <<< "$Files"

echo "${toCopy}"
cmd="scp -i \"C:\Users\Danny\Desktop\forecast-site-credentials\forecast-studios.pem\" $toCopy ec2-user@ec2-35-166-255-144.us-west-2.compute.amazonaws.com:~/forecastsite/"
echo $cmd
$cmd
$SHELL
