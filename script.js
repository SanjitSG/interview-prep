// var vs let vs const

// 1. scope: Scope refers to accessibility of variables, functions and objects. It determines where in your program you can use a particular piece of data.

// Global Scope
var a = 5;

console.log(a);

{
  //block scope
  let b = 10;
  console.log(b);
}

// shadowing
