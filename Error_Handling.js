error = object with a description of 
            something that went wrong

throw = executes a user-defined error




try{
  let x = window.prompt("Enter a #");
  x = Number(x);

  if(isNaN(x)) throw "That wasn't a number!";
  if(x == "") throw "That was empty!";

  console.log(`${x} is a number`);
}
catch(error){
  console.log(error);
}





MORE EXPLAANNTION
*********************************************************************************************************


  Error handling in JavaScript is essential to ensure that your code runs smoothly and can handle any unexpected situations.
  There are several techniques and best practices to handle errors in JavaScript.

Using try...catch blocks: The try...catch statement is used to handle exceptions that occur in the try block.
If an exception occurs, the code in the catch block is executed sitepoint.com.
try {
    // code that may throw an error
} catch (error) {
    // handle the error
}
Throwing custom errors: You can throw your own errors using the throw statement,
  which can provide more context about the error and make it easier to handle stackoverflow.com.
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}
Using the window.onerror event: The window.onerror event can be used to catch unhandled errors in your code. 
You can define a global error handler that logs the error message, URL, and line number where the error occurred stackoverflow.com.
window.onerror = function (msg, url, line) {
    console.error(`Error: ${msg} in ${url}:${line}`);
    return true;
};
Logging errors: Its a good practice to log errors on the server-side, which can help you analyze and fix issues in the code.
You can use various techniques to send error information to the server, such as using an AJAX request or creating a new Image object with the error information in the URL stackoverflow.com.

function logError(error) {
    const url = `log.php?error=${encodeURIComponent(error.message)}`;
    const img = new Image();
    img.src = url;
}

Handling asynchronous errors: When dealing with asynchronous code, you can use Promise and async/await to handle errors.
With Promise, you can use the .catch() method to handle errors. With async/await, you can use try...catch blocks to handle errors medium.com.
// Using Promise
fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error("Error fetching data:", error));

// Using async/await
async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
In conclusion, proper error handling in JavaScript involves using try...catch blocks, throwing custom errors, handling unhandled errors with window.onerror, logging errors, and handling asynchronous errors with Promise or async/await sitepoint.com, stackoverflow.com, medium.com.









MORE EXPLAANNTION
*********************************************************************************************************

  
  JavaScript provides several mechanisms for error handling to catch and handle exceptions that may occur during the execution of your code. Here are some commonly used error handling techniques in JavaScript:

Try...Catch: The try...catch statement allows you to catch and handle exceptions in your code. The try block contains the code that may throw an exception, and the catch block specifies the code to be executed if an exception is thrown. You can optionally include a finally block to specify code that should be executed regardless of whether an exception is thrown or not.
javascript
Copy code
try {
  // Code that may throw an exception
  throw new Error("Something went wrong");
} catch (error) {
  // Code to handle the exception
  console.log(error.message);
} finally {
  // Code that will always be executed
  console.log("Cleanup code");
}
Error Object: JavaScript provides built-in Error objects like Error, SyntaxError, TypeError, etc., that represent different types of errors. You can create custom Error objects by extending the built-in Error class.
javascript
Copy code
try {
  throw new Error("Custom error");
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
}
Throw Statement: You can use the throw statement to manually throw an exception. The exception can be of any type, including built-in or custom Error objects.
javascript
Copy code
function divide(a, b) {
  if (b === 0) {
    throw new Error("Divide by zero");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.log(error.message);
}
Error Handling in Promises: When working with asynchronous operations and Promises, you can use the catch method to handle errors that occur during the Promise chain.
javascript
Copy code
fetch("https://api.example.com/data")
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response error");
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error.message);
  });
These are some basic error handling techniques in JavaScript. It's important to handle errors appropriately in your code to provide better user experience and maintain the stability of your application.



























































...
