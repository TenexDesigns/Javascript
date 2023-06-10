In JavaScript, classes provide a way to define reusable blueprints for creating objects with shared properties and methods. Introduced in ECMAScript 2015 (ES6), classes in JavaScript follow a syntax similar to class-based languages like Java or C++, but they are actually based on JavaScript's prototype-based inheritance.

Here's an example of defining a class in JavaScript:

javascript
Copy code
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}
In the above example, the Person class is defined using the class keyword. It has a constructor method that is executed when a new instance of the class is created. The constructor sets the initial values of the name and age properties on the newly created object.

The class also has a sayHello method, which can be called on instances of the Person class to display a greeting message.

To create an instance of the class, you can use the new keyword:

javascript
Copy code
const person1 = new Person('John', 25);
person1.sayHello(); // Output: Hello, my name is John and I am 25 years old.
You can also define class methods and static methods:

javascript
Copy code
class MathUtils {
  static add(x, y) {
    return x + y;
  }

  static multiply(x, y) {
    return x * y;
  }
}

console.log(MathUtils.add(2, 3)); // Output: 5
console.log(MathUtils.multiply(4, 5)); // Output: 20
In this example, add and multiply are static methods of the MathUtils class. Static methods are accessed directly on the class itself, without the need for creating an instance.

JavaScript classes provide a more structured and convenient way to create objects with shared behavior and state. They help in organizing code and promoting code reuse through inheritance and method overriding.
