# linear algebr 

## Course by Jim Hefferon

### Solving linear sytems
A linear combination of x1, x2, ... xn has the form a1x1 + a2x2 + ... + anxn
A linear equation has the form of a1x1 + a2x2 + ... + anxn = d where d is a constant. s1, s2, ..., sn is a solution (or satisfies) that equation
A system of linear equations is several equations with a tuple solution of all equations. 
Def : the first variable with a non zero coeff is the row's leading variable.
A system is in echelon form when each leading variable is to the right of the lrading variable in the row above it.

![echelon form](img/echelon_form.png)

3 operations of the Gauss method :
- swap equation, 
- multiply both side of an equation by a non zero constant
- replace by the sum of itself and a multiple of other equation

will help to reduce the equations in order to get an echelon form. 


### describe the solution set
In an echelon form linear, variables that are not leading are free. And a variable that we use to describe a family of solutions is a parameter. We shall parametrize linear systems with the free variables.   

### matrix
A matrix is a rrectangular array of numbers. Each numberr in a mtrix is an entry. Notation : row,col
The numberrr of rows is alays stated first. 
A icolumn vector (or a vector) is a matrix with a single column. A row vector is a matrix with a signle row. Entries of a vector are sometimes called componenets.

Scalar multiplication and addition of vector are obvious

A linear equation is homogeneous if it has a constant of zero.  

Theorem : Tout système linéaire a pour solution :
p + c1b1 + c2b2 + .. + cnbn where p is particular solutiio  and number of vectors b1, b2, ..., bn represent number of free variables 

If linear system iis homogeneous, particular soluttion is a zero vector (so could be omitted)  

Linear systems solution sets are either empty, one solution or an infinity.

Def : A square matrix is nonsigular if the coeeficients of homgenous sytems with a unique solution. It is singular otherwise. 
