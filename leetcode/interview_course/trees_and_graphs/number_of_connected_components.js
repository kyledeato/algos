var maxAreaOfIsland = function(grid) {
    let maxResult = 0;

    function dfs(row, col) {
        // Base case: Check if (row, col) is out of bounds OR if it's water (0)
        if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] === 0) {
            return 0;
        }

        // Mark the current cell as visited (set it to 0 to avoid re-visiting)
        grid[row][col] = 0;

        // Initialize an area counter for the current island (start at 1 for this cell)
        let currArea = 1;

        // Explore all four directions (up, down, left, right)
        currArea += dfs(row + 1, col);  // Down
        currArea += dfs(row - 1, col);  // Up
        currArea += dfs(row, col + 1);  // Right
        currArea += dfs(row, col - 1);  // Left

        return currArea;
    }

    // Loop through every cell in the grid
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 1) {
                maxResult = Math.max(maxResult, dfs(row, col));
            }
        }
    }

    return maxResult;
};
