JavaScript provides several higher-order array methods: forEach(), map(), filter(), and reduce(). These methods allow you to perform operations on arrays more concisely and efficiently. Here's an overview of each method and how they can be used with arrays:

forEach(): The forEach() method iterates over each element in an array and executes a callback function for each element. It does not return a new array.
javascript
Copy code
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
  console.log(number);
});
Output:

Copy code
1
2
3
4
5
map(): The map() method creates a new array by applying a callback function to each element of an existing array. It returns a new array with the same length as the original array.
javascript
Copy code
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map((number) => {
  return number ** 2;
});

console.log(squaredNumbers);
Output:

csharp
Copy code
[1, 4, 9, 16, 25]
filter(): The filter() method creates a new array containing all the elements that pass a certain condition specified by a callback function. It returns a new array with the filtered elements.
javascript
Copy code
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});

console.log(evenNumbers);
Output:

csharp
Copy code
[2, 4]
reduce(): The reduce() method applies a callback function to each element of an array, resulting in a single output value. It "reduces" the array to a single value.
javascript
Copy code
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, number) => {
  return accumulator + number;
}, 0);

console.log(sum);
Output:

Copy code
15
In the reduce() method, the callback function takes two parameters: the accumulator (which holds the accumulated value) and the current element of the array. The initial value of the accumulator is specified as the second argument to the reduce() method (in this case, 0).

These higher-order array methods are powerful tools for manipulating arrays in JavaScript. They provide a more expressive and functional programming style, allowing you to perform various operations on arrays such as iteration, transformation, filtering, and reduction.
