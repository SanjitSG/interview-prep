// Closures in Javascript
// Lexical Scope: Lexical means in hierarchy,

//global Scope
function outer() {
  let name = "Sanjit";
  //inner Scope
  function inner() {
    alert(name);
  }
  inner();
}
outer();
