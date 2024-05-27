// //map filter and reduce

// // reduce
// // const arr = [1, 2, 3, 5];

// // const reducedArr = arr.reduce((acc, curr) => {
// //   return acc + curr;
// // }, 0);

// // console.log(reducedArr);

// // map polyfill

// const arr = [1, 2, 3, 5];
// // arr.map((num, i , arr)=>{

// // })

// Array.prototype.myMap = function (cb) {
//   const temp = [];

//   for (let i = 0; i < this.length; i++) {
//     temp.push(cb(this[i], i, this));
//   }
//   return temp;
// };

// const multiply = arr.myMap((num) => {
//   return num * 2;
// });
// console.log(multiply);

// recursion

const count = (num) => {
  console.log("First: ", num);
  if (num === 0) {
    console.log("---------Base case Reached--------");
    return;
  } else {
    count(num - 1);
    console.log("Second: ", num);
  }
};

count(3);
