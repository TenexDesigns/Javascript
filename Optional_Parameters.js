Optional parameters: To define an optional parameter in a function declaration, you can simply omit it from the function call or pass undefined as its value. In the function definition, you can use the || operator to assign a default value to the parameter if it is not provided. For example:
function greet(name, message) {
  name = name || 'friend';
  message = message || 'Hello';
  console.log(`${message}, ${name}!`);
}

greet(); // Hello, friend!
greet('John'); // Hello, John!
greet('Mary', 'Hi'); // Hi, Mary!
In this example, the name and message parameters are optional, and their default values are 'friend' and 'Hello', respectively.
