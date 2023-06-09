Arithmetic expressions in JavaScript involve using arithmetic operators to perform calculations with 
  numerical values (either literals or variables). JavaScript supports the following arithmetic operators:

Addition (+)
Subtraction (-)
Multiplication (*)
Division (/)
Remainder (%)
Exponentiation (**)




JavaScript supports various arithmetic operators for performing mathematical calculations. Here are the common arithmetic operators along with examples of their usage:

Addition (+): Adds two numbers or concatenates two strings.

let x = 5 + 3; // Output: 8
let fullName = "John" + " " + "Doe"; // Output: "John Doe"




Subtraction (-): Subtracts one number from another.


let x = 10 - 5; // Output: 5
             
             
             
             
Multiplication (*): Multiplies two numbers.

let x = 5 * 3; // Output: 15




Division (/): Divides one number by another.


let x = 10 / 2; // Output: 5
          
          
          
          
Remainder (%): Returns the remainder of the division operation.

let x = 10 % 3; // Output: 1 (remainder of 10 divided by 3)




Exponentiation ()**: Raises a number to the power of another number.


let x = 2 ** 3; // Output: 8 (2 raised to the power of 3)




Increment (++): Increases the value of a variable by 1.


let x = 5;
x++; // Equivalent to x = x + 1
console.log(x); // Output: 6




Decrement (--): Decreases the value of a variable by 1.

let x = 5;
x--; // Equivalent to x = x - 1
console.log(x); // Output: 4


Operator Precedence: JavaScript follows the standard mathematical operator precedence rules. Parentheses can be used to control the order of operations.


let result = (5 + 3) * 2; // Output: 16 (parentheses evaluated first)
Its important to note that arithmetic expressions can involve variables, literals, and other JavaScript expressions.




mathematical operator precedence rules
*************************************************************


  
  JavaScript follows a set of operator precedence rules to determine the order in which operators are evaluated in an expression. 
  Heres a summary of the operator precedence hierarchy, from highest to lowest:

Grouping: Parentheses () are used to group expressions and override the default precedence.

Exponentiation: The exponentiation operator ** raises a number to the power of another number.

Multiplication, Division, and Remainder: The multiplication *, division /, and remainder % operators are evaluated from left to right.

Addition and Subtraction: The addition + and subtraction - operators are evaluated from left to right.

Concatenation: The + operator can also be used for string concatenation.

Comparison: Comparison operators like <, >, <=, >=, ==, and != have lower precedence than arithmetic operators.

Logical Operators: Logical operators such as && (AND), || (OR), and ! (NOT) have lower precedence than comparison operators.

Assignment: Assignment operators (=, +=, -=, *=, /=, %=) have the lowest precedence.

When expressions contain operators with the same precedence, they are evaluated from left to right.

Here are a few examples to illustrate operator precedence:


let result = 2 + 3 * 4; // Output: 14 (multiplication is evaluated before addition)

let anotherResult = (2 + 3) * 4; // Output: 20 (parentheses override the default precedence)

let finalResult = 2 + 3 * 4 ** 2; // Output: 50 (exponentiation is evaluated before multiplication, then addition)

Understanding operator precedence is important for writing correct and predictable JavaScript expressions.
Parentheses can be used to explicitly define the order of operations when needed.
















































