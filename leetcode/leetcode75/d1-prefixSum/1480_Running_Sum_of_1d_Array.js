/*
1480. Running Sum of 1d Array

Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.
Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
Example 3:

Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]

-go through arr
- have it add by x amount
*/
let nums = [1,1,1,1,1]

var runningSum = function(nums) {
    let result =[]
    for (let x=0; x<nums.length; x++){
        let total = nums[x]
        for(let y = 0; y < x; y++){
            total += nums[y]
        }
        result.push(total)
    }
    return result
};

console.log(runningSum(nums));