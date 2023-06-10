Await keyword  -   Await is a way to recive the resoved data from a promise, 
                    If the prose response a rejecte, The await throws an error (the reject responce from the promise), hence why we need to surround an await with try catch block
                   Await makes a function wait for a promise
                   
                   is an alternative way to write the consuming code inside an async function.
                   Note--> Never put () on a promise unless you are sending aruments to it e.g look at Section B
                   
                   
const promise =  new Promise((resolve, reject) => {
    let fileLoaded = false;

    if(fileLoaded){
        resolve("File loaded");
    }
    else{
        reject("File NOT loaded");
    }
  })
  


async function fetchData() {
  

    try {
      const response = await promise
      return response;
    } catch (error) {
      console.log('Error from await catch:', error);
      throw error;
    }


  }
  
  

  
  // Calling the async function
  fetchData()
    .then(data => {
      console.log('Data:', data);
    })
    .catch(error => {
      console.log('Error from async catch:', error);
    });
                     
                   
If fileloaded in the promise is true, then the result in console  is ----> Data: File loaded
if fileloaded in  the promise is false then the  result in sonsole is ----> Error from await catch: File NOT loaded
                                                                     -----> Error from async catch: File NOT loaded


NOTE_----------------------------------------------------------------
Using await allows you to write asynchronous code in a more synchronous style, making it easier to read and understand. 
It helps avoid callback hell and allows for cleaner error handling using try-catch blocks.

In JavaScript, the await keyword is used inside an async function to pause the execution of the function until a
promise is settled (resolved or rejected) and to retrieve the resolved value of the promise.
It can only be used within an async function.

When you use await before a promise, it suspends the execution of the async function until the promise is resolved,
  and then it returns the resolved value. If the promise is rejected, it throws an error, 
    which can be caught using a try-catch block.
NOTE_----------------------------------------------------------------
                                                                     
                                                                     
                                                                     
        AWAIT  KEYWORD CAN ALSO BE USED WITH ASYNC FUNCTIONES i.e When We use async functions to write promises instead of new Promise syntacx
NOOTE**************************************************************************************************>
async function loadfilePromise(){
  
    let fileLoaded = false;
 
    if(fileLoaded){
        return "File loaded";
    }
    else{
        throw "File NOT loaded";
    }



}
 
  
async function fetchData() {
  

    try {
      const response = await loadfilePromise()
      return response;
    } catch (error) {
      console.log('Error from await catch:', error);
      throw error;
    }


  }
  
  

  
  // Calling the async function
  fetchData()
    .then(data => {
      console.log('Data:', data);
    })
    .catch(error => {
      console.log('Error from async catch:', error);
    });
  







                                                                     
     SECTION B ---> You should not use () on a preomise unless you are passing argument like here                                                                
   **********************************************************************                                                                  
                                                                     
                   
                   
const promise = time => new Promise((resolve, reject) => {
    let fileLoaded = false;
    console.log(time)

    if(fileLoaded){
        resolve("File loaded");
    }
    else{
        reject("File NOT loaded");
    }
  })
  
async function fetchData() {
  

    try {
      const response = await promise("time")
      return response;
    } catch (error) {
      console.log('Error:', error);
      throw error;
    }


  }
  
  

  
  // Calling the async function
  fetchData()
    .then(data => {
      console.log('Data:', data);
    })
    .catch(error => {
      console.log('Error:', error);
    });
  
********************************
                   
                   
  
  THE CODE EXPLAINED
  
  The provided code demonstrates the use of the await keyword in JavaScript, along with an explanation of its behavior. Here's a breakdown of the code and the associated notes:

javascript
Copy code
const promise = new Promise((resolve, reject) => {
  let fileLoaded = false;

  if (fileLoaded) {
    resolve("File loaded");
  } else {
    reject("File NOT loaded");
  }
});
In this part, a promise is created with a callback function that takes two parameters: resolve and reject. The fileLoaded variable is set to false. If fileLoaded is true, the promise resolves with the message "File loaded". Otherwise, it rejects with the message "File NOT loaded".
javascript
Copy code
async function fetchData() {
  try {
    const response = await promise;
    return response;
  } catch (error) {
    console.log('Error from await catch:', error);
    throw error;
  }
}
The fetchData function is defined as an async function, which means it can use the await keyword to wait for promises to resolve or reject.
Inside the function, the await keyword is used to wait for the promise to settle (either resolve or reject). If the promise resolves, the resolved value is assigned to the response variable.
If the promise rejects, an error is caught in the catch block. The error message is logged to the console, and then it is re-thrown to be caught by the calling code.
javascript
Copy code
fetchData()
  .then(data => {
    console.log('Data:', data);
  })
  .catch(error => {
    console.log('Error from async catch:', error);
  });
The fetchData function is called, and the returned promise is handled using the .then() and .catch() methods.
If the promise resolves, the resolved data is logged to the console.
If the promise rejects, the error is caught in the .catch() block, and the error message is logged to the console.
Based on the value of fileLoaded in the promise, the output in the console will vary:

If fileLoaded is true, the output will be: "Data: File loaded".
If fileLoaded is false, the output will be: "Error from await catch: File NOT loaded" followed by "Error from async catch: File NOT loaded".
The await keyword allows the code to pause and wait for the promise to settle, making it a convenient way to handle asynchronous operations in a more synchronous-like manner. It simplifies the syntax and readability compared to using .then() and .catch() chains.
                   




MORE EXPLANANTION
*************************************************************************************************

In JavaScript, the await keyword is used inside an async function to pause the execution of the function until a promise is settled (resolved or rejected) and to retrieve the resolved value of the promise. It can only be used within an async function.

When you use await before a promise, it suspends the execution of the async function until the promise is resolved, and then it returns the resolved value. If the promise is rejected, it throws an error, which can be caught using a try-catch block.

Here's an example that demonstrates the usage of await:

javascript
Copy code
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error:', error);
    throw error;
  }
}

// Calling the async function
fetchData()
  .then(data => {
    console.log('Data:', data);
  })
  .catch(error => {
    console.log('Error:', error);
  });
In the example, await is used to pause the execution of the fetchData function until the fetch request is resolved. The response is then processed by calling response.json() using another await statement to retrieve the JSON data.

Using await allows you to write asynchronous code in a more synchronous style, making it easier to read and understand. It helps avoid callback hell and allows for cleaner error handling using try-catch blocks.

It's important to note that the use of await is only valid inside an async function. If you try to use await outside of an async function, you'll get a syntax error.



MORE EXPLANANTION
*************************************************************************************************

The await keyword is used in JavaScript within an async function to wait for a Promise to settle (either fulfilled or rejected). It makes the code wait until the promise returns a result, effectively "pausing" the execution of the function until the Promise is resolved. The await keyword can only be used inside an async function tutorial.eyehunts.com.

Here's an example of using the await keyword:

async function fetchData(endpoint) {
  const response = await fetch(endpoint);
  const data = await response.json();
  console.log(data);
}

fetchData("https://jsonplaceholder.typicode.com/users");
In this example, the fetchData function is declared as an async function. The await keyword is used with the fetch and response.json() methods to wait for their respective Promises to resolve before assigning their results to the response and data variables.

Note that you cannot use await in top-level code or in regular functions. If you attempt to do so, a syntax error will occur. To use await in top-level code, you can wrap it in an anonymous async function:

(async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
})();
In this example, an anonymous async function is used to allow the use of await with the fetch and response.json() methods w3docs.com.























