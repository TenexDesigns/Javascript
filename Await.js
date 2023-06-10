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
                   
                   
                   


