### List Data structure ordered,mutable,variety of objects 

fruits = ["apple","banana","cherry"]

numbers = [1,2,3,4,5,6,7]

mixed = ["apple",1,True]

print(fruits)
print(numbers)
print(mixed)

### Adding elements to list
fruits.append("grapes")  
fruits.insert(1,"water melon") 

print(fruits)

### Accessing the negative index

print(fruits[-1])

### Deleting the list itesm

fruits.remove("water melon")

del fruits[0]

print(fruits)

## Slicing list

print(fruits[1:2])


output:

python day4_ds_list.py
['apple', 'banana', 'cherry']
[1, 2, 3, 4, 5, 6, 7]
['apple', 1, True]
['apple', 'water melon', 'banana', 'cherry', 'grapes']
grapes
['banana', 'cherry', 'grapes']
['cherry']
