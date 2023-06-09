
spread operator = allows an iterable such as an 
...                             array or string to be expanded 
                                in places where zero or more 
                                arguments are expected
                                (unpacks the elements)








The spread operator (...) in JavaScript is used to expand elements of an array or properties of an object. It allows you to easily create copies of arrays, merge arrays, pass array elements as function arguments, and create new objects with merged properties. Here are some common use cases of the spread operator:

Copying an array:
You can create a shallow copy of an array using the spread operator.

javascript
Copy code
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

console.log(copiedArray); // Output: [1, 2, 3]
Merging arrays:
The spread operator can be used to merge multiple arrays into a single array.

javascript
Copy code
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];

console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]
Passing array elements as function arguments:
You can pass the elements of an array as arguments to a function using the spread operator.

javascript
Copy code
const numbers = [1, 2, 3];
const sum = (a, b, c) => a + b + c;

console.log(sum(...numbers)); // Output: 6
Creating new objects:
The spread operator can be used to create a new object by merging properties from existing objects.

javascript
Copy code
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObject = { ...obj1, ...obj2 };

console.log(mergedObject); // Output: { a: 1, b: 2, c: 3, d: 4 }
Adding elements to an existing array:
The spread operator allows you to add elements to an existing array without modifying the original array.

javascript
Copy code
const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4, 5];

console.log(newArray); // Output: [1, 2, 3, 4, 5]
The spread operator provides a concise and flexible way to work with arrays and objects in JavaScript, simplifying many common operations. It is widely supported in modern JavaScript environments.


















let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let maximum = Math.max(...numbers);
console.log(maximum);

/*
let class1 = ["Spongebob", "Patrick", "Sandy"];
let class2 = ["Squidward", "Mr.Krabs", "Plankton"];
class1.push(...class2);
console.log(...class1);
*/













