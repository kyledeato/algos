/*
n = string of numbers
k = number of times to concatinate n (n*k)
- base case: if length of x is 1 return the digit
- recurse by adding each number to be n
*/
function superDigit(n, k) {
    if(n.length === 1 && k === 1 ) return parseInt(n);
    
    let total = (n.split('').reduce((a, b) => parseInt(a) + parseInt(b))) * k;
    
    return superDigit(total.toString() , 1);
}

console.log(superDigit('9875',4));