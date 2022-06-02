// 283. Move Zeroes
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.
// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:

// Input: nums = [0]
// Output: [0]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/* 
-replace all non zeros in the front
-then make the rest 0s

*/
 var moveZeroes = function(nums) {
    let placeNonZero = 0;

    // moves all non zeros to the front
    for(let x = 0; x < nums.length; x++) {
        if (nums[x] != 0) {
            nums[placeNonZero] = nums[x];
            placeNonZero++;
        }
    }
    // change the rest 0's after moving all non zeros to front
    for (let i = placeNonZero; i < nums.length; i++){
        nums[i] = 0;
    }
    return nums;
};

console.log(moveZeroes([0,1,0,3,12]))