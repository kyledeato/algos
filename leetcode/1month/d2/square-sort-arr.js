/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
  //squaring
  for (let x = 0; x < nums.length; x++){
      nums[x] = nums[x] ** 2;
  }
  nums.sort(function(a,b) {
      return a-b
  })
  return nums
};