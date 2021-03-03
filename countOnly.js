const assertEqual = function(actual,expected) {
  const errMsg = `🛑🛑🛑 Assertation Failed:  ${actual} !== ${expected}`;
  const corrMsg = `✅✅✅ Assertation Passed: ${actual} === ${expected}`;

  console.assert(actual !== expected, corrMsg);
  console.assert(actual === expected, errMsg);
};

const countOnly = function(allItems,itemsToCount){
  const results = {};
  for (const item of allItems) {
    // console.log("item>>>" + item);
    // console.log("itemsToCount" + itemsToCount);
    // console.log("allItems" +allItems);
    if (itemsToCount[item]){
      if (results[item]) {
          results[item] +=1;
        } else {
          results[item] = 1;
        }
      }
  } return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });


assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
