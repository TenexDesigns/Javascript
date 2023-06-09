JavaScript provides a variety of built-in string methods that allow you to manipulate and work with strings. Here are some commonly used string methods:

length: Returns the length of a string.

const str = 'Hello, world!';
console.log(str.length); // Output: 13
toUpperCase(): Converts a string to uppercase.


const str = 'Hello, world!';
console.log(str.toUpperCase()); // Output: HELLO, WORLD!
toLowerCase(): Converts a string to lowercase.


const str = 'Hello, world!';
console.log(str.toLowerCase()); // Output: hello, world!
charAt(index): Returns the character at a specified index in a string.


const str = 'Hello, world!';
console.log(str.charAt(0)); // Output: H
console.log(str.charAt(7)); // Output: w
substring(startIndex, endIndex): Extracts a portion of a string between the specified indices.

const str = 'Hello, world!';
console.log(str.substring(0, 5)); // Output: Hello
console.log(str.substring(7)); // Output: world!
split(separator): Splits a string into an array of substrings based on a specified separator.


const str = 'Hello, world!';
console.log(str.split(', ')); // Output: ['Hello', 'world!']
trim(): Removes leading and trailing whitespace from a string.

const str = '   Hello, world!   ';
console.log(str.trim()); // Output: Hello, world!
startsWith(searchString): Checks if a string starts with a specified substring.

const str = 'Hello, world!';
console.log(str.startsWith('Hello')); // Output: true
console.log(str.startsWith('world')); // Output: false
endsWith(searchString): Checks if a string ends with a specified substring.


const str = 'Hello, world!';
console.log(str.endsWith('world!')); // Output: true
console.log(str.endsWith('Hello')); // Output: false
  
These are just a few examples of the many string methods available in JavaScript.
You can refer to the JavaScript documentation for a comprehensive list of string methods and their detailed usage.







































...
