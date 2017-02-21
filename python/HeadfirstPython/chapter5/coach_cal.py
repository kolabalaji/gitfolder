#!/bin/python
import os
print(os.getcwd());

# Data of athelate
james_data=open('james.txt');
julie_data=open('julie.txt')
mikey_data=open('mikey.txt');
sarah_data=open('sarah.txt');


#Function to close process data
def open_date(data):
    try:
        for each_item in data:
          print(each_item,end='');
    except:
        pass
    finally:      
      data.close();

open_date(james_data);
open_date(julie_data);
open_date(mikey_data);
open_date(sarah_data);


