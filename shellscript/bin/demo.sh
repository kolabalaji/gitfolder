#!bin/bash

#CONSTANTS

FPATH=/Users/sribalajikola/gitfolder/shellscript/

#method to remove the file
function clear(){
echo 'changing the directory'
cd $FPATH
rm -rf my.txt
echo 'deleted files'
#exit 0
}
clear
echo "Executed successfully"
today=date+`%y+%m+%d`
$today
