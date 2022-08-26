function maxTickets(tickets) {
    let n = tickets.length
    let arr = tickets
    let mls = new Array(n).fill(1), max = 0;

    // Initialize mls[] values for all indexes
    for (let i = 0; i < n; i++)
        mls[i] = 1;
      
    // Compute optimized maximum length
    // subsequence values in bottom up manner
    for (let i = 1; i < n; i++)
        for (let j = 0; j < i; j++)
            if (Math.abs(arr[i] - arr[j]) <= 1
                  && mls[i] < mls[j] + 1)
                mls[i] = mls[j] + 1;
      
    // Store maximum of all 'mls' values in 'max'   
    for (let i = 0; i < n; i++)
        if (max < mls[i])
            max = mls[i];
      
    // required maximum length subsequence
    return max;       
}

let n = [4,3,2,12]

console.log(maxTickets(n));