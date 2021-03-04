
const assertArraysEqual = function(actual,expected) {
  const errMsg = `🛑🛑🛑 Assertation Failed:  ${actual} !== ${expected}`;
  const corrMsg = `✅✅✅ Assertation Passed: ${actual} === ${expected}`;

  console.assert(JSON.stringify(actual) !== JSON.stringify(expected), corrMsg);
  console.assert(JSON.stringify(actual) === JSON.stringify(expected), errMsg);
};

const takeUntil = function(array, callback) {
  let failedReturnedArray = [];

  for (let item of array) {
    //callback should only be provided one value: the item in the array
    if (callback(item)){
      return failedReturnedArray;
      //takeuntil will keep collecting items from a provided array until the callback provided returns a truthy value
    } else {
      failedReturnedArray.push(item);
    }
  }
  return failedReturnedArray;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


const expectedResults1 = [ 1, 2, 5, 7, 2 ];
const expectedResults2 = [ 'I\'ve', 'been', 'to', 'Hollywood' ];

assertArraysEqual(results1, expectedResults1);
assertArraysEqual(results2, expectedResults2);