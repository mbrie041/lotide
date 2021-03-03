const assertEqual = function(actual,expected) {
  const errMsg = `🛑🛑🛑 Assertation Failed:  ${actual} !== ${expected}`;
  const corrMsg = `✅✅✅ Assertation Passed: ${actual} === ${expected}`;

  console.assert(actual !== expected, corrMsg);
  console.assert(actual === expected, errMsg);
};

const countLetters = function(givenString) {
  let ourResult = {};
  let trimString = givenString.replace(/\s/g, '');
 
  for (let letter of trimString) {
    if (!ourResult[letter]) {
      ourResult[letter] = 1;
    } else {
      ourResult[letter] = ourResult[letter] + 1;
    }
  }
  return ourResult;
};
const expectedResults = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
};

const acutalResults = countLetters("lighthouse in the house");

console.log(countLetters("lighthouse in the house"));
console.log(assertEqual(JSON.stringify(acutalResults),JSON.stringify(expectedResults)));
