/**
 * my answer
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    
    // find abs biggest left or right 
    let left = 0;
    let right = nums.length - 1;
    let result = [];
    let counter = 0;
    
    while (counter <= nums.length) {
        const squaredLeft = Math.abs(nums[left] * nums[left]);
        const squaredRight = Math.abs(nums[right] * nums[right]);

        if (squaredLeft <= squaredRight ) {
            result = [squaredRight, ...result]
            right--;
        } else  {
            result = [squaredLeft, ...result]
            left++;
        }
        counter++;
    }
    
    return result;


};


// optimized answer

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    let result = new Array(nums.length);
    let position = nums.length - 1;

    while (left <= right) {
        const squaredLeft = nums[left] * nums[left];
        const squaredRight = nums[right] * nums[right];

        if (squaredLeft > squaredRight) {
            result[position] = squaredLeft;
            left++;
        } else {
            result[position] = squaredRight;
            right--;
        }
        position--;
    }

    return result;
};

// Example usage
const nums = [-4, -1, 0, 3, 10];
console.log(sortedSquares(nums)); // Output: [0, 1, 9, 16, 100]
