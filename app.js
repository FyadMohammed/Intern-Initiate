//1. Function  object creation by using a function and nesting it within a function:

function map(f,a) {
    const result = new Array(a.length);

    for (let i = 0;i < a.length;i++){
        result[i] = f(a[i]);
    }

    return result;
}

const numbers = [0,1,2,5,10];

const cubedNumbers = map(function (x) {
    return x + x + x;
}, numbers);

//console.log(cubedNumbers);


//2. nested function: 
function addSquares(a,b) {
    function square(x){
        return x * x;
    }

    return square(a) + square(b);
}

//console.log(addSquares(3,4));

//3. storing function object in a constant variable
const square2 = function (x) {
    return x * x;
};

//console.log(square2(3));

//4. factorial function : 
const factorial= function factorial(n){
    return n < 2 ? 1 : factorial(n-1) * n;
};

//console.log(factorial(5));

//5. loop implementation using recursion:
/*

equivalent to the following : 
x = 0;
while(x <= 10){
    console.log(0);
    x++;
}
*/
function loop(x){
    if(x >= 10){
        return;
    }else {
        //console.log(x);
    }
    
    loop(x+1);
}

loop(0);

//6. Stack like behaviour in the following function:

function foo(i){
    if(i < 0) {
        return;
    }

    //console.log(`begin: ${i}`);

    foo(i-1);

    //console.log(`end: ${i}`);
}

foo(3);

//7. Immediately Invoked Function Expressions (IIFE)

//a. Basic IIFE (no return)

console.log("\na. Basic IIFE (no return)");
(function () {
    console.log("This runs immediaely");
    const secret = 42;
})();

//b. IIFE that returns a value

console.log("\nb. IIFE that returns a value");
const value = (function () {
    const a = 10;
    const b = 20;
    return a+b;
}) ();

console.log("IIFE That has returned a value", value);

//c. IIFE used for initialization logic
console.log("\nc. IIFE used for initialization logic");
const config = ( function (){
    const env = "production";

    if(env === "production"){
        return { debug: false, apiUrl : "/api"};
    }

    else{
        return { debug: true, apiUrl: "http://locahost:3000"};
    }
}) ();

//this will cause an error
//config  = {debug : false, apiUrl: "/api"};

//d. Multiple IIFEs (indipendent scopes)

console.log("\nd.Multiple IIFEs (independent scopes)");

(function () {
    console.log("IIFE A");
})();

(function () {
  console.log("IIFE B");
})();

//e. IIFE creating a module-like structure (classic JS)

console.log("\nIIFE creating a module-like structure")
const counter = (function () {
    let count = 0;

    return {
        increment() {
            count++;
        },
        get(){
            return count;
        }
    };
})();

counter.increment();
counter.increment();
console.log(counter.get()); // 2

//f. Arrow-function IIFE (modern syntax)
console.log("f. Arrow-function IIFE (modern syntax)")
const fun = (()=> {
    const x = 5;
    const y = 6;
    return x*y;
})();

console.log(fun);

//8. Functions Scopes and closures
//a. Example : 1
const num1 = 20;
const num2 = 3;
const name = "John";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

console.log(multiply()); // 60

// A nested function example
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2}`;
  }

  return add();
}

console.log(getScore());


//b. Typical example of a closure

/*
const pet = function(name){
    const getName = function () {
        return name;
    };

    return getName;
};

const myPet = pet("Vivi");
console.log(myPet());
 */

//c. A more complex example of closure

const createPet = function (name) {

    let sex;

    const pet = {
        setName(newName){
            name = newName;
        },

        getName() {
            return name;
        },

        getSex() {
            return sex;
        },

        setSex(newSex){
            if(
                typeof newSex === "string" &&
                (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")
            ){
                sex = newSex;
            }
        },
    };

    return pet;
};

const pet = createPet("Vivie");
console.log(pet.getName());

pet.setName("Olivier");
pet.setSex("male");

console.log("The name is set to :",pet.getSex());
console.log("The sex is set to:",pet.getName());

//d. Another Example

console.log("\nApi code return?");
const getCode = (function () {
    const apiCode = '0d03fg3';

    return function () {
        return apiCode;
    };
})();

console.log(getCode());


// 9. Name conflicts
console.log("\nAn example of name conflicts where the output is 20 instead of 10");
function outside(){
    const x = 10;
    function inside(){
        return x * 2;
    }

    return inside;
}

console.log(outside()());
//but if we don't give any parameter in inside() then
//it will work good. Because we havent

//10. Using the arguments object

//arguments is already created when a function
//it works like an array but not an array
console.log("\nUsing arguments in the object");

function myConcat(separator) {
  let result = ""; // initialize list

  // iterate through arguments
  for (let i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}

console.log(myConcat(";", "red", "orange", "blue"));

// 11. Rest parameters

console.log("\nAn example of rest parameters\n");

function multiply(multiplier, ...theArgs ){
    return theArgs.map((x)=> multiplier * x);
}

const arr = multiply(2,1,2,3);
console.log(arr);

// 12. Arrow parameters:

const a = ["apple" , "ball", "cat", "doll", "elephant"];
var a1 = [1,2,3,4,5];

console.log(a.map((s)=>{return s.length}));
console.log(a1.map((num)=>{return num**2}));