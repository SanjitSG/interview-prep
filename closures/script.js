// Closures in Javascript
// Lexical Scope: Lexical means in hierarchy,

// Q1. What will be printed?

// let count = 0;
// (function printCount() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count);
//   }
//   console.log(count);
// })();

// Q2. write a function that would allow you to do this

// function createBase(num) {
//   return function (innerNum) {
//     console.log(innerNum + num);
//   };
// }

// let addSix = createBase(6);
// addSix(10); //return 16
// addSix(21); //return 27

// Q3. Time optimization

function find() {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }
  return function (index) {
    console.log(a[index]);
  };
}

const closure = find(6);
console.time("6");
closure(6); // 40ms to 0.58ms
console.timeEnd("6");
console.time("50");
closure(50); // 37ms to 7ms
console.timeEnd("50");
