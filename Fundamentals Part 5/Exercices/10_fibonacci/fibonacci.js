const fibonacci = function(n) {
if (n === NaN) return "OOPS";
if (n === 0) return 0;
let a = 0;
let b = 1;
for (let i = 1; i < count; i++) {
    const temp = b;
    console.log(temp+ "This is the temporary n");
    b = a + b;
    console.log(b+ "This is reult of the addition");
    a = temp;
    console.log(a + "This is the new temporary");
}
return b;
};



// Do not edit below this line
module.exports = fibonacci;
