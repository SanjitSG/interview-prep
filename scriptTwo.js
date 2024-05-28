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

// filter polyfill

Array.prototype.myFilter = function (callBack) {
  const temp = [];

  for (let i = 0; i < this.length; i++) {
    if (callBack(this[i], i, this)) temp.push(this[i]);
  }

  return temp;
};

const arr = [1, 2, 5, 6, 7];
const result = arr.myFilter((num) => {
  return num > 5;
});
console.log(result);
