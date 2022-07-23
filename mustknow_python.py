# Python tuto
import random

# variables
# strings
print("ada lovelace".title())
print('Hello ' + 'world')
print("Hello 'worldé'".upper()) 
print("   strip remove superfluous whitespace   ".strip())   
print(50 * "a")
# string are 0 indexed
strIndex = "abcdefgh"
print(strIndex[-1])
print(len(strIndex)) # len function returns length of a string

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
print("before remove" + str(bicycles))

# remove 2 last elements
bicycles[-2:]= []
print("after remove" + str(bicycles))

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
lst2 = [value**2 for value in range(1, 11) ]
sentence = "the quick brown fox jumps over the lazy dog"
words = sentence.split()
word_lengths = [len(word) for word in words if word != "the"]
print(words)

# slicing a list
print(bicycles[0:2])
print(bicycles[:2]) # if you omit indice, it will be understood as start/end of list
print(bicycles[-3:]) # it works also with negative index

print(bicycles[:]) # copy a list

# tuples, list in read only
dimensions = (0, 250)
t = 12345, 54321, 'hello!'
x, y, z = t # sequence unpacking

if 'Giant' in bicycles :
   print('Giant is in list of bicycles')

# boolean expression True or False
can_edit = False

while False :
    pass # do nothing

class EmptyClass :
    pass

# define function
def fib(n = 2000):    # write Fibonacci series up to n
    """Print a Fibonacci series up to n."""
    a, b = 0, 1
    while a < n:
        print(a, end=' ')
        a, b = b, a+b
    print()

fib(2000)

# When a final formal parameter of the form **name is present, it receives a dictionary (see Mapping Types — dict) containing all keyword arguments except for those corresponding to a formal parameter. This may be combined with a formal parameter of the form *name (described in the next subsection) which receives a tuple containing the positional arguments beyond the formal parameter list. (*name must occur before **name.) 

# function annotations, they have no effect
def f(ham: str, eggs: str = 'eggs') -> str:
     print("Annotations:", f.__annotations__)
     print("Arguments:", ham, eggs)
     return ham + ' and ' + eggs

print(f("2","3"))

# set :  unordered collection with no duplicate elements
basket = {'apple', 'orange', 'apple', 'pear', 'orange', 'banana'}
# please note that {} create an empty dico
print('orange' in basket )
a = set('abracadabra')
b = set('alacazam')
print(a - b ) # letters in a but no in b

# dictionary
tel = {'jack': 4098, 'sape': 4139}
print('guido' in tel)
newDico = {x: x**2 for x in (2, 4, 6)} # dico comprehension

# looping dico
for k, v in newDico.items():
  print(k, v)

# When looping through a sequence, the position index and corresponding value can be retrieved at the same time using the enumerate() function.
for i, v in enumerate(['tic', 'tac', 'toe']):
  print(i, v)

# to loop over 2 or more sequences use zip function 
questions = ['name', 'quest', 'favorite color']
answers = ['lancelot', 'the holy grail', 'blue']
for q, a in zip(questions, answers):
     print('What is your {0}?  It is {1}.'.format(q, a))

# To loop over a sequence in sorted order, use the sorted() function which returns a new sorted list while leaving the source unaltered
basket = ['apple', 'orange', 'apple', 'pear', 'orange', 'banana']

# Using set() on a sequence eliminates duplicate elements
basket = ['apple', 'orange', 'apple', 'pear', 'orange', 'banana']
for f in sorted(set(basket)):
     print(f)

# to create a list of Nth the same thing
four_nones = [None] * 4


# open and write file
with open("mustknow.py") as txt_again:
  print(txt_again.read())

with open("tmp.tmp", "w") as target : 
  target.write("aaa")

# separate python file are called module
# import module # import all function from a module
# from module_name import function_name as alias_name

# class
class Dog():
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def sit(self):
    print(self.name + " is now sitting.")


myDog = Dog('willie', 6)
myDog.sit()

# map function and lambda
# map takes a function and a list of iterables and returns a generator object
# lambda define anonymous function with syntax : lambda x, y : result
my_pets = ['alfred', 'tabitha', 'william', 'arla']
uppered_pets = list(map(lambda s : s.upper(), my_pets))
print(uppered_pets)

print(list(filter(lambda x : x[0] == "a", my_pets)))

# generators
import random

def lottery():
    # returns 6 numbers between 1 and 40
    for i in range(6):
        yield random.randint(1, 40)

    # returns a 7th number between 1 and 15
    yield random.randint(1, 15)

for random_number in lottery():
   print("And the next number is... %d!" %(random_number))

# code introspection
print(dir()) # list of names in current scope
# print(vars(newDico)) # Return the __dict__ attribute for a module, class, instance, or any other object with a __dict__ attribute
print(type(myDog)) 

# Closure : a function object that remembers values in enclosing scopes even if they are not present in memory
def transmit_to_space(message):
  "This is the enclosing function"
  def data_transmitter():
      "The nested function"
      print(message)
  return data_transmitter

fun2 = transmit_to_space("Burn the Sun!")
fun2()
