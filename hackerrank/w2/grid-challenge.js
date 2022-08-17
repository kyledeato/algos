function gridChallenge(grid) {
    // Write your code here
    const sorted = grid.map((row) => row.split('').sort())
    
    for (let x = 0; x < grid.length; x++) {
        for (let y = 0; y < grid.length-1; y++) {
            if (sorted[y+1][x] < sorted[y][x]){
                return 'NO'
            }
        }
    }
    return 'YES'
}

const grid = ['a','b']
console.log(gridChallenge(grid));

