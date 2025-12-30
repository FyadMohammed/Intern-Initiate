// Callback functions: 

console.log("\n1. General Callback\n");
function divide(a,b,callback){
    if(b==0){
        callback(new Error("Division by zero"));
    }else{
        callback(null, a/b);
    }
}

divide(10,2, (error,result)=> {
    if(error) {
        console.log("Error:", error.message);
    }
    else{
        console.log("Result:", result);
    }
});

console.log("\n2.Nested Callback\n");

function step1(callback){
    setTimeout(()=>{
        console.log('Step 1 done');
        callback();
    },500);
}

function step2(callback){
    setTimeout(()=>{
        console.log('Step 2 done');
        callback();
    },500);
}

step1(()=>{
    step2(()=>{
        console.log('All steps completed');
    });
});

// 3. Higher order function with callback
function filterArray(arr,callback){
    const result = [];
    arr.array.forEach(element => {
        
    });
}

// Promises : 
// 1. 
const promiseA = new Promise((resolve, reject) => {
  resolve(777);
});

promiseA.then((val) => console.log("asynchronous logging has val:", val));
console.log("immediate logging");

// 2. Thenable
const thenable = {
  then(onFulfilled, onRejected) {
    onFulfilled({
      // The thenable is fulfilled with another thenable
      then(onFulfilled, onRejected) {
        onFulfilled(42);
      },
    });
  },
};

Promise.resolve(thenable); // A promise fulfilled with 42

//Examples : 
const myFirstPromise = new Promise((resolve, reject) => {
  // We call resolve(...) when what we were doing asynchronously
  // was successful, and reject(...) when it failed.
  setTimeout(() => {
    resolve("Success!"); // Yay! Everything went well!
  }, 250);
});

myFirstPromise.then((successMessage) => {
  // successMessage is whatever we passed in the resolve(...) function above.
  // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
  console.log(`Yay! ${successMessage}`);
});

