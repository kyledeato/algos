/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  arr is shown below:
1 2 3
4 5 6
9 8 9 
The left-to-right diagonal 1,5,9= 15. The right to left diagonal 3,5,9= 17. Their absolute difference is |15-17|= 2.

*/
/*
-let left = 0
-let right = 0
-for loop that loops through the whole array
    -get [0] and add to left
    -get [2] and add to right
    -get [4] which is the middle and add to both
    -get [6] and add to right
    -get [8] and add to left

- then get the difference of left and right and make it postive for abs value
*/
function diagonalDifference(arr) {
    // Write your code here
    let left = 0;
    let right = 0;
    
    let counterLeft = 0;
    let counterRight = arr[0][0] -1;

    let array = []

    //loop through arr
    for (let x = 1; x < arr.length; x++){
            left += arr[x][counterLeft];
            right += arr[x][counterRight];
            //console.log("right",arr[x][counterRight -1]);
            counterLeft++;
            counterRight--;
            // console.log(right);
    }
    // console.log(arr[1][1]);
    // console.log(left);
    // console.log(right);
    return Math.abs(left-right)
}
console.log(diagonalDifference([1,2,3,4,5,6,7,8,9]));