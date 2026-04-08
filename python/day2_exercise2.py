def add(a,b):
    return a+b
def sub(a,b):
    return a-b
def mul(a,b):
    return a*b
def divi(a,b):
    if b !=0:
        return a/b
    else:
        return("Division by Zero is not allowed")

while True:
    print("\n Menu:")
    print("\n 1. Addition") 
    print("\n 2. Substraction")
    print("\n 3. Multplication") 
    print("\n 4. Division:")
    print("\n 5. Exit ")

    choice = input("Enter your choice:")
    if choice == "5":
        print("Existing the program")
        break

    num1=float(input ("Enter First number:"))
    num2=float(input ("Enter Second number:"))

    if choice == "1":
        print("Result",add(num1,num2))
    elif choice == "2":
        print("Result",sub(num1,num2))
    elif choice == "3":
        print("Result:",mul(num1,num2))
    elif choice == "4":
        print("Result:",divi(num1,num2))
    else:
        print("Invalid choice please try again")
