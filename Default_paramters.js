Default parameters: In ES6 and later versions of JavaScript, you can define default parameters in the function declaration itself. To do this, you can assign a default value to the parameter in its definition. For example:
function greet(name = 'friend', message = 'Hello') {
  console.log(`${message}, ${name}!`);
}

greet(); // Hello, friend!
greet('John'); // Hello, John!
greet('Mary', 'Hi'); // Hi, Mary!
In this example, the name and message parameters have default values of 'friend' and 'Hello', respectively, assigned using the = operator.




MORE EXPLANANTION
************************************************************************************

Default Parameters:
TypeScript supports default parameter values, allowing you to specify a default value for a parameter if no argument is provided during function invocation. Default values are assigned using the assignment operator (=) after the parameter declaration.

Example:

function multiply(a: number, b: number = 1) {
  return a * b;
}

console.log(multiply(5)); // Output: 5
console.log(multiply(3, 4)); // Output: 12
In the above example, the b parameter has a default value of 1. If no second argument is provided when calling the multiply function, it will use the default value of 1.

Using optional and default parameters in TypeScript provides both type safety and enhanced flexibility when defining function signatures. The TypeScript compiler can check for type compatibility and ensure that optional parameters are handled correctly within the function implementation.




































