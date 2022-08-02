/*
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
*/

var numIslands = function(grid) {
    let counter = 0
    
    //flood fills entire "1" and converts it to "0"
    const fill = (grid, r , c) => {
        if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length || grid[r][c] === "0") {
          
            //leave fill recursion
            return
        }
        grid[r][c] = "0"
        
         fill(grid, r-1, c)
         fill(grid, r+1, c)
         fill(grid, r, c-1)
         fill(grid, r, c+1)
    }
    
    for(let x = 0; x < grid.length; x++){
        for(let y = 0; y < grid[x].length; y++){
            if (grid[x][y] === "1") {
                counter ++
                fill(grid, x, y)
            }
        }
    }
    return counter
};