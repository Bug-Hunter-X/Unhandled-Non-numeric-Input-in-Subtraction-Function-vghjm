# Unhandled Non-numeric Input in Subtraction Function

This repository demonstrates a common JavaScript bug: a function that does not handle non-numeric input values. The `myFunction` subtracts two numbers.  However, if either input is not a number, it returns `NaN` without any error handling. This can lead to unexpected behavior in applications. The solution demonstrates how to handle this issue using type checking and error handling.

## Bug

The `bug.js` file contains the faulty function.  The function correctly subtracts numbers, but it fails silently when given non-numeric inputs, returning `NaN`. 

## Solution

The `bugSolution.js` file provides a solution to this problem by adding input validation. The improved function checks if both inputs are numbers. If not, it throws an error, preventing unexpected `NaN` values and improving the robustness of the code.