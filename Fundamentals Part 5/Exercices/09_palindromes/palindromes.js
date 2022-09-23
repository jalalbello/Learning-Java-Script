
const palindromes = function (string) {
    let result = string.match(/\w/g)
    if (result === result.reverse()){
        return true
    }
};

// Do not edit below this line
module.exports = palindromes;
