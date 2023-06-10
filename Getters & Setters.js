
get = binds an object property to a function when that property is accessed
set = binds an object property to a function when that property is assigned a value

class Car{
    constructor(power){
        this._gas = 25;
        this._power = power;
    }
    get power(){
        return `${this._power}hp`;
    }
    get gas(){
        return `${this._gas}L (${this._gas / 50 * 100}%)`;
    }
    set gas(value){
        if(value > 50){
            value = 50;
        }
        else if(value < 0){
            value = 0;
        }
        this._gas = value;
    }
}

let car = new Car(400);

car.gas = 100;

console.log(car.power);
console.log(car.gas);








MORE EXPLANANTION
**********************************************************************************************************8


JavaScript getters and setters are special methods that allow you to define how to access and modify object 
properties. They are often used to encapsulate the implementation details of an object property, 
  while still allowing external code to access and modify its value geeksforgeeks.org.

To define a getter, use the get keyword followed by the name of the method. Similarly, to define a setter,
  use the set keyword followed by the name of the method w3schools.com. Heres an example of how to define 
a getter and setter for a person object:

const person = {
    _name: "",
    _age: 0,
    get age() {
        return this._age;
    },
    set age(value) {
        if (typeof value !== "number" || value < 0) {
            throw new Error("Age must be a positive number");
        }
        this._age = value;
    },
};

person.age = 25;
console.log(person.age); // 25
// person.age = -10; // throws an error: 
// "Age must be a positive number"
geeksforgeeks.org

One of the main benefits of using getters and setters is that they allow you to encapsulate the implementation details 
of an object property. This means that you can change the internal implementation of a property without affecting the 
external code that uses the property geeksforgeeks.org.

Another benefit of getters and setters is that they allow you to add validation and error-checking to object properties.
For example, you could add validation to the age setter method to ensure that the value passed to it is a positive number
and throw an error if it does not geeksforgeeks.org.

In addition to the get and set keywords, you can also define getters and setters using Object.defineProperty() 
developer.mozilla.org. This method allows you to add getters and setters to objects after they are defined and can be
used to set configurable and enumerable behaviors.

var foo = { _bar: 123 };
Object.defineProperty(foo, 'bar', {
    get: function() { return this._bar; },
    set: function(value) { this._bar = value; }
});
foo.bar = 456;
var gaz = foo.bar;
stackoverflow.com

In conclusion, getters and setters are a powerful feature of JavaScript that allow you to encapsulate the
implementation details of object properties while still providing external code with a way to access and modify their values.
By defining getters and setters, you can improve the robustness and maintainability of 
your code and make it easier to add validation and error checking to your object properties 











MORE EXPLANANTION
**********************************************************************************************************8


In JavaScript, getters and setters are special methods that allow you to define how object properties 
are accessed (get) and modified (set). They provide a way to define computed properties or add additional 
logic when getting or setting a property value.

Heres an example that demonstrates the use of getters and setters in JavaScript:

javascript
Copy code
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Getter for full name
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // Setter for full name
  set fullName(name) {
    const [firstName, lastName] = name.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person = new Person("John", "Doe");

console.log(person.fullName); // Output: John Doe

person.fullName = "Jane Smith";
console.log(person.firstName); // Output: Jane
console.log(person.lastName); // Output: Smith
console.log(person.fullName); // Output: Jane Smith
In the above example, we define a Person class with a firstName and lastName property.
We then define a getter and a setter for the fullName property. 
The getter returns the full name by combining the first and last name,
  while the setter splits the provided name into first and last names and assigns them to the corresponding properties.

By using getters and setters, we can access and modify properties in a controlled manner, 
  allowing us to perform additional operations or validations if needed.

Its worth noting that getters and setters can also be defined for object literals using 
Object.defineProperty() or Proxy objects. However, the class syntax provides a more convenient and readable way to define them.








































































...
