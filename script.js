// // var vs let vs const

// // 1. scope: Scope refers to accessibility of variables, functions and objects. It determines where in your program you can use a particular piece of data.

// // Global Scope
// var a = 5;

// console.log(a);

// {
//   //block scope
//   let b = 10;
//   console.log(b);
// }

// // 2. shadowing - illegal shadowing

// // 3. Declaration - re-declaration

// var a = 5;
// var a = 10;

// let a = 10;
// // let a = 12;   // not allowed

// // 4. initialization

// let a;
// // const b;  // not allowed

// const b = 12;

// 5. Hoisting
console.log(value);
var value = 23;
