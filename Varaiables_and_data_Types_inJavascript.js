Variable Declaration: Variables in JavaScript are declared using the var, let, or const keywords.

// Using var (function-scoped)
var x = 10;
var name = "John";

// Using let (block-scoped)
let age = 25;
let city = "New York";

// Using const (block-scoped, read-only)
const PI = 3.14;
const country = "USA";



In JavaScript, there are eight basic data types:

String
Number
BigInt
Boolean
Undefined
Null
Symbol
Object

Here, all data types except Object are primitive data types, whereas Object is non-primitive programiz.com.

Variables and Data Types with Code Samples:

String: A sequence of characters, enclosed in single or double quotes.
   let name = 'John Doe';
   let greeting = "Hello, World!";
Number: Represents both integers and floating-point numbers.
   let age = 25;
   let price = 19.99;
BigInt: Represents large integers that can't be represented by the standard Number data type.
   let bigInteger = 1234567890123456789012345678901234567890n;
Boolean: Represents true or false values.
   let isActive = true;
   let isCompleted = false;
Undefined: Represents a variable that has been declared but not assigned a value.
   let myVar;
   console.log(myVar); // undefined
Null: Represents an intentional absence of any object value.
   let emptyValue = null;
   console.log(emptyValue); // null
Symbol: A unique and immutable primitive value and may be used as the key for an Object property.
   let symbol1 = Symbol();
   let symbol2 = Symbol('description');
Object: Represents a non-primitive data type that can store collections of key-value pairs.
   let person = {
     name: 'John Doe',
     age: 25,
     greet: function() {
       console.log('Hello, ' + this.name);
     }
   };
   person.greet(); // Hello, John Doe
JavaScript is a dynamically typed language, which means that variables can receive different data types over time. 
You dont need to specify the data type of a variable when declaring it












MORE EXPLANANTION
*************************************************************************************************



  Sure! Here are some common variable declarations and data types in JavaScript along with code samples:

Variable Declaration: Variables in JavaScript are declared using the var, let, or const keywords.

javascript
Copy code
// Using var (function-scoped)
var x = 10;
var name = "John";

// Using let (block-scoped)
let age = 25;
let city = "New York";

// Using const (block-scoped, read-only)
const PI = 3.14;
const country = "USA";
Data Types:

Primitive Data Types:

Number: Represents numeric values.
javascript
Copy code
let count = 10;
let price = 9.99;
String: Represents textual data enclosed in single or double quotes.
javascript
Copy code
let name = "John Doe";
let message = 'Hello, World!';
Boolean: Represents either true or false.
javascript
Copy code
let isActive = true;
let isFound = false;
Null: Represents the intentional absence of any object value.
javascript
Copy code
let value = null;
Undefined: Represents an uninitialized variable or missing property.
javascript
Copy code
let undefinedVar; // undefined
Composite Data Types:

Array: Represents an ordered list of values.
javascript
Copy code
let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "orange"];
Object: Represents a collection of key-value pairs.
javascript
Copy code
let person = { name: "John", age: 30, city: "London" };
Special Data Types:

Function: Represents a block of reusable code.
javascript
Copy code
function greet(name) {
  console.log("Hello, " + name + "!");
}
Symbol: Represents a unique identifier.
javascript
Copy code
let id = Symbol("uniqueId");
Type Coercion: JavaScript performs implicit type coercion in certain situations, converting one data type to another. For example:

javascript
Copy code
let x = 5;
let y = "10";

console.log(x + y); // Output: "510" (string concatenation)
Type Checking: You can check the data type of a variable using the typeof operator.

javascript
Copy code
let name = "John";
let age = 25;

console.log(typeof name); // Output: "string"
console.log(typeof age); // Output: "number"
Type Conversion: You can explicitly convert between data types using various JavaScript functions and methods.

javascript
Copy code
// Convert a string to a number
let numString = "10";
let num = parseInt(numString); // Output: 10

// Convert a number to a string
let count = 5;
let countString = count.toString(); // Output: "5"
Remember, JavaScript is a dynamically-typed language, allowing variables to hold different types of values during runtime.


























