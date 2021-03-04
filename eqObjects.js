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
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false
