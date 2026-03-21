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
We can also create a condition to sort the placeholder values.
This creates a temporary place for min to stay so that min and max do not become the same value.

  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }

A solution for big numbers (using the Gauss formula)

let numberOfTerms = (max - min) + 1;
let sum = ((min + max) * numberOfTerms) / 2;

*/


// Do not edit below this line
module.exports = sumAll;
