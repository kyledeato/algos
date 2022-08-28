function isValidSubsequence(array, sequence) {
    // Write your code here.
    
    let j = 0

    for (let i = 0; i < array.length; i++) {
        // console.log("i:", array[i], "j:",sequence[j]);
      if (array[i] === sequence[j]) {
        j++
        console.log("j ", j);
      }
    }
    console.log(j);
    if (j === sequence.length) {
        return true
    } else {
        return false
    }

    
  }

  let arr = [5, 1, 22, 25, 6, -1, 8, 10]
  let seq = [1, 6, -1, 10]
  console.log(isValidSubsequence(arr, seq));