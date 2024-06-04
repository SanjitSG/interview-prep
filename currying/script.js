// Currying
// example
// function f(a, b) {
//   console.log(a, b);
// }
// f(5, 6);

// function f(a) {
//   return function (b) {
//     return `${a} ${b}`;
//   };
// }

// console.log(f(6)(8));

// Q1 sum(2)(6)(1)

// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// console.log(sum(2)(6)(1));

// Q2  Solve
// evaluate("sum")(4)(2) => 6
// evaluate("multiply")(4)(2) => 8
// evaluate("divide")(4)(2) => 2
// evaluate("subtract")(4)(2) => 3

// function evaluate(operation) {
//   return function (a) {
//     return function (b) {
//       if (operation === "sum") return a + b;
//       else if (operation === "multiply") return a * b;
//       else if (operation === "divide") return a / b;
//       else if (operation === "subtract") return a - b;
//       else return "invalid operation";
//     };
//   };
// }

// console.log(evaluate("multiply")(4)(2));
// // useCase of curry
// // initialize mul with evaluate('multiply') with once, we can reuse 'mul' again and again.

// const mul = evaluate("multiply");
// console.log(mul(3)(4));

// Q3 - infinite currying -> sum(1)(3)(5)...(n)

// function sum(a) {
//   return function (b) {
//     if (b) return sum(a + b);
//     return a;
//   };
// }

// console.log(sum(1)(2)(2)());

// Q4 -currying vs partial application

// function sum(a) {
//   return function (b, c) {
//     return a + b + c;
//   };
// }
// console.log(sum(3)(5, 4));

// Q5 - real world application of currying -> DOM manipulation

// function updateElementText(id) {
//   return function (content) {
//     document.querySelector("#" + id).textContent = content;
//   };
// }

// const updateHeader = updateElementText("header");
// updateHeader("Bon jour");

// Q6 - curry() implementation -> a function that transforms a normal function into a carried function.

function curry(func) {
  return function curriedFunc(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        console.log(args, next);
        return curriedFunc(...args, ...next);
      };
    }
  };
}

const sum = (a, b, c, d) => a + b + c + d;

const totalSum = curry(sum);

console.log(totalSum(1)(3)(5)(4));
