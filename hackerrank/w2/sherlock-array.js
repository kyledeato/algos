function balancedSums(arr) {
    let right = arr.reduce( (prev, curr) => prev + curr , 0)
    let left = 0

    for (let nums in arr) {
        right -= arr[nums]
        if (left === right ) {
            return 'YES'
        }
        left += arr[nums]
    }
    return 'NO'
}

console.log(balancedSums([1,2,3,3]));