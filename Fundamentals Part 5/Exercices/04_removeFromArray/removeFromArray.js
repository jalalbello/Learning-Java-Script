const removeFromArray = function(firstArray, ...toRemove) {
    //  Spread Operator (Shallow copy)
    // As the memory will point to original array and modify original array if this method not used
    let modifiedArray = [...firstArray];

    for (i = 0; i < firstArray.length; i++) {
        if (modifiedArray.includes(toRemove[i])) {
            modifiedArray.splice(modifiedArray.indexOf(toRemove[i]), 1)
        }    
    }
    return modifiedArray;
}

// Do not edit below this line
module.exports = removeFromArray;
