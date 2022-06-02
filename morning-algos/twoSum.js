// Asked in "Python interview with a LinkedIn engineer: Matching pairs": https://youtu.be/wBXZD436JAg

/*
  Given an array of integers, return indices of the two numbers such that they add up to a specific target.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  Bonus: Make it O(n) time
*/

const nums1 = [2, 11, 7, 15];
const targetSum1 = 9;
// expected1 = [0, 2];
// Explanation: nums[0] + nums[2] = 2 + 7 = 9. Return order doesn't matter.

const nums2 = [10, 3, 2, 5, 4, -1];
const targetSum2 = 6;
// expected2 = [2, 4];

const nums3 = [3, 8, 4, 1, 9, 0, -2];
const targetSum3 = 6;
// expected3 = [1, 6];

/**
 * Finds the indexes of the nums that add up to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered nums.
 * @param {number} targetSum
 * @returns {Array<number>} The two indexes of the numbers in the given nums
 *    that add up to the targetSum.
 */
function twoSum(nums, targetSum) {
  let result = [];
  //loop through 
  for (let i = 0; i < nums.length; i++) {
    for(let k = 0; k < nums.length; k++) {
      // check if index are the same then skip
      if(i == k) continue;
      // else compare if === target
      else if (nums[i] + nums[k] === targetSum) {
        //then push both index
        result.push(i, k)
        return result
      }
    }
  }
}
console.log(twoSum(nums1, targetSum1))
console.log(twoSum(nums2, targetSum2))
console.log(twoSum(nums3, targetSum3))
// 1. take in an array of numbers and a targetSum number  
// 2. initialize a sum variable starting at 0 
//  - if array is empty, return 0 
// 3. initialize an empty array variable that is returning the indices of the numbers that sum up to the targetSum 
// 4.  nested for loop both starting at 0
// 5. if i == j skip
// 6.compare i and j if = targetsum
// 7. if it does push both index ito result arr
// 
//
//
// From a technical interview with an AWS engineer: https://youtu.be/t0OQAD5gjd8

/* 
  Given an unsorted non-empty array of integers and int k, return the k most frequent elements (in any order)
  You can assume there is always a valid solution
  These example inputs are sorted for readability, but the input is NOT guaranteed to be sorted and the output does NOT need to be in any specific order
  Hard Bonus: make it O(n) time
*/

const nums4 = [1, 1, 1, 2, 2, 3];
const k1 = 2;
// expected1 = [1, 2];
// Explanation: return the two most frequent elements, 1 and 2 are the two most frequent elements

const nums5 = [0, 0, 0, 2, 2, 3];
const k2 = 1;
// expected2 = [0];
// Explanation: k being 1 means return the single most frequent element

const nums6 = [1, 1, 2, 2, 3, 3];
const k3 = 3;
// expected3 = [1, 2, 3];
/* 
  Explanation: 3 is the only value that would be passed in for k because it is the only value for k that has
  a valid solution. Since 1, 2, and 3, all occur 3 times, they are all the most frequent ints, so there is no
  1 most frequent int, or 2 most frequent int, but there are 3 most frequent ints. 
*/

/**
 * Returns the k most frequently occurring numbers from the given unordered
 * nums.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered.
 * @param {number} k Represents the amount of numbers that should be returned.
 * @returns {Array<number>} The k most frequently occurring numbers.
 */
function kMostFrequent(nums, k) {}