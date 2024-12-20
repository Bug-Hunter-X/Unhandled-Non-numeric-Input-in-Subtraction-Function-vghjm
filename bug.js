function myFunction(a, b) {
  return a - b;
}

console.log(myFunction(5, 2)); // Output: 3
console.log(myFunction(2, 5)); // Output: -3

//The bug is that it doesn't handle non-numeric values
console.log(myFunction("5", 2)); // Output: NaN
console.log(myFunction(2, "5")); // Output: NaN
console.log(myFunction("hello", 2)); //Output: NaN