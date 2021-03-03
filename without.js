
const assArraysEq = function(actual,expected) {
  const errMsg = `🛑🛑🛑 Assertation Failed:  ${actual} !== ${expected}`;
  const corrMsg = `✅✅✅ Assertation Passed: ${actual} === ${expected}`;

  console.assert(JSON.stringify(actual) !== JSON.stringify(expected), corrMsg);
  console.assert(JSON.stringify(actual) === JSON.stringify(expected), errMsg);
}; 

const assertEqual = function(actual,expected) {
  const errMsg = `🛑🛑🛑 Assertation Failed:  ${actual} !== ${expected}`;
  const corrMsg = `✅✅✅ Assertation Passed: ${actual} === ${expected}`;

  console.assert(actual !== expected, corrMsg);
  console.assert(actual === expected, errMsg);

};
const eqArrays = function(actual,expected) {
  
  return JSON.stringify(actual) === JSON.stringify(expected);
}; 


const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newArray.push(source[i])
    } 
  } return newArray
}

assArraysEq(without([1, 2, 3], [1]), [1]) // => [2, 3]
assArraysEq(without(["1", "2", "3"], [1, 2, "3"]),["1", "2"]) // => ["1", "2"]