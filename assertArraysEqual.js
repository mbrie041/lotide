const eqArrays = require('./eqArrays');
const assertArraysEqual = function(actual,expected) {
  if (eqArrays(actual,expected)) {
    console.log("✅✅✅ Assertation Passed:", actual, "equals", expected)
  } else {
    console.log("🛑🛑🛑 Assertation Failed:", actual, "does not equal", expected)
  }
};

module.exports = assertArraysEqual;

// //TEST CODE
// assertArraysEqual([1, 2, 3], [1, 2, 3]) // => should PASS
// assertArraysEqual([1, 2, 3], [1, 2, "3"]) // => should not PASS
