## Factorial [factorial of 5 is 5*4*3*2*1= 120]

def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n-1)
    
def print_factorial(n):
    result=factorial(n)
    print(f"The factorial of {n} is {result}")

print_factorial(4)

# output:

# python day3_excer1.py 
# The factorial of 5 is 120
# (fresh_env)  kobalaji@kobalaji-mac  ~/AI_Python_Dev  python day3_excer1.py
# The factorial of 4 is 24
