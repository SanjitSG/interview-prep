// Objects

// const user = {
//   name: "Sanjit",
//   age: 28,
// };

// //access user property
// console.log(user.name);
// console.log(user["name"]);

// // modify property
// user.name = "Sanjit Stark";
// console.log(user.name);

// //delete property
// console.log("Before", user);
// delete user.age;
// console.log("After ", user);

// Adding dynamic key value
// const property = "firstName";
// const val = "SanjitSG";

// const newUser = {
//   [property]: val,
// };

// console.log(newUser);

/-------------FAQ-----------/;
// 1. what will be the output
// const func = (function (a) {
//   delete a;
//   return a;
// })(5);
// console.log(func); // 5

// 2. create a function multiplyByTwo(obj) that multiplies all the numeric property values of obj by 2.

// const obj = {
//   a: 200,
//   b: 300,
//   title: "My Obj",
// };

// function multiplyByTwo(obj) {
//   for (key in obj) {
//     if (typeof obj[key] === "number") {
//       obj[key] = obj[key] * 2;
//     }
//   }
// }

// multiplyByTwo(obj);
// console.log(obj);

// 3. What will be the output?

// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };

// a[b] = 123;
// a[c] = 456;
// console.log(a); // {[object object]: 456}

// 4. what is JSON.stringify and JSON.parse

// const user = {
//   name: "Sanjit",
//   age: 28,
// };

// const strObj = JSON.stringify(user);

// localStorage.setItem("test", strObj); // test | {"name":"Sanjit","age":28}

// console.log(JSON.parse(localStorage.getItem("test")));

// 5. what's the output?

// console.log([..."Sanjit"]); // ['S', 'a', 'n', 'j', 'i', 't']

// spread operator spreads the characters of the string.

// 6. What will the output?

// const user = {
//   name: "Sanjit",
//   age: 28,
// };
// const admin = {
//   isAdmin: true,
//   ...user,
// };

// console.log(admin); // {isAdmin: true, name: 'Sanjit', age: 28}
// // spread operator copies properties of 'user object' into 'admin object'

// 6. What is the output?

// const calculate = {
//   radius: 10,
//   diameter() {
//     return 2 * this.radius;
//   },
//   perimeter: () => 2 * Math.PI * this.radius,
// };

// console.log(calculate.diameter()); // 20
// console.log(calculate.perimeter()); // NaN, since this points to window object
