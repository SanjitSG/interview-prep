// Currying

function f(a, b) {
  console.log(a, b);
}
f(5, 6);

function f(a) {
  return function (b) {
    return `${a} ${b}`;
  };
}

console.log(f(6)(8));
