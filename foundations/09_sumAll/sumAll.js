const sumAll = function(min, max) { 
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";

    const sorted = [min, max].sort((x, y) => x - y);
    min = sorted[0]; // The smaller number
    max = sorted[1]; // The larger number

    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

/* 
We can also use this to create a condition to sort the placeholder values before the loop instead of using the array destructuring syntax.
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
*/


// Do not edit below this line
module.exports = sumAll;
