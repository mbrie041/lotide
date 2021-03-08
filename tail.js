const words = ["Yo Yo", "Lighthouse", "Labs"]

const tail = function(arr1) {
  return arr1[arr1.length - 1];
};


module.exports = tail;

console.log(tail(words));
// assertEqual(words.length, 3);