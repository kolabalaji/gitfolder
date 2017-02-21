import os
os.getcwd();
data=open('sketch.txt');
for each_line in data:
	print(each_line,end='');	
data.close();