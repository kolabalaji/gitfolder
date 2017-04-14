#!/bin/pyton
import os
print(os.getcwd());
    try:
         data=open('1sketch.txt');
         for each_line in data:
         try:
         (role,line_spoken)=each_line.split(':',1);
         print(role,end='');
         print(' said: ',end='');
         print(line_spoken,end='')
         except:
            pass
        except:
        print('IO Error file not found');
data.close();