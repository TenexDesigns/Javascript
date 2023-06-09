

 Map = object that holds key-value pairs of any data type





In JavaScript, a Map is a built-in object that allows you to store key-value pairs. 
It provides an ordered collection of key-value entries and allows efficient lookup and retrieval 
of values based on their associated keys.

Here's an example of creating and using a Map in JavaScript:

javascript
Copy code
// Creating a Map
const map = new Map();

// Adding entries to the Map
map.set('name', 'John');
map.set('age', 30);
map.set('city', 'New York');

// Getting values from the Map
console.log(map.get('name')); // Output: John
console.log(map.get('age')); // Output: 30

// Checking if a key exists in the Map
console.log(map.has('city')); // Output: true
console.log(map.has('country')); // Output: false

// Getting the size of the Map
console.log(map.size); // Output: 3

// Deleting an entry from the Map
map.delete('age');

// Iterating over the Map
map.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// Clearing the Map
map.clear();
console.log(map.size); // Output: 0
Some important things to note about Map:

Keys in a Map can be of any type, including objects or functions, whereas in regular JavaScript objects, keys are converted to strings.
Map maintains the order of entries, so when iterating over a Map, the entries are retrieved in the order they were added.
Unlike objects, Map provides built-in methods like size, clear(), and iterable methods like forEach() for convenient manipulation and iteration.
Map is commonly used when you need to store and retrieve data with a specific key and want to maintain the insertion order of the entries.
It provides a more powerful and flexible alternative to plain JavaScript objects for key-value storage.
























