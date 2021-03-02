
const assertEqual = function(actual,expected) {

  console.log(head);
  const errMsg = `🛑🛑🛑 Assertation Failed:  ${actual} !== ${expected}`;
  const corrMsg = `✅✅✅ Assertation Passed: ${actual} === ${expected}`;

  console.assert(actual !== expected, corrMsg);
  console.assert(actual === expected, errMsg);
};

const head = function (array){
  return array[0];
}
//TEST CODE
assertEqual(head([]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
