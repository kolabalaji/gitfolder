#!/bin/bash
git pull
git log -3 >git.log
more git.log
mail -s "(echo "Daily Healthcheckup\nContent-Type:text/html")" balaji.kola@gmail.com,sribalajikola@yahoo.com.au <git.log
echo "Mail sent"
