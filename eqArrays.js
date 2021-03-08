const eqArrays = function(arr1,arr2) {
  
  return JSON.stringify(arr1) === JSON.stringify(arr2);
};

module.exports = eqArrays;

// console.log(eqArrays([1, 2, 3], [1, 2, "3"])); // => should FAIL
// console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => should PASS