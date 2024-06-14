// call apply bind

// Q. What is call?

let obj = { name: "Sanjit" };
function sayHello() {
  return "Hello " + this.name;
}

console.log(sayHello.call(obj));
