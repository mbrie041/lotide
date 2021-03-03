
const assertEqual = function(actual,expected) {
  const errMsg = `🛑🛑🛑 Assertation Failed:  ${actual} !== ${expected}`;
  const corrMsg = `✅✅✅ Assertation Passed: ${actual} === ${expected}`;

  console.assert(actual !== expected, corrMsg);
  console.assert(actual === expected, errMsg);

};
const eqArrays = function(actual,expected) {
  
  return JSON.stringify(actual) === JSON.stringify(expected);
} 



//TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), true); // => should PASS
