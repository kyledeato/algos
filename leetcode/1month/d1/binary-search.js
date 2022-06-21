/*
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
 */

function search(nums, target) {
    let [left, right] = [0, nums.length-1];
    
    while (left <= right) {
        let mid = Math.floor((left+right)/2)
        if (nums[mid] === target){
            return mid
        } 
        if (target < nums[mid]){
            right = mid - 1;
        } else {
            left = mid +1
        }
    }
    return -1
};

console.log(search([-1,0,3,5,9,12],2))