/* 

You are given a 0-indexed array nums of n integers, and an integer k.

The k-radius average for a subarray of nums centered at some index i with the radius k is the average of all elements in nums between the indices i - k and i + k (inclusive). If there are less than k elements before or after the index i, then the k-radius average is -1.

Build and return an array avgs of length n where avgs[i] is the k-radius average for the subarray centered at index i.

The average of x elements is the sum of the x elements divided by x, using integer division. The integer division truncates toward zero, which means losing its fractional part.

For example, the average of four elements 2, 3, 1, and 5 is (2 + 3 + 1 + 5) / 4 = 11 / 4 = 2.75, which truncates to 2.

Rules:
1. if there are less than k elements before or after the index i, then the k-radius average is -1.
2. subarray will be the avg (add all/ length) of the array and truncate it (no decimals)
3. k+1 is the center point then -k left and +k right
4. length of result array should be same as the nums arr.
5. if k is 0 then return the number 

*/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * [7,4,3,9,1,8,5,2,6]
 */

var getAverages = function(nums, k) {
    const n = nums.length;
    const result = new Array(n).fill(-1);  // Initialize result with -1
    const windowSize = 2 * k + 1;  // Total number of elements in subarray

    if (n < windowSize) {
        return result;  // If the array is smaller than window size, return [-1,...]
    }

    let windowSum = 0;

    // Calculate the sum of the first window (i.e., first 2k+1 elements)
    for (let i = 0; i < windowSize; i++) {
        windowSum += nums[i];
    }

    // Traverse the array and calculate k-radius averages
    for (let i = k; i < n - k; i++) {
        result[i] = Math.trunc(windowSum / windowSize);

        // Slide the window: subtract the element going out and add the element coming in
        if (i + k + 1 < n) {
            windowSum += nums[i + k + 1];  // Add the next element in the window
        }
        windowSum -= nums[i - k];  // Subtract the element that's sliding out of the window
    }

    return result;
};

console.log(getAverages([7, 4, 3, 9, 1, 8, 5, 2, 6], 3));


// var getAverages = function(nums, k) {
    
//     if (k = 0) {
//         return nums;
//     }

//     let result = [];
 

//     for (let i = 0; i < nums.length; i++) {
//         let left = Math.min(0, i - k)
//         let right = Math.max(nums.length, i+k)
       

//         // if out of bounds 
//         if (left == 0 || right == nums.length) {
//             result.push(-1);
//         } else {
//             let subArrSum = 0;
//             for (let j = i; j < k; j++){
//                 subArrSum += nums[j];
//             }

//             // avg
//             result.push(Math.trunc(subArrSum/k+1))
//         }

//     }

//     return result
    
// };

// console.log(getAverages([7,4,3,9,1,8,5,2,6],3));
