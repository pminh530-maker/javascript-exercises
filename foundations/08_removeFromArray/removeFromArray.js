const removeFromArray = function(arr, ...nums) {
  return arr.filter(val => !nums.includes(val))
};


// Do not edit below this line
module.exports = removeFromArray;
