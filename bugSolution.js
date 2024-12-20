function myFunction(a, b) {
  //Check if both inputs are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  return a - b;
}

console.log(myFunction(5, 2)); // Output: 3
console.log(myFunction(2, 5)); // Output: -3

//This will throw an error now
//console.log(myFunction("5", 2));
//console.log(myFunction(2, "5"));
//console.log(myFunction("hello", 2)); 