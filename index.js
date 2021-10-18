/*The sample.js file contains four javascript functions to work with arrays.

Create a utilities folder with two separate files and distribute the functions through these 2 files.

Import the functions into the main index and use two different methods for calling those functions.

Then call the functions using arrays of your choice and log the result to the console.*/


const firstUtil = require('utilities/Util1.js');
const secondUtil = require('utilities/Util2.js');

const numArr = [3,4,5,6,7,];
const wordArr = ["I", "Love", "Coding", "Javascript"]

console.log(firstUtil.sum(numArr));

console.log(firstUtil.cut3(wordArr));

console.log(secondUtil.lgNum(numArr));

console.log(secondUtil.concat(numArr,wordArr));

