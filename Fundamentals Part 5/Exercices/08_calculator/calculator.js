const add = function(number1, number2) {
	return number1 + number2
};

const subtract = function(number1, number2) {
	return number1 - number2
};

const sum = function(numberArray, total = 0) {
	for (number of numberArray){
    total += number
  }
  return total
};

const multiply = function(array) {
  return array.length ? array.reduce((accumulator, nextItem) => accumulator * nextItem): 0;
  // * Reduce Syntax
  // * reduce(function(previousValue, currentValue) 
};

const power = function(number1, number2) {
	return number1 ** number2
};

// * Ternary operator syntax
// * condition ? exprIfTrue : exprIfFalse

const factorial = function(n) {
  if (n === 0) return 1;
  let result = 1
  for(let i = n; i > 0; i--){
    result *= i
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
