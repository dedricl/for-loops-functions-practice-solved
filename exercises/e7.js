// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// In case there is no account that has balance > 0 return an empty array
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithLeastPositiveBalance(array) {
  // Your code goes here...
  let arr = [];
  let index = 0;
  let lowestBalance = array[0].balance;
  for (let i = 0; i < array.length; i++) {
    if (array[i].balance < lowestBalance && array[i].balance > 0) {
      lowestBalance = array[i].balance;
      index = i;
    }
  }
  if (lowestBalance < 0) {
    return arr;
  } else {
    arr.push(array[index]);
    return arr;
  }
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
