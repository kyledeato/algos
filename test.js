function removeIslands(matrix) {
  // Write your code here.
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === 0 || j === 0 || i === matrix.length[i] - 1 || j === matrix.length[i] -1) {
          if (matrix[i][j] === 1) {
            
            removeBorderIslands(i, j, matrix)
          }
      } 
    }
  }
  return matrix
}

function removeBorderIslands(r, c, matrix) {
  if (r < 0 || c < 0  || r > matrix.length || c > matrix.length|| matrix[r][c] === 0) {
    return
  }
  console.log(r,c)
  matrix[r][c] = 2
  removeBorderIslands(r+1, c, matrix)
  removeBorderIslands(r-1, c, matrix)
  removeBorderIslands(r, c+1, matrix)
  removeBorderIslands(r, c-1, matrix)
  
}

const arr = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0]
  ]
console.log(removeIslands(arr));