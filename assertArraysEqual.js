
const assertArraysEqual = function(actual,expected) {
  const errMsg = `🛑🛑🛑 Assertation Failed:  ${actual} !== ${expected}`;
  const corrMsg = `✅✅✅ Assertation Passed: ${actual} === ${expected}`;

  console.assert(JSON.stringify(actual) !== JSON.stringify(expected), corrMsg);
  console.assert(JSON.stringify(actual) === JSON.stringify(expected), errMsg);
};



//TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]) // => should PASS
assertArraysEqual([1, 2, 3], [1, 2, "3"]) // => should not PASS
