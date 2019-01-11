// Pure function
// - Given the input, it will always return the same output
// - There is no side-effects
// - Doesnt change or rely in any values outside that
function add (a, b) {
  return a + b;
}

/* Impure functions */
var a = 3;
function add (b) {
  return a + b;
}
var result;
function add (a, b) {
  result = a + b;
  return result;
}
function add (a, b) {
  return a + b + new Date().getSeconds();
}
/****/

function changeProp (obj) {
  return {
    ...obj,
    name: 'Juh'
  };
  // If it was done this way, it would change the initial object
  // Pure functions DONT change the initial values of objects
  // obj.name = 'Juh';
  // return obj;
}

var startingValue = {
  name: 'Andrew',
  age: 25
}
var res = changeProp(startingValue);
console.log(startingValue);
console.log(res);