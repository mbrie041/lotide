const assertEqual = function(actual,expected) {
  const errMsg = `🛑🛑🛑 Assertation Failed:  ${actual} !== ${expected}`;
  const corrMsg = `✅✅✅ Assertation Passed: ${actual} === ${expected}`;

  console.assert(actual !== expected, corrMsg);
  console.assert(actual === expected, errMsg);
};


const findKeyByValue = function(ourObject, ourObjectsValue) {
  for (let ourKey in ourObject) { 
    if (ourObject[ourKey] === ourObjectsValue) {
        return ourKey;
    }
  }
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));
