#!bin/bash

file_name=textfile.txt

current_time=$(date "+%Y%m%d%H%M%S")
echo "current time +$current_time"

newfile_name=$file_name.$current_time
echo "new file name $newfile_name"

cp -r $file_name $newfile_name

echo "you c new file generated with timestamp"


