const eqArrays = function(actual,expected) {
  
  return JSON.stringify(actual) === JSON.stringify(expected);
};

module.exports = eqArrays;