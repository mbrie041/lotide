const assertEqual = function(actual, expected) {
  const errMsg = `🛑🛑🛑 Assertation Failed:  ${actual} !== ${expected}`;
  const corrMsg = `✅✅✅ Assertation Passed: ${actual} === ${expected}`;

  console.assert(actual !== expected, corrMsg);
  console.assert(actual === expected, errMsg);
};



//findkey takes in an object and a callbback
const findKey = function(ourObject, ourFunction) {
  //it should scan the object
  for (let key in ourObject) {
    //return the first key for which the callback returns a truthy value.
    if (ourFunction(ourObject[key])) {
      return key;
    }
    //If no key is found, the it should return undefined.
  } return undefined;
};
const results = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2);


console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2)); // => "noma"

assertEqual(results,"noma");