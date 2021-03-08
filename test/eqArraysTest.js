const eqArrays = require('../eqArrays')
const assertEqual = require('../assertEqual');

//TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), true); // => should FAIL
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
