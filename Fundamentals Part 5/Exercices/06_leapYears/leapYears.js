const leapYears = function(year) {
    return (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0)
    // this returns if true or false
};

// Do not edit below this line
module.exports = leapYears;
