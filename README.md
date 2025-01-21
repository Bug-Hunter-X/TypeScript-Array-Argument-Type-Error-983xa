# TypeScript Array Argument Type Error

This example demonstrates a common TypeScript error:  passing an array to a function expecting a single string.

## The Bug

The `greeter` function expects a single string argument. However, the `user` variable is an array of strings. This mismatch causes a type error.

## The Solution

The solution involves modifying the `greeter` function to handle arrays or processing the array elements individually to pass to the function.

## How to Reproduce

1.  Save the code in `bug.ts`.
2.  Compile the code using the TypeScript compiler (tsc bug.ts).
3. Observe the compiler error.