// Objects

const user = {
  name: "Sanjit",
  age: 28,
};

//access user property
console.log(user.name);
console.log(user["name"]);

// modify property
user.name = "Sanjit Stark";
console.log(user.name);

//delete property
console.log("Before", user);
delete user.age;
console.log("After ", user);

// Adding dynamic key value
const property = "firstName";
const val = "SanjitSG";

const newUser = {
  [property]: val,
};
