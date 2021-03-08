const assertArraysEqual = require('../assertArraysEqual')

assertArraysEqual([1, 2, 3], [1, 2, 3]) //these are supposed to Passed
assertArraysEqual([1, 2, 3], [1, 2, "3"]) //these are supposed to failed