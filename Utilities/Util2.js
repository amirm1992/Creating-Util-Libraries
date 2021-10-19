// Concatenate two arrays

const concat = (arr1, arr2) => {
    return [...arr1, ...arr2];
};

// Find the largest number in an array
const lgNum = (arr) => {
    let largest = 0;
    arr.forEach((x) => {
        if (x > largest) {
            largest = x;
        }
    });
    return largest;
};

module.exports = {
    concat,
    lgNum
};