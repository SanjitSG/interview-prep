// Function scope

//callback function

function greet(name) {
  alert(`Namaste ${name} 🙏`);
}

function getName(callback) {
  let name = prompt("Enter your name");
  callback(name);
}

getName(greet);
