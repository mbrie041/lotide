const assertArraysEqual = function(actual,expected) {
  const errMsg = `🛑🛑🛑 Assertation Failed:  ${actual} !== ${expected}`;
  const corrMsg = `✅✅✅ Assertation Passed: ${actual} === ${expected}`;

  console.assert(JSON.stringify(actual) !== JSON.stringify(expected), corrMsg);
  console.assert(JSON.stringify(actual) === JSON.stringify(expected), errMsg);
};


const letterPositions = function(givenString) {
  let ourResult = {};
  // let trimString = givenString.replace(/\s/g, '');
  //string we're using lighthouse
  //first iteration i is 0, our result is {}, key is l, givenString[0] is L


  for (let i = 0; i < givenString.length; i++) {
    let current = givenString[i];
    if (!ourResult[current]) {
      ourResult[current] = [i];

    } else {
      ourResult[current].push(i);
    }
  }
  return ourResult;
};

console.log(letterPositions("lighthouse labs"));

console.log(assertArraysEqual(letterPositions("hello").e, [1]));