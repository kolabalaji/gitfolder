## Create a another file as a math_operations.py
def add(a,b):
    return a+b

def sub(a,b):
    return a-b

def mul(a,b):
    return a*b

def div(a,b):
    if b!=0:
        return a/b
    else:
        print("Zero divide is not allowed")
        
### customodule.py 
import math_operations as mo

num1=10
num2=20

print("Addition:", mo.add(num1,num2))
print("Substraction:", mo.sub(num1,num2))
print("Multiply:", mo.mul(num1,num2))
print("Division:", mo.div(num1,num2))


output:
python day3_custommodule.py 

Addition: 30
Substraction: -10
Multiply: 200
Division: 0.5
