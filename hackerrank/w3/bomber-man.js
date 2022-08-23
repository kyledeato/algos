/*
n = number of seconds to simulate
grid = array of strings that reps the grid

each bomb will detonate exactly after 3 seconds
    - after denotation it will be destroyed and the 4 neighboring cells up, down, left, right  


1. bomber man plants bomb in some cells, initial state
2. after one second bomberman does nothing
3. after another second, bombs are all planted in all cells with no bombs (whole grid is filled with bombs and no bombs detonate)
4. after one more second any bomb planted 3 second ago will detonate
5. step 3 and 4 will repeat indefinetly till n


SOLUTION: find how will the grid looks like after n seconds


******* DNF ******
*/

function bomberMan(n, grid) {
    // Write your code here

    if (n == 1) {
        return grid
    }

    if (n % 2 == 0) {
        var arr = Array.from(Array(2), () => new Array(4));
        arr[0][0] = 'foo';
        console.info(arr);
    } 
    //bomb fill 4 neighboring cells
    const denotation = (grid, row, col) => {
        if (row < 0 || col < 0 || grid[row][col] === ".") {
            return
        }
        grid[row][col] = "."
    }

}
let grid = ['.2.', '...','...']

console.log(bomberMan(2,grid));