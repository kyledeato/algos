/* 
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

ex.
arr = [1,3,5,7,9]
min sum is: 1 + 3 + 5 + 7 = 16
max sum is: 3 + 5 + 7 + 9 = 24
res = 16 24
=================================
what i know 
- can only use 4 out of 5 integers

what i need
- need max
- need min
- for max result, I need to remove the smallest integer
- for min result, I need to remove the biggest integer
*/
function miniMaxSum(arr) {
    
    // Write your code here
    let min = arr[0]
    // ... (spread operator) adds the elements of the array instead of the whole array
    let max = Math.max(...arr)
    let minResult = 0;
    let maxResult = 0;

    // finds min or use Math.min(...arr)
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }

    // find minResult
    let minCounter = 0;
    //reason for counter: if all integers are the same only take out one of them
    for (let x = 0; x < arr.length; x++){
        if (arr[x] == max && minCounter == 0) {
            minResult += 0
            minCounter ++
        } else {
            minResult += arr[x]
        }

    } 
    
    // find minResult
    let maxcounter = 0;
    for (let x = 0; x < arr.length; x++){
        if (arr[x] == min && maxcounter == 0) {
            maxResult += 0
            maxcounter ++
            } else {
                maxResult += arr[x]
            }
        }
    
    console.log(minResult , maxResult)
}


console.log(miniMaxSum([1,3,5,7,9]))