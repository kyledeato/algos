/*
in the array with the length of k find how many subarrays that are consectively increasing
cannot be the same


return number of highly profitable months

counter = 0
sp = [5,3,5,7,8]
check i^th + k - 1 to see if its increasing
    if it is counter ++
[5,3,5]
[3,5,7]
[5,7,8]

*/


const profitMonths = (arr, k) => {
    let counter = 0
    
    for (let i = 0; i < arr.length; i++) {
        subCounter = 0
        for (let j = i; j < arr.length; j++) {
            if (arr[i] > arr[j]){
                break
            }
            subCounter++
            if (subCounter == k){
                counter++
                break
            }
        }
    }
    return counter
}
let sp = [6,7,5,6,7]
let k = 3
console.log(profitMonths(sp, k));