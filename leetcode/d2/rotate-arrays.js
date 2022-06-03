/*
Given an array, rotate the array to the right by k steps, where k is non-negative.

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

- need two pointers
- need 2 temp variable
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



==================
1. put value of p1 to temp
2. 
*/
let nums = [1,2,3,4,5,6,7]
let k = 3


function rotate(nums, k) {
    if (k>=nums.length){
        k = k % nums.length
    }
    if (k===0) {
        return nums
    }
    nums.unshift(...nums.slice(-k))
    nums.splice(-k)
    return nums
}

console.log(rotate(nums,k))