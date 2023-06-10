static = belongs to the class, not the objects
             static properties: useful for caches, fixed-configuration
             static  methods:    useful for utility functions

class Car{

    static numberOfCars = 0;

    constructor(model){
        this.model = model;
        Car.numberOfCars += 1;
    }
    static startRace(){
        console.log("3...2...1...GO!");
    }
}

const car1 = new Car("Mustang");
const car2 = new Car("Corvette");
const car3 = new Car("BMW");

console.log(Car.numberOfCars);
Car.startRace();



MORE EXPLANANNTION
*******************************************************************************************************************8



In JavaScript, the static keyword is used to define static methods or properties within a class. Static methods and properties belong to the class itself rather than its instances, which means they can be accessed directly on the class without the need to create an instance of the class.

Here's an example to illustrate the use of static methods and properties:

javascript
Copy code
class MathUtils {
  static PI = 3.14159;

  static add(x, y) {
    return x + y;
  }

  static multiply(x, y) {
    return x * y;
  }
}

console.log(MathUtils.PI); // Output: 3.14159

console.log(MathUtils.add(5, 3)); // Output: 8

console.log(MathUtils.multiply(4, 6)); // Output: 24
In the above example, the MathUtils class defines a static property PI and two static methods add and multiply. The PI property is accessed directly on the class MathUtils without the need to create an instance. Similarly, the add and multiply methods are called directly on the class itself.

Static methods are useful when you have utility methods that don't require any specific instance data and can be used independently of the class instances. They provide a way to group related functions within a class without the need to create unnecessary instances.

It's important to note that static methods cannot access the instance properties or methods of the class. They can only work with static properties and other static methods. Static properties and methods are also not inherited by the subclasses, they are specific to the class in which they are defined.

Overall, the static keyword allows you to define methods and properties that are associated with the class itself rather than the instances, providing a convenient way to organize and access common functionalities.



















