# numpy is for multi dimensional array
# numpy array is faster than python list. It uses fixed types and contiguous memory. 
import numpy as np

a = np.array([1, 2, 3], dtype='int16')
b = np.array([[1, 2, 3], [4, 5, 6]], dtype='int16')

print(a.ndim)
print(b.shape)
print(b.dtype)
print(a.itemsize) # size in bytes
print(b[1,2]) # get a specific element
print(b[1, :]) # get a full row
print(b[1:3:2]) # with a step size

print(np.zeros((2,2,2))) # create a 3d arrays with zeros
print(np.full( (2,2,2), 99)) # create a 3d arrays with 99
print(np.full_like(b, 98)) # create array with same shape like b with 98 value
print(np.random.rand(5, 3)) # create a 5, 3 wiith random numbers
print(np.random.randint(-4, 8, size=(3, 3))) # random integer numbers between 4 and 7 with defined size
print(np.identity(5)) # identity axis

# repeat an array
arr = np.array([1, 2, 3])
r1 = np.repeat(arr, 3, axis=0)
print(r1)

c = np.array([1, 2, 3])
d = c.copy()
c[0] = 100
print(d)

# Mathematics
e = np.array([1, 2, 3])
f = np.full( (3, 3, 3), 4)
g = e.copy()
print(e+2) # add 2 to each item
print(e+g)
print(np.sin(e) ) # take sinus 

# linear algebra
mata = np.ones( (2, 3))
matb = - np.full((3, 2), 2)
print(np.matmul(mata,matb)) # matrix multiplication

matc = np.identity(5)
print(np.linalg.det(matc)) # matrix determinant

# statistics
stats = np.array([[1, 2, 3], [4, 5, 6]])
print(np.max(stats, axis=1))

# reorganize arrays
before = np.array([[1, 2, 3], [4, 5, 6]])
after = before.reshape( (3, 2)) # change array shape

# vertical stacking
v1 = np.array([1, 2, 3, 4])
v2 = np.array([5, 6, 7, 8])
print(np.vstack([v1, v2, v2, v2]))

# load data from file
# np.genfromtxt('data.txt', delimeters=',')

# advanced indexing
advanced = np.random.randint(0, 100, size=(4, 4))
print(advanced < 50) # array of booleans
print(advanced[advanced > 50]) # vectors of only values > 50
index = np.array([1,2,3,4,5,6,7,8,9])
print(index[ [1,2,5]]) # index through a list
print(np.any(advanced > 50, axis = 0)) # columns has a value > 50


