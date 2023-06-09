
rest parameters  (...ArrayName) = represents an indefinite number of parameters    (packs arguments into an array)

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log(sum(a, b, c, d, e));

function sum(...numbers){
    let total = 0;
    for(let number of numbers){
        total += number
    }
    return total
}





Rest parameters in JavaScript allow you to represent an indefinite number of arguments as an array. The rest parameter syntax is denoted by three dots (...) followed by the parameter name. It collects all the remaining arguments passed to a function into an array. Here's how you can use rest parameters in JavaScript:

function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7, 8)); // Output: 30
In the above example, the sum function uses a rest parameter named numbers. When the function is called with multiple arguments, the rest parameter collects all the arguments into an array called numbers. You can then perform operations on the array as needed.

Rest parameters allow you to handle functions with a variable number of arguments more flexibly. They eliminate the need to use the arguments object, which was the traditional way to access all arguments passed to a function before the introduction of rest parameters.

It's important to note that the rest parameter must be the last parameter in a function's parameter list, as it collects all remaining arguments. Only one rest parameter is allowed per function.





 JavaScript rest parameters and how to pass hthen to a function together with named paramwtweres
**************************************************************************************************************************
   
   
   
   
Rest parameters in JavaScript allow you to pass an indefinite number of arguments to a function as an array. You can use rest parameters along with named parameters in a function declaration. Here's an example that demonstrates how to pass arguments using both rest parameters and named parameters:

javascript
Copy code
function greet(greeting, ...names) {
  names.forEach((name) => {
    console.log(`${greeting}, ${name}!`);
  });
}

greet('Hello', 'Alice', 'Bob', 'Charlie');
In the above example, the greet function has a named parameter greeting and a rest parameter names. The greeting parameter represents the greeting message, while the names parameter collects any additional arguments into an array.

When you invoke the greet function with the arguments 'Hello', 'Alice', 'Bob', 'Charlie', the greeting parameter receives the value 'Hello', and the names parameter becomes an array containing ['Alice', 'Bob', 'Charlie']. The function then iterates over each name in the names array and logs a greeting message for each name.

Using rest parameters and named parameters together provides flexibility in handling a variable number of arguments while still being able to access individual named parameters within the function body.

























