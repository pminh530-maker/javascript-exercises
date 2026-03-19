const repeatString = function(string, num) {
    if (num < 0) {return "ERROR"};
    let result = ""; //This empty variable needs to be declared OUTSIDE and BEFORE the loop. Otherwise, the result gets reset every time the loop runs.
    for (i = 0; i < num; i++) { 
        result += string;
    }
    return result;
};

/*
Another way to complete this exercise using array methods

const repeatString = function(string, num) {
  if (num < 0) return "ERROR";
  
  let parts = [];
  for (let i = 0; i < num; i++) {
    parts.push(string);
  }
  
  return parts.join("");
};
 */

// Do not edit below this line
module.exports = repeatString;
