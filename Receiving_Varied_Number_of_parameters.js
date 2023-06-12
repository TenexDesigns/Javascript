Yes, it is possible to receive a variable number of parameters in JavaScript functions using the arguments object or the rest
parameter syntax.

Using the arguments object:
The arguments object is an array-like object that holds all the arguments passed to a function, 
  regardless of the number of parameters defined in the function signature. 
  You can access individual arguments using numeric indices.

Example:


function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sum(2, 4, 6)); // Output: 12
console.log(sum(1, 3, 5, 7, 9)); // Output: 25
In the above example, the sum function accepts a variable number of arguments using the arguments object.
It iterates over the arguments and accumulates their values to calculate the sum.

Using the rest parameter syntax:
The rest parameter syntax allows you to represent an indefinite number of arguments as an array.
It uses the spread operator (...) followed by the parameter name to collect any remaining arguments into an array.

Example:


function sum(...numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

console.log(sum(2, 4, 6)); // Output: 12
console.log(sum(1, 3, 5, 7, 9)); // Output: 25
In the above example, the sum function uses the rest parameter syntax ...numbers to capture any number
of arguments passed and store them as an array called numbers. The function then iterates over the array to calculate the sum.

Both methods allow you to receive a variable number of arguments in JavaScript functions.
However, using the rest parameter syntax provides a more convenient and explicit way to work with the variable arguments
by treating them as an array.
It is recommended to use the rest parameter syntax when possible, as it is more modern and aligned with the ES6 standard.






MORE EXPLANANTION
****************************************************************************************



Yes, it is possible to receive a varied number of parameters in JavaScript. You can use the arguments object or the ES6 rest parameters syntax to achieve this.

Using the arguments object:

The arguments object is an array-like object that is available within all functions. It allows the argument’s values passed to the function to be retrieved by number, rather than by name. The object allows us to pass any number of arguments to a function smashingmagazine.com.

Example:

function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sum(1, 2, 3, 4)); // 10
Using ES6 rest parameters:

Rest parameters were introduced in ECMAScript 6 and provide a more convenient way to handle a variable number of arguments. You can use the spread syntax (...) in the function parameter list to capture all remaining arguments as an array stackoverflow.com.

Example:

function sum(...args) {
  return args.reduce((total, current) => total + current, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
Both approaches allow you to handle a variable number of arguments in JavaScript functions. The ES6 rest parameters syntax is more modern and generally recommended over the arguments object.






























