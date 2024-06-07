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

// 4. what is JSON.stringfy and JSON.parse
