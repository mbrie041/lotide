
const assertEqual = function(actual,expected) {

  const errMsg = `🛑🛑🛑 Assertation Failed:  ${actual} !== ${expected}`;
  const corrMsg = `✅✅✅ Assertation Passed: ${actual} === ${expected}`;

  console.assert(actual !== expected, corrMsg);
  console.assert(actual === expected, errMsg);
};
const words = ["Yo Yo", "Lighthouse", "Labs"];
const tail = function(array) {
  return array.slice(1);
};
//TEST CODE
tail(words);
assertEqual(words.length, 3);