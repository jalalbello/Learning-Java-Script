const sumAll = function(minNum, maxNum) 
{ // return error for non int(strings, arrays)
  if (!Number.isInteger(minNum) || !Number.isInteger(maxNum)) {return "ERROR"};
 // return error for non positive
  if (minNum < 0 || maxNum < 0) return "ERROR";
  if (minNum > maxNum){
      const tempMax = minNum
      minNum = maxNum
      maxNum = tempMax}
  let sum = 0
  for (let i = minNum; i <= maxNum ; i++){
      sum += i}
  return sum
}

module.exports = sumAll;