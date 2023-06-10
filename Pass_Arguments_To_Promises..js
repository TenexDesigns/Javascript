const wait = argumentTime => new Promise(resolve => {
    setTimeout(resolve, argumentTime);
});

wait(3000).then(() => console.log("Thanks for waiting!"));


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
















