
promise = object that encapsulates the result of an asynchronous operation
                  It lets asynchronous methods return values like synchronous methods
                  "I promise to return something in the future"

          the STATE of a promise is 'pending' then: 'fulfilled' or 'rejected'
          the RESULT is what can be returned. If the opration is succesful,resolve is called and what is in resolve is returned, 
           If opreations is not sucessful, then resject is called and what is in reject is retuned
          A promise has  2 parts producing(The code in new promise) & consuming(Where we call the .then()and .catch)
          The .then() catches the result if the opration is sucessful[What is returned by resolve] e.g Here it catches the values--> "File loade" if fileLoaded is true
          The .catch() is excuted if the opratioon fails, It catches what is returnd by reject e.g Here it catches the value returned by reject and --> "File Not Loaded", since fileloaded is false
//PRODUCING CODE
// ------------- Example 1 -------------
const promise = new Promise((resolve, reject) => {
 
    let fileLoaded = false;
 
    if(fileLoaded){
        resolve("File loaded");
    }
    else{
        reject("File NOT loaded");
    }
});
 
//Consuming code
promise.then(value => console.log(value))
              .catch(error => console.log(error));


Heres an explanation of the code and its elements:

promise: This is a Promise object that encapsulates the result of an asynchronous operation. It represents a value that will be available in the future developer.mozilla.org.

new Promise((resolve, reject) => {...}): The constructor creates a new Promise. It takes a callback function with two parameters, resolve and reject. Inside this function, you can write the code for the asynchronous operation freecodecamp.org.

fileLoaded: This is a boolean variable representing whether the file is loaded or not. In this example, it is set to false, simulating a failed file load.

resolve("File loaded"): If fileLoaded is true, the Promise is fulfilled with the value "File loaded".

reject("File NOT loaded"): If fileLoaded is false, the Promise is rejected with the reason "File NOT loaded".

promise.then(value => console.log(value)): The then() method is used to handle the successful outcome (fulfilled Promise) and prints the value returned by resolve() to the console.

promise.catch(error => console.log(error)): The catch() method is used to handle the unsuccessful outcome (rejected Promise) and prints the error returned by reject() to the console.

In this example, since fileLoaded is false, the Promise will be rejected, and the output will be "File NOT loaded" developer.mozilla.org, freecodecamp.org.

--------------------------------------------------------------------------------------








PROMISES EXPLAINED
***********************************************************


JavaScript Promises are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value freecodecamp.org. Promises help simplify and manage asynchronous code, making it more readable and easier to maintain web.dev.

A Promise can be in one of three states:

Pending: The initial state; neither fulfilled nor rejected.
Fulfilled: The operation completed successfully, and the promise has a resulting value.
Rejected: The operation failed, and the promise has a reason for the failure.
To create a new Promise, you can use the Promise constructor, which takes a single argument: a callback function with two parameters, resolve and reject. Inside the callback function, you write the asynchronous code and call resolve when the operation is successful or reject when it fails web.dev.

const myPromise = new Promise((resolve, reject) => {
  // Asynchronous code here
  if (/* operation successful */) {
    resolve("Operation succeeded");
  } else {
    reject("Operation failed");
  }
});
To handle the results of a Promise, you can use the then() method for successful outcomes and the catch() method for failed outcomes. You can also chain multiple then() methods to handle a sequence of asynchronous operations web.dev.

myPromise
  .then((result) => {
    console.log(result); // "Operation succeeded"
  })
  .catch((error) => {
    console.log(error); // "Operation failed"
  });
In summary, JavaScript Promises are objects used to manage asynchronous operations, making it easier to write and maintain asynchronous code. Promises have three states: pending, fulfilled, and rejected, and you can use the then() and catch() methods to handle the outcomes of these operations







PROMISES EXCUTED
***********************************************************



JavaScript promises are a way to handle asynchronous operations in a more readable and manageable manner. They represent the eventual completion or failure of an asynchronous operation and allow you to chain multiple asynchronous operations together.

A promise has three states: pending, fulfilled, or rejected. When a promise is pending, it means the asynchronous operation is still in progress. When a promise is fulfilled, it means the operation has completed successfully. When a promise is rejected, it means the operation has failed.

Here's an example of creating and consuming a promise:

javascript
Copy code
const myPromise = new Promise((resolve, reject) => {
  // Perform an asynchronous operation
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
      resolve(randomNumber); // Operation succeeded
    } else {
      reject(new Error('Operation failed')); // Operation failed
    }
  }, 2000);
});

myPromise.then((result) => {
  console.log('Promise fulfilled:', result);
}).catch((error) => {
  console.log('Promise rejected:', error);
});
In the above example, a promise is created with the new Promise() constructor. Inside the promise executor function, an asynchronous operation is performed using setTimeout(). If the operation succeeds (random number > 0.5), the promise is resolved using resolve(), and if it fails, the promise is rejected using reject().

The then() method is used to handle the fulfillment of the promise. It takes a callback function that will be executed when the promise is resolved. The catch() method is used to handle the rejection of the promise. It takes a callback function that will be executed when the promise is rejected.

Promises also support chaining, allowing you to perform sequential asynchronous operations. You can chain multiple then() methods together, with each then() returning a new promise. This allows you to handle the result of each operation in a separate then() block.

Here's an example of promise chaining:

javascript
Copy code
myPromise
  .then((result) => {
    console.log('First operation succeeded:', result);
    return result * 2; // Perform a new operation
  })
  .then((result) => {
    console.log('Second operation succeeded:', result);
  })
  .catch((error) => {
    console.log('Promise rejected:', error);
  });
In the above example, the result of the first operation is multiplied by 2 in the second then() block, and the final result is logged. If any operation in the chain fails, the catch() block will be executed.

Promises provide a more structured and readable way to handle asynchronous operations compared to traditional callback-based approaches. They simplify error handling and allow for better code organization and control flow.















































