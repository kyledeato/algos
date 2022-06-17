/*
Given an array, rotate the array to the right by k steps, where k is non-negative.

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

- need two pointers
- need  temp variable
1. have both pointers pointing at [0]
2. move pointer1 k times
3. save value of pointer1 to temp variable
4. have pointer2 value = pointer1 index 
----
5. move pointer1 k times
6. move pointer2 to pointer1 and have it = value of pointer1
7. change pointer1 to value of temp
6. change temp to value of pointer2 
----
-if pointer is out of array
-get the position + k then subtract it by array length and-1
*/
var rotate = function(nums, k) {
    //2 pointers and temp
    let pointer1 = nums[0]
    let pointer2 = nums[0]
    let temp

    //loop through arr
    for (let x = 0; x < nums.length; x++){
        //move pointer1 l times
        pointer1 = nums[x + k] 
        temp = pointer1
        pointer2 = pointer1
    }
};