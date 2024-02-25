// if
// else
// else if
// while
// switch
// ? condtional
// &&
// ||
// identical equal ===, not equal !==

// Global scope
a = 123;
b = "123";

console.log("equal", a != b);

// optional parameters es6
const funcA = (value) => {
  // with in the function
  // if (a !== null) {
  //     console.log("value if ::", a);
  // } else {
  //     console.log("value else :: ", a)
  // }
  switch (value) {
    case "1": // strict type checking
      console.log("case 1");
      break;
    case "2":
      console.log("case 2");
      break;
    default:
      console.log("case default");
      break;
  }
};
funcA("2");

// for (let i = 0; i < 10 ; i ++) {
//     console.log("i:: ", i);
// }

// Higher order function
// reusability
const funcb = (funcA) => {
  funcA();
};

// map // for loop -- higher order function
const array = [1, 2, 3];
// const funcArray = () => {
//     console.log("test")
// }

// const newArray = [];
// array.forEach((value, index) => {
//     console.log(index, value)
//     newArray.push(value * 2)
// })
// console.log(newArray);

// const updated = array.map((value, index) => {
//     console.log(index, value)
//     return value * 2
// })

const updated = array.map((value) => value * 2);
console.log(updated);

const filter = array.filter((value) => value !== 1);
console.log(filter);

// write programs map and filter sum of all the number
const a = [
  {
    value: 1,
  },
  {
    value: 2,
  },
  {
    value: 3,
  },
];
// by using map: output [1, 2, 3]
// by using filter need to get 3rd index: output [3]

// call, apply, bind

// Dom methods
