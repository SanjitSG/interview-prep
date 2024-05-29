// Function scope
function mul(a, x, y, ...numbers) {
  console.log(x, y, numbers);
}

arr = [1, 3, 4, 5, 6, 7, 10];
mul(...arr);
