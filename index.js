console.log("Hello world");
// es5
var a = false;
var b = "sheetal"
var c = ['test'] // array
var d = {}
var e = null // which type
var f = undefined
// console.log("type::", typeof d);

// ===============

// es6
// let and const

// const a1 = 1; // Right way
// a1 = 2; // TypeError

// console.log(a1);

// const a2; // SyntaxError
// a2 = 2;

// console.log(a2);

let b1 = 1;
b1 = 2;

// let b1 = 2; // already declared
// console.log(b1);


//https://www.geeksforgeeks.org/difference-between-function-declaration-and-function-expression-in-javascript/
//function expression
const func1 = function func() { // function statement or declaration
    console.log(b1);
}

func1();

func(); // function execution

// ananymous func
var funct2 = function () {

}

// https://www.w3schools.com/js/js_arrow_function.asp
//arrow function
const a = () => {
    console.log("test");

};

// ===============

