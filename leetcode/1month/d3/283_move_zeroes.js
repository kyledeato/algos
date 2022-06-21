/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]

-move all nonzero numbers to the front
-then switch all the rest to be zero

1. counter = 0
2. loop through the arr
3. if number != 0
4. make nums[counter] = nums[x]
------
after all has been move
5. switch the rest from the number of counter to the end of the arr make it 0
*/
let nums = [0,1,0,3,12]
var moveZeroes = function(nums) {
    let nonZeroCounter = 0;

    for (let x = 0; x < nums.length; x++) {
        if (nums[x] != 0){
            //move non zero numbers to the front
            nums[nonZeroCounter] = nums[x];
            //keep moving forward to arr
            nonZeroCounter++
        }
    }
    
    //make the rest after moving forward 0
    for (let y = nonZeroCounter; y < nums.length; y++){
        nums[y] = 0
    }
    return nums
};

console.log(moveZeroes(nums));