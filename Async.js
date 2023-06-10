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













