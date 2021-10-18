// Add numbers in an array

const sum = (arr) => {
    let total = 0;
    arr.forEach((x) => {
        total += x;
    });
    return total;
};

// Remove the 3rd item from an array
const cut3 = (arr) => {
    arr.splice(2, 1);
    return arr;
};

module.exports = { 
    sum, 
    cut3 
}