// hoisted
// https://www.geeksforgeeks.org/javascript-hoisting/
let a; // Global scope
function b () {
    // const a = 3; // block scope
    console.log("value::", a);;
    return a * 3;
} // memeory

a = 1;
console.log(b());

// closure
// https://www.geeksforgeeks.org/closure-in-javascript/
var counter = 1;

function x() {
    var a = "test" 
    // access lexical scope variables

    function y() {
        console.log(a + "---"+ counter++);
    }
    y();
}



var timer = setInterval(() => x(), 5000)
setTimeout(() => clearInterval(timer), 5000)

// return a function sum of two number by using closures

function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2));

function a1(a) {
    function b1(b) {
        return a + b;
    }
    b1(1);
}
console.log(a1(1));

// cuurying concept
// sum(1)(2)(3);