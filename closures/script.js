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

// function find() {
//   let a = [];
//   for (let i = 0; i < 1000000; i++) {
//     a[i] = i * i;
//   }
//   return function (index) {
//     console.log(a[index]);
//   };
// }

// const closure = find(6);
// console.time("6");
// closure(6); // 40ms to 0.58ms
// console.timeEnd("6");
// console.time("50");
// closure(50); // 37ms to 7ms
// console.timeEnd("50");

// Q4. What will be output

// function a() {
//   for (var i = 0; i < 3; i++) {
//     function inner(i) {
//       setTimeout(function log() {
//         console.log(i);
//       }, i * 1000);
//     }
//     inner(i);
//   }
// }
// a();

//Q5. How would you use a closure to create a private counter?

// function counter() {
//   let _counter = 0;

//   function add(num) {
//     _counter += num;
//   }

//   function retrieve() {
//     return "Counter " + _counter;
//   }

//   return {
//     add,
//     retrieve,
//   };
// }

// const c = counter();
// c.add(5);
// console.log(c.retrieve());

// Q 6. What is a module pattern?

// const Module = (function () {
//   function privateMethod(name) {
//     // do something
//     console.log("private", name);
//   }

//   return {
//     publicMethod: function (name) {
//       privateMethod(name);
//     },
//   };
// })();

// Module.publicMethod("sanjit");

// Q7. Make this run only once

// let view;
// function a() {
//   let called = 0;
//   let view = "Sunrise";

//   return function () {
//     if (!called) {
//       console.log("Nice", view);
//       called++;
//     } else {
//       console.log("Already Called");
//     }
//   };
// }

// const greet = a();
// greet();
// greet();
// greet();

// Q9. Memoize polyfill

function myMemoize(fn, context) {
  const res = {};
  return function (...args) {
    let argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }
    return res[argsCache];
  };
}

const multiply = (num1, num2) => {
  for (let i = 0; i <= 1000000; i++) {}
  return num1 * num2;
};

const memo = myMemoize(multiply);

console.log(memo(9569, 7889));
console.time("First call");
console.timeEnd("First call");

console.time("second call");
console.log(memo(9569, 7889));
console.timeEnd("second call");
