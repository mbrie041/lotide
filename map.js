const assertArraysEqual = function(actual,expected) {
  const errMsg = `🛑🛑🛑 Assertation Failed:  ${actual} !== ${expected}`;
  const corrMsg = `✅✅✅ Assertation Passed: ${actual} === ${expected}`;

  console.assert(JSON.stringify(actual) !== JSON.stringify(expected), corrMsg);
  console.assert(JSON.stringify(actual) === JSON.stringify(expected), errMsg);
};

const eqArrays = function(actual,expected) {
  
  return JSON.stringify(actual) === JSON.stringify(expected);
};

//we need an array to map and a callback function
//our map function will return a new array based on the results of the call back function

const words = ["ground", "control", "to", "major", "tom"];

const map = (function(array, callback) {
  const results = [];
  for (let item of array) {
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
    results.push(callback(item));
  }

  return results;
});

const expectedResults1 = ["g", "c", "t", "m", "t"];
const expectedResults2 = ["c", "t", "m", "t"];
const expectedResults3 = [ 'r', 'o', 'o', 'a', 'o' ];
const expectedResults4 = [ 'o', 'n', undefined, 'j', 'm' ];


const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[1]);
const results3 = map(words, word => word[2]);
console.log(results3);

assertArraysEqual(eqArrays(results1, expectedResults1), true);
assertArraysEqual(eqArrays(results1, expectedResults2), false);
assertArraysEqual(eqArrays(results2, expectedResults3), true);
assertArraysEqual(eqArrays(results3, expectedResults4), true);
assertArraysEqual(eqArrays(results2, expectedResults4), true);