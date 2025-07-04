// EXERCISE 16
// Please, read the exercise-info/flat.md to get the initial data of what is the expected result of this exercise.
// Array example: flatArraysData in /data/data.js
// flatArrays([['d', 'r'], 'z', 'b', ['f', 'y']]) => ['d', 'r', 'z', 'b', 'f', 'y']
// NOTE: You can NOT use the array.flat() method in your code

export function flatArrays(array) {
  // Your code goes here...
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] == "object") {
      for (let j = 0; j < array[i].length; j++) {
        arr.push(array[i][j]);
      }
    } else {
      arr.push(array[i]);
    }
  }
  return arr;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
