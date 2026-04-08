sentence = input("Enter a Sentence: ")

## Split the sentence into words
words = sentence.split()

#Initialize Dictonary
word_count={}

# Count word frequence
for word in words:
    word = word.lower()
    if word in word_count:
        word_count[word] +=1
    else:
        word_count[word] = 1

print(word_count)

# output:
# python day4_eg1.py 
# Enter a Sentence: The AI Engineer is the future
# {'the': 2, 'ai': 1, 'engineer': 1, 'is': 1, 'future': 1}
# (fresh_env)  kobalaji@kobalaji-mac  ~/AI_Python_Dev  python day4_eg1.py
# Enter a Sentence: The Ai engineer is the engineer of the future who whould work on differenct
# {'the': 3, 'ai': 1, 'engineer': 2, 'is': 1, 'of': 1, 'future': 1, 'who': 1, 'whould': 1, 'work': 1, 'on': 1, 'differenct': 1}


