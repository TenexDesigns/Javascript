We just create a function  the receives an arument but the function returns the promise. 
So the promise will be able to use the argument passed to the function

function fetchData(endpoint) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Data from ${endpoint}`);
    }, 1000);
  });
}


fetchData('http:google.com').then((data)=>{console.log(data)}).catch((error)=>{console.log(error)})


code explained
----------------------------------------------------------------------
The code you provided is a function named fetchData that returns a Promise. Promises are a built-in feature in JavaScript that allow you to work with asynchronous operations in a more organized and manageable way.

The format used to create a Promise is as follows:

javascript
Copy code
new Promise((resolve, reject) => {
  // Asynchronous operation
  // If the operation is successful, call resolve(value)
  // If the operation fails, call reject(error)
});
In the fetchData function, a new Promise is created. Inside the Promise constructor, there is an asynchronous operation simulated using setTimeout. After a delay of 1000 milliseconds (1 second), the operation will resolve the Promise with a message that includes the endpoint parameter.

Here's a breakdown of the code:

The fetchData function takes an endpoint parameter.
It creates a new Promise, which receives two arguments: resolve and reject. These arguments are functions provided by the Promise constructor.
Inside the Promise, there is a setTimeout function that represents the asynchronous operation. It waits for 1000 milliseconds and then calls resolve with a string that includes the endpoint parameter.
The Promise is returned from the fetchData function, allowing the caller to work with it.
When the Promise is resolved, the resolved value can be accessed through the .then() method when consuming the Promise.
Here's an example of how you can use the fetchData function:

javascript
Copy code
fetchData("https://example.com/api/data")
  .then((result) => {
    console.log(result); // Output: "Data from https://example.com/api/data"
  })
  .catch((error) => {
    console.error(error);
  });
In this example, we call the fetchData function with an endpoint argument. We then use the .then() method to handle the resolved value of the Promise, printing it to the console. If any error occurs during the Promise's lifecycle, it can be caught and handled using the .catch() method.

Overall, the fetchData function is a convenient way to wrap an asynchronous operation in a Promise, allowing for more organized and controlled handling of asynchronous data fetching.


// const wait = argumentTime => new Promise(resolve => {
//     setTimeout(resolve, argumentTime);
// });

// wait(3000).then(() => console.log("Thanks for waiting!"));


MORE EXPLAANTION
**************************************************************************************************

To pass arguments to a promise, you can simply pass the required arguments to the function that creates the promise and use them inside the promise's executor function. Here's an example:

function createPromise(fileLoaded) {
  return new Promise((resolve, reject) => {
    if (fileLoaded) {
      resolve("File loaded");
    } else {
      reject("File NOT loaded");
    }
  });
}

const fileLoaded = false;
const promise = createPromise(fileLoaded);

promise
  .then((value) => console.log(value))
  .catch((error) => console.log(error));
In this example, the createPromise() function takes a fileLoaded argument, which is then used inside the executor function of the Promise to determine if the file is loaded. The Promise is created by calling createPromise() with the desired fileLoaded value.

When you need to pass arguments between chained promises, you can return values from the then() callbacks, and these will be passed as arguments to the next then() callback in the chain developer.mozilla.org.

Here's an example of passing arguments between chained promises:

function fetchData(url) {
  return new Promise((resolve, reject) => {
    // Simulating an API call
    setTimeout(() => {
      resolve(`Data from ${url}`);
    }, 1000);
  });
}

fetchData("https://api.example.com/data")
  .then((result) => {
    console.log(result);
    return result + " - processed";
  })
  .then((processedResult) => {
    console.log(processedResult);
  })
  .catch((error) => console.log(error));
In this example, the fetchData() function simulates an API call, and the first then() callback logs the result and appends the string " - processed" to it. The modified result is then returned and passed as an argument to the next then() callback, which logs the processed result developer.mozilla.org.
















