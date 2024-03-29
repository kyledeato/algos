/*
There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to 2 * 109.

 

Example 1:


Input: m = 3, n = 7
Output: 28
Example 2:

Input: m = 3, n = 2
Output: 3
Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down
*/
var uniquePaths = function(m, n) {
    /*
    [1,1,1]
    [1,2,3]
    [1,3,6]
    */
    
    //creates a table 
    const table = Array.from({length: m}, ()=> Array(n))
    
    
    //creates all 1'; in top and left
    for(let x = 0; x < table.length; x++) table[x][0] = 1
    for(let x = 0; x < table[0].length; x++) table[0][x] = 1
    
    //adds the top and left of what is missing
    for (let x = 1; x < table.length; x++){
        for(let y = 1 ; y <table[x].length; y++) {
            table[x][y] = table[x-1][y] + table[x][y-1]
        }
    }
    
    //return bottom right
    return table[m-1][n-1]
};