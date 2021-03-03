const assertEqual = function(actual,expected) {
  const errMsg = `🛑🛑🛑 Assertation Failed:  ${actual} !== ${expected}`;
  const corrMsg = `✅✅✅ Assertation Passed: ${actual} === ${expected}`;

  console.assert(actual !== expected, corrMsg);
  console.assert(actual === expected, errMsg);

};

const eqArrays = function(actual,expected) {
  
  return JSON.stringify(actual) === JSON.stringify(expected);
} 



// //TEST CODE
// assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), true); // => should PASS
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

const assArraysEq = function(actual,expected) {
  const errMsg = `🛑🛑🛑 Assertation Failed:  ${actual} !== ${expected}`;
  const corrMsg = `✅✅✅ Assertation Passed: ${actual} === ${expected}`;

  console.assert(JSON.stringify(actual) !== JSON.stringify(expected), corrMsg);
  console.assert(JSON.stringify(actual) === JSON.stringify(expected), errMsg);
} 



// // //TEST CODE
// assArraysEq([1, 2, 3], [1, 2, 3]) // => should PASS
// assArraysEq([1, 2, 3], [1, 2, "3"]) // => should not PASS


const middle = function(passedArray) {
  //array to store our new array
  let newArray = [];
  //iterate through the array with for
  if (passedArray.length <= 2) {// =< 2 
    //check to see if array has only one or two elements
      //if so return []
    return newArray;
  } else if (passedArray.length % 2 === 0) {
      //check to see if array has an even number of elements
        //arraylength divided by 2 and arraylength divided by 2 -1 = middle? ex 4/2 = 2 & 1 [0,1,2,3] ex: 6/2 = 3 & 2 [0,1,2,3,4,5]
      newArray.push(passedArray[((passedArray.length/2) - 1)]);
      newArray.push(passedArray[(passedArray.length/2)]);
    } else if (passedArray.length % 2 === 1) {
        //check to see if array has an odd number of elements
          //arraylength divided by 2 -.5 = middle? ex: 5/2 = 2.5 -5 = 2 [0,1,2,3,4] ex:7/2 = 3.5 -0.5 = 3 [0,1,2,3,4,5,6]  
      newArray.push(passedArray[((passedArray.length/2) - .5)]);
    } else {
      console.log("Please input a valid array");
      //everything else returns a "please submit an array"
    }
  
   return newArray;
};
console.log(middle([1, 2, 3, 4]))
console.log(assArraysEq(middle([1, 2 ,3 ,4]),[2,3])) 

//What do we have?
  //Array function that runs our array through
  //console.log(middle([array]))
//What do we need?
  //Return an array with only the middle element(s) of the provided array
  //For arrays with one or two elements, retuns an empty array
  //Arrays containing an odd number of elements, an array containing a single element will be returned
  //Arrays containing an even number of elements, an array containing a two elements will be returned
//How do we get there?