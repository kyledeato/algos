/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 
 * 
 * what we know
 * 1. the window is strictly 4 length
 * 2. 
 * 
 * 
 */
var findMaxAverage = function(nums, k) {
    let maxAvg = 0;
    let lastPointer = k;
    
    for (let i = 0; i < k; i++) {
        maxAvg += nums[i];
    }
    
   for (let j = 0; lastPointer < nums.length; j++) {
       maxAvg = Math.max(maxAvg, maxAvg - nums[j] + nums[lastPointer])
       lastPointer++;
   }
    
    return maxAvg / k;
    
};