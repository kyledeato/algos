/*
Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

 

Example 1:

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
Example 2:

Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
 

Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.
0 <= k <= nums.length


*/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 
 * The solution is pretty intuitive. We keep expanding the window by moving the right pointer. When the window has reached the limit of 0's allowed, we contract (if possible) and save the longest window till now.


 */
var longestOnes = function(nums, k) {
    let numsOfZeroes = 0;
    let current = 0;
    let max = 0;
    let P1 = 0;
    let P2 = 0;

    while (P2 < nums.length){
        // adding consecutive subbaray
        current++;

        if (nums[P2] == 0) {
            numsOfZeroes++;
        }

        // numsOfZeroes exceed k we must subtract -1 and move p1 forward
        while (numsOfZeroes > k ) {
            if (nums[P1] == 0) {
                numsOfZeroes--;
            }
            current--;
            P1++;
        }
        P2++;
        max = Math.max(max, current);
    }

    return max;
};