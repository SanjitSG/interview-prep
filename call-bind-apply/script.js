// call apply bind

// Q. What is call?

let obj = { name: "Sanjit" };
function sayHello(age) {
  return "Hello " + this.name + age;
}

console.log(sayHello.call(obj, 28));
