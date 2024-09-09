/**
 * @param {number[]} nums
 * @return {number}
 * 
 * Input: nums = [-3,2,-3,4,2]
Output: 5
 * 







 */


var minStartValue = function(nums) {
    let counter = 1;
    let valid = true; 
    while (true) {
        let sum = counter;
        let valid = true; // reset every iteration
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];
            if (sum < 1) {
                valid = false;
                break;
            }
        }
        if (valid) {
            return counter;
        }
        counter++;
    }
    
    
};

console.log(minStartValue([-3,2,-3,4,2]));
