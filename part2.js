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
function x() {
    var a = "test" 
    // access lexical scope variables
    function y() {
        console.log(a);
    }
    y();
}

x();