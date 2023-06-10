super = Refers to the parent class. Commonly used to invoke constructor of a parent class

class Animal{
    
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
class Rabbit extends Animal{

    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }
}
class Fish extends Animal{

    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
}
class Hawk extends Animal{

    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }
}

const rabbit = new Rabbit("rabbit", 1, 40);
const fish = new Fish("fish", 2, 80);
const hawk = new Hawk("hawk", 3, 200);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);







MORE EXPLANANTION
**********************************************************************

In JavaScript, the super keyword is used to call functions or access properties on the parent object or class. It is often used within derived classes (child classes) to invoke the constructor or methods of the parent class.

Here are a few use cases of the super keyword in JavaScript:

Calling the parent class constructor:

javascript
Copy code
class Parent {
  constructor(name) {
    this.name = name;
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name); // Call the parent class constructor
    this.age = age;
  }
}

const child = new Child("John", 10);
console.log(child.name); // Output: John
Accessing parent class methods:

javascript
Copy code
class Parent {
  sayHello() {
    console.log("Hello from Parent");
  }
}

class Child extends Parent {
  sayHello() {
    super.sayHello(); // Call the parent class method
    console.log("Hello from Child");
  }
}

const child = new Child();
child.sayHello();
// Output:
// Hello from Parent
// Hello from Child
Using super in object methods (non-class syntax):

javascript
Copy code
const parent = {
  sayHello() {
    console.log("Hello from Parent");
  }
};

const child = {
  sayHello() {
    super.sayHello(); // Call the parent object method
    console.log("Hello from Child");
  }
};

Object.setPrototypeOf(child, parent);
child.sayHello();
// Output:
// Hello from Parent
// Hello from Child
In all these examples, the super keyword is used to refer to the parent class or object and access its properties or methods. It allows derived classes or objects to inherit and extend the functionality of the parent.
