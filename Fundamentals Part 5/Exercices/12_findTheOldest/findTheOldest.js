ages = []
const findTheOldest = function(array) {
for (person of array){
    if (person.yearOfDeath){
        ages += person.yearOfDeath - person.yearOfBirth 
    } else{
        ages += new Date().getFullYear() - person.yearOfBirth 
    }
} return max(ages)};

// Do not edit below this line
module.exports = findTheOldest;