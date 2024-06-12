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

// Q -
function makeUser() {
  return {
    name: "Sanjit",
    ref() {
      return this;
    },
  };
}

let user = makeUser();
console.log(user.ref().name);
