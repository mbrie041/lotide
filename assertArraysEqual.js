
const assertArraysEqual = function(actual,expected) {
  const errMsg = `🛑🛑🛑 Assertation Failed:  ${actual} !== ${expected}`;
  const corrMsg = `✅✅✅ Assertation Passed: ${actual} === ${expected}`;

  console.assert(JSON.stringify(actual) !== JSON.stringify(expected), corrMsg);
  console.assert(JSON.stringify(actual) === JSON.stringify(expected), errMsg);
} 



//TEST CODE
assArraysEq([1, 2, 3], [1, 2, 3]) // => should PASS
assArraysEq([1, 2, 3], [1, 2, "3"]) // => should not PASS
