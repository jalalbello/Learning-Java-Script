let reversedString = ''
i = 1
const reverseString = function(string) {
for (char of string)
{
    reversedString+= string[string.length - i];
    i ++
}
return reversedString};

// Do not edit below this line
module.exports = reverseString;
