function maxMin(k, arr) {
    // Write your code here
    let arrSorted = arr.sort((a,b) => {
        return a-b
    })
    let min = arrSorted[arrSorted.length-1]
    let p1 = 0
    let p2 = k - 1

    while (p2 < arrSorted.length) {
        min = Math.min(min, arrSorted[p2] - arrSorted[p1])
        p1++
        p2++
    }
    return min
}

console.log(maxMin(3, [10,100,300,200,1000,20,30]));
