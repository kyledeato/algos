function birthday(s, d, m) {
    // Write your code here
    let counter = 0
    let sum = 0
    
    for (let x = 0; x < s.length; x++) {
        for (let y = x; y <= x + m - 1; y++) {
            sum += s[y]
        }
        if (sum === d){
            counter++
        }
        sum = 0
    }
    return counter
}

let s = [2,2,1,3,2]
let d = 4
let m = 2

console.log(birthday(s,d,m));