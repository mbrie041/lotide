const assertEqual = function(actual,expected) {
  const errMsg = `🛑🛑🛑 Assertation Failed:  ${actual} !== ${expected}`;
  const corrMsg = `✅✅✅ Assertation Passed: ${actual} === ${expected}`;

  console.assert(actual !== expected, corrMsg);
  console.assert(actual === expected, errMsg);
};

//TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1);
assertEqual("Tangg","Tangg");
assertEqual(1,2);