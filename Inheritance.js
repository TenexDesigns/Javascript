inheritance = a child class can inherit all the  methods and properties from another class

class Animal{

    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{

    name = "rabbit";

    run(){
        console.log(`This ${this.name} is running`);
    }
}
class Fish extends Animal{

    name = "fish";

    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}
class Hawk extends Animal{

    name = "hawk";

    fly(){
        console.log(`This ${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();




MORE EXPLANANTION
******************************************************************************************************************8



JavaScript supports prototype-based inheritance, where objects can inherit properties and methods from other objects. 
In JavaScript, objects can have a prototype object, and if a property or method is not found on the object itself,
  JavaScript looks for it in the prototype chain.

Heres an example to demonstrate how inheritance works in JavaScript:

javascript
Copy code
// Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

// Child class inheriting from the parent class
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Calling the parent class constructor
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks!`);
  }
}

// Create instances of the classes
const animal = new Animal("Animal");
const dog = new Dog("Buddy", "Labrador");

animal.speak(); // Output: Animal makes a sound.
dog.speak(); // Output: Buddy barks!
In the above example, we have a parent class Animal with a speak method.
The child class Dog extends the Animal class using the extends keyword and also has its own speak method. 
The super keyword is used in the child class constructor to call the parent class constructor and pass the necessary arguments.

When we create instances of the classes, we can see that both animal and dog objects have access to the speak method. 
The dog object overrides the speak method defined in the parent class, demonstrating polymorphism.

JavaScripts prototype-based inheritance provides a flexible way to create object hierarchies and share behavior
between objects. By defining methods and properties in the prototype chain,
  we can achieve code reuse and create complex object relationships.



































