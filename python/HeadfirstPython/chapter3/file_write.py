out=open('sketch.txt',"a");
print("Balaji is a strong boy s",file=out);
out.close();

data=open('sketch.txt');
for each_line in data:
    print(each_line,end='');
data.close();

