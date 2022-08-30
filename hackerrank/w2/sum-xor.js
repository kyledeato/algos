/**

- x has to be <= n
- n + x = n xor x
- find the number of x's that satisfy n + x = n xor x
=============
- let counter = 0
- loop through until n
- if n + x = n xor x counter++

 */
function sumXor(n) {
    // Write your code here
    let counter = 0

    for(let x = 0; x < n; x++) {
        if (n+x === x^n) {
            counter++
            console.log("n+x:",n+x,"x^n",x^n);
        }
       
    }
    return counter
}

console.log(sumXor(10));