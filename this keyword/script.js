// 'this' keyword

// let calc = {
//   total: 0,
//   add(a) {
//     this.total += a;
//     return this;
//   },
// };

// console.log(calc.add(20));

// --> 'this; inside class constructor points to constructor function variables.

// class User {
//   constructor(a) {
//     this.name = a;
//   }

//   getName() {
//     console.log(this.name);
//   }
// }

// const newUser = new User("Steve");
// newUser.getName();

// Q - what will be th output

// const user = {
//   firstName: "Sanjit",
//   getName() {
//     const firstName = "Tim";
//     return this.firstName;
//   },
// };

// console.log(user.getName()); // "Sanjit" since this points to object inside a method.

// Q - OP
// function makeUser() {
//   return {
//     name: "Sanjit",
//     ref() {
//       return this;
//     },
//   };
// }

// let user = makeUser();
// console.log(user.ref().name);

// Q - OP

// const user = {
//   name: "Sanjit SG",
//   logMsg() {
//     console.log(this.name); // what will be logged?
//   },
// };

// setTimeout(user.logMsg, 1000); // noting will be printed

// Q  

const user = { name : 'Sanjit',
  greet(){
    return `Hello, ${this.name}!`
  },
  farewell:()=>{
return `Goodbye, ${this.name}!`
  }
}

console.log(user.greet()); //Hello, Sanjit!
console.log(user.farewell()) // Goodbye, ! // farewell is an arrow function, this value of the arrow function is always equal to this of the outer scope. Since we don't have any parent function. 'this' will point to window object.
