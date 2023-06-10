setInterval() = invokes a function repeatedly after no. of milliseconds
                         asynchronous function (doesn't pause execution)










The setInterval() function in JavaScript is used to repeatedly execute a function at specified intervals. It allows you to create recurring time-based events in your applications. The basic syntax of setInterval() is as follows:


setInterval(function, delay, param1, param2, ...)
function: The function to be executed repeatedly at the specified interval.
delay: The delay in milliseconds between each execution of the function.
param1, param2, ...: Optional parameters to be passed to the function.
Heres an example that demonstrates the usage of setInterval():


function greet() {
  console.log("Hello!");
}

// Execute the greet function every 1 second
setInterval(greet, 1000);

// Output: Hello! (repeatedly every 1 second)
In the above example, the greet function is scheduled to be executed every 1 second (1000 milliseconds) by using setInterval(). The function is passed as the first parameter, followed by the interval and any additional parameters.

You can also use setInterval() with an anonymous function:

javascript
Copy code
setInterval(function() {
  console.log("Repeated execution!");
}, 2000);

// Output: Repeated execution! (repeatedly every 2 seconds)
Similar to setTimeout(), setInterval() returns a unique identifier (a numeric value) representing the interval timer. You can use this identifier to cancel the recurring execution of the function using the clearInterval() function:

javascript
Copy code
var intervalId = setInterval(function() {
  console.log("This will not be executed anymore!");
}, 3000);

// Cancel the recurring execution of the function
clearInterval(intervalId);
By calling clearInterval() with the interval identifier, you can stop the recurring execution of the function.

setInterval() is commonly used for tasks that need to be performed repeatedly at specific intervals, such as updating real-time data, running animations, checking for changes, and more. It provides a way to create continuous, recurring behavior in JavaScript applications.






MORE EXPLAANNTION
***************************************************************************************************************
  
  
  
  The setInterval() function in JavaScript is used to repeatedly execute a specified function at a given time interval. It takes two arguments: the function to be executed and the time interval in milliseconds programiz.com.

Here's an example of using setInterval():

function greet() {
    console.log("Hello, world!");
}

const intervalID = setInterval(greet, 1000); // The greet function will be executed every 1 second (1000 milliseconds)
The setInterval() function returns an interval ID, which is a positive integer. You can use this ID to cancel the repeated execution of the function using the clearInterval() function programiz.com.

clearInterval(intervalID); // This will stop the repeated execution of the greet function
Here's an example of using setInterval() with a for loop:

var list = [1, 2, 3, 4, 5];

for (var i = 0, len = list.length; i < len; i += 1) {
    (function(i) {
        setInterval(function() {
            list[i] += 10;
            console.log(i + "=>" + list[i] + "\n");
        }, 5000)
    })(i);
}
In this example, the setInterval() function is used inside a for loop to repeatedly update and log the values of an array every 5 seconds (5000 milliseconds) stackoverflow.com.

In summary, the setInterval() function in JavaScript allows you to execute a specified function at a given time interval. You can cancel the repeated execution of the function using the clearInterval() method with the interval ID returned by setInterval() programiz.com.


  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  





