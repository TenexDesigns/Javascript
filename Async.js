Async - It is an alternative way to write a promise
Asyn makes a function return a preomise


THE PROMSE CODE
**************************************************************8
const promise = new Promise((resolve, reject) => {
 
    let fileLoaded = false;
 
    if(fileLoaded){
        resolve("File loaded");
    }
    else{
        reject("File NOT loaded");
    }
});
 
promise.then(value => console.log(value))
              .catch(error => console.log(error));




THE ASYNC CODE
********************************************************



async function loadfile(){
  
    let fileLoaded = false;
 
    if(fileLoaded){
        return "File loaded";
    }
    else{
        throw "File NOT loaded";
    }



}
 


 
loadfile().then(value => console.log(value))
              .catch(error => console.log(error));



You have to call the load function






MORE EXPLANANTION
*******************************************************************************************************

In JavaScript, the async keyword is used to define an asynchronous function. An asynchronous function is a special type of function that allows you to write asynchronous code using promises or the await keyword.

Here's an example of an async function:

javascript
Copy code
async function fetchData() {
  // Asynchronous code goes here
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}
In this example, the fetchData function is declared as an async function using the async keyword. Inside the function, you can write asynchronous code that will not block the execution of the program. The await keyword is used to pause the execution of the function until a promise is resolved or rejected.

In the code snippet, fetchData makes an HTTP request using the fetch function, which returns a promise. By using the await keyword, the function waits for the promise to be resolved and assigns the response to the response variable. Then, it calls response.json() to extract the JSON data from the response, again using the await keyword to wait for the promise to be resolved.

The async keyword allows you to write asynchronous code in a more synchronous-looking manner, avoiding the need for explicit callbacks or chaining .then() calls. Instead, you can use await to wait for promises to be resolved and assign their values directly to variables.

You can call an async function like any other function and use the .then() method or the await keyword to handle the resolved value or the rejected reason:

javascript
Copy code
fetchData().then(data => {
  // Handle the data
}).catch(error => {
  // Handle the error
});
The async keyword simplifies working with asynchronous code in JavaScript, making it easier to write and understand code that deals with promises, asynchronous operations, and API requests.







MORE EXPLANANTION
*******************************************************************************************************


 Async and await are syntactic sugar for working with Promises in JavaScript, making it easier to read and write asynchronous code. They allow you to write asynchronous code in a more synchronous manner, reducing the complexity of handling Promises freecodecamp.org.

An async function is declared with the async keyword before the function definition. It always returns a Promise. When an async function is called, it returns a resolved Promise with the value returned by the function or a rejected Promise if an uncaught exception is thrown developer.mozilla.org.

The await keyword can only be used inside an async function. It makes JavaScript wait for a Promise to settle (either fulfilled or rejected) before continuing the execution of the code. This allows you to work with asynchronous operations as if they were synchronous, making the code more readable and easier to understand digitalocean.com.

Here's an example using async and await with the Fetch API:

async function fetchUsers(endpoint) {
  const res = await fetch(endpoint);
  let data = await res.json();
  data = data.map(user => user.username);
  console.log(data);
}

fetchUsers('https://jsonplaceholder.typicode.com/users');
In this example, the fetchUsers function is declared as an async function. The await keyword is used with the fetch and res.json() methods to wait for their respective Promises to resolve before assigning their results to the res and data variables digitalocean.com.

Async and await make it easier to write and understand asynchronous JavaScript code and help avoid "callback hell" that can occur when chaining multiple Promises or callbacks freecodecamp.org.









































