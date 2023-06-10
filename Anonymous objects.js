class Card{
    constructor(value, suit){
        this.value = value;
        this.suit = suit;
    }
}

let cards = [new Card("A", "Hearts"), 
             new Card("A", "Spades"), 
             new Card("A", "Diamonds"), 
             new Card("A", "Clubs"), 
             new Card("2", "Hearts"), 
             new Card("2", "Spades"), 
             new Card("2", "Diamonds"), 
             new Card("2", "Clubs")];

cards.forEach(card => console.log(`${card.value} ${card.suit}`));





MORE EXPLANANTION
**************************************************************************************************************
  
  
  
  
  
  
  JavaScript anonymous objects are objects that are created without being assigned to a variable or given a specific name. They can be used as a one-time-use object with properties and methods, and they are often used as arguments for functions or as a way to quickly create an object with specific properties ictdemy.com.

Here's an example of creating an anonymous object and passing it to a function:

function displayInfo(person) {
    console.log(`Name: ${person.name}, Age: ${person.age}`);
}

displayInfo({ name: "John Doe", age: 30 }); // Output: Name: John Doe, Age: 30
In this example, an anonymous object with properties name and age is created and passed to the displayInfo function directly. The function then accesses the object's properties and logs them to the console.

Another example is creating an anonymous object with a method:

({
    greet: function() {
        console.log("Hello, world!");
    }
}).greet(); // Output: Hello, world!
In this example, an anonymous object with a greet method is created, and the method is immediately called. Note that this object is not assigned to a variable and cannot be accessed after its initial creation.

In conclusion, JavaScript anonymous objects are objects that are created without a specific name or variable assignment. They can be used for various purposes, such as passing them as arguments to functions or quickly creating objects with specific properties and methods ictdemy.com.


  
  
  
  
  
  
  
MORE EXPLANANTION
**************************************************************************************************************
  
  
  In JavaScript, you can create anonymous objects on-the-fly without explicitly defining a class or constructor function.
  Anonymous objects are objects that are created directly within the code without assigning them to a variable or
  using them as a prototype for other objects.

Here's an example of creating an anonymous object in JavaScript:

javascript
Copy code
const person = {
  name: "John",
  age: 25,
  occupation: "Engineer",
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};

person.greet(); // Output: Hello, my name is John
In the above example, we create an anonymous object using curly braces {}.
The object has properties like name, age, occupation, and a method greet. 
The object can be accessed and used immediately without assigning it to a variable.

Anonymous objects are useful when you need to create a one-time object for a specific purpose
without the need for reuse or further modification. They are commonly used in scenarios where you
need to pass an object as an argument to a function or when working with object literals in JavaScript.

Its important to note that anonymous objects do not have a specific reference or name,
so they cannot be directly accessed or modified after their creation. They exist only within the scope where they are defined.
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  ..
