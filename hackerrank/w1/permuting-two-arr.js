function twoArrays(k, A, B) {
    // Write your code here
    let size = A.length;
    let arrB = B.sort(function(a,b){
        return a-b
    })
    let arrA = A.sort(function(a,b){
        return b-a
    })

    for (let x = 0; x < size; x++) {
        if (arrA[x] + arrB[x] < k) {
           return "NO"
        } 
    }
    return "YES"
}

let k = 1
let A = [0,1]
let B = [0,2]
console.log(twoArrays(k,A,B));