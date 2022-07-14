# Python tuto

# variables
# strings
print("ada lovelace".title())
print('Hello ' + 'world')
print("Hello 'worldé'".upper()) 
print("   strip remove superfluous whitespace   ".strip())   

age = 45
print("Happy " + str(age) + " birthday")

# lists
bicycles = ['trek', 'cannondale', 'redline', 'specialized']
print(bicycles)
print(bicycles[0])
print(bicycles[-1]) # index -1 returns last element in the list

# add elements
bicycles.append('decat')
bicycles.insert(0, 'giant')

# remove elements
del bicycles[0]
bicycles.pop() # remove last item in the list
bicycles.pop(0) # remove first item in the list
bicycles.append('vergnes')
bicycles.remove('vergnes')
print(bicycles)

bicycles.sort()
sorted(bicycles) # returns a sorted list but do not modify the list

print(len(bicycles)) # length of a list

# looping through a list
for bicycle in bicycles : 
    print(bicycle) 

# numerical lists
for value in range(1,5): # print values from 1 to 4 
    print(value)

# transform in a list and specify a step
lst = list(range(1 ,11, 2))

# list comprehension


