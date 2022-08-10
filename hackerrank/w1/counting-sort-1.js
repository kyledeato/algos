function countingSort(arr) {
    //make new array and fill it with  0's
    let count = new Array(100).fill(0);

    //for each number in array ++ using that index
    //ex. ++ count[1] 3 times since there are 3 1's in arr
    arr.forEach(e => {
        count[e]++;
    })
    return count;
}

console.log(countingSort([1,1,3,2,1]));