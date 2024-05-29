// Function scope

var x = 74;

function count() {
  console.log(x); // undefined
  var x = 10;
}

count();
