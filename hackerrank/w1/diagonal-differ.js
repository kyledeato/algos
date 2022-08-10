/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  arr is shown below:
1 2 3
4 5 6
9 8 9 
The left-to-right diagonal 1,5,9= 15. The right to left diagonal 3,5,9= 17. Their absolute difference is |15-17|= 2.

*/
/*

*/
function diagonalDifference(arr) {
    // Write your code here
    // get length of arr
    let n = arr[0].length
    let left = 0
    let right = 0
    

    for(let x = 0, y = n-1; x< n; x++, y--){
        //adds left and right then each loop goes down and to inner
        left += arr[x][x]
        right += arr[x][y]
    }
    
    let result = left - right
    return Math.abs(result)

}

console.log(diagonalDifference([1,2,3,4,5,6,7,8,9]));