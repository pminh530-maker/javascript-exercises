const leapYears = function(year) {
    if(year % 400 == 0) {
        return true;
    } else if(year % 4 == 0 && year % 100 !== 0) {
        return true;
    } else return false;
};

/* 
This version improves readability by assigning math problems to names.
const leapYears = function (year) {
  const isYearDivisibleByFour = year % 4 === 0;
  const isCentury = year % 100 === 0;
  const isYearDivisibleByFourHundred = year % 400 === 0;

  if (
    isYearDivisibleByFour &&
    (!isCentury || isYearDivisibleByFourHundred)
  ) {
    return true;
  } else {
    return false;
  }
};

module.exports = leapYears;
*/

// Do not edit below this line  
module.exports = leapYears;
