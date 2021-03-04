const eqArrays = function(actual, expected) {

  return JSON.stringify(actual) === JSON.stringify(expected);
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let ourkeys in object1) {
      if (Array.isArray(object1[ourkeys])) {
        if (!eqArrays(object1[ourkeys], object2[ourkeys])) {
          return false;
        }
      } else {
        if (object1[ourkeys] !== object2[ourkeys]) {
          return false;

        }
      }
    }
  } return true;
};

const givenObject1 = { c: "1", d: ["2", 3] };
const givenObject2 = { d: ["2", 3], c: "1" };
const givenObject3 = { c: "1", d: ["2", 3, 4] }

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const errMsg = `🛑🛑🛑 Assertation Failed:  ${inspect(actual)} !== ${inspect(expected)}`;
  const corrMsg = `✅✅✅ Assertation Passed: ${inspect(actual)} === ${inspect(expected)}`;

  console.assert(!eqObjects(actual,expected), corrMsg);
  console.assert(eqObjects(actual,expected), errMsg);
};

console.log(assertObjectsEqual(givenObject1,givenObject3));
console.log(assertObjectsEqual(givenObject1,givenObject2));