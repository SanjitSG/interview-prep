// Function scope

//callback function

// function greet(name) {
//   alert(`Namaste ${name} 🙏`);
// }

// function getName(callback) {
//   let name = prompt("Enter your name");
//   callback(name);
// }

// getName(greet);

// Arrow function
// 1. Syntax
const add = (numOne, NumTwo) => numOne + NumTwo;
add(34, 5);

// 2. implicit 'return' keyword
const sq = (num) => num * num;
sq(2);

// 3. arguments

//normal function
function fn() {
  console.log(arguments);
}
fn(2, 3, 4, 5);

// arrow function
const arrFn = () => {
  console.log(arguments);
};
arrFn(23, 3, 4, 5);
