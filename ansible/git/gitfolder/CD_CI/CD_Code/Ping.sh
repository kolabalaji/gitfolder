#!/bin/sh
#Author : Kola.Balaji
#Date :Tue,31 May
#Description: Checking the urls

# Add the urls in the urlstatus.txt
while read url
do
    urlstatus=$(curl -o /dev/null --silent --head --write-out '%{http_code}' "$url" )
    echo "$url  $urlstatus" >> urlstatus.txt
done < $1


#!/bin/bash

#INPUT="Urls.txt"
#OUTPUT="result.txt"
#while read line ;
#
#do
#  if ping -c 1 $line &> /dev/null
#  then
#      echo "$line valid" >> $OUTPUT
#  else
#      echo "$line not valid " >> $OUTPUT
#  fi
#done < $INPUT
#exit
