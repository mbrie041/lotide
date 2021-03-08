const head = require('../head');
const assertEqual = require('../assertEqual');

assertEqual(head([]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");