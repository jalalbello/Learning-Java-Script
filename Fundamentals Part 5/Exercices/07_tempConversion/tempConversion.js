const ftoc = function(temp) {
return Math.round(((temp - 32) * 5/9) * 10) / 10
}
// * .toFixed(1) makes it have a one decimal ending but also adds a one decimal ending on whole numbers
// * Math.round(NUMBER * 10) rounds it to one decimal, does not if number is whole
const ctof = function(temp) {
return Math.round(((temp * 9/5)+ 32) * 10) / 10
};

// ! should have wrapped division in parentheses

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
