/*
n = size of arr to create
q = number of queries
*/
function dynamicArray(n, queries) {
    let results = [];
    let lastAnswer = 0;
    
    // make an array that contains n number of array
    const arr = new Array(n);
    for(let i=0; i<arr.length; i++) {
        arr[i] = new Array();
    }
    
    queries.forEach( q => {
        let [qType, x , y] = q;
        
        let idx = (x ^ lastAnswer) % n;
        
        if(qType === 1) { 
            arr[idx].push(y);
        } else {
            lastAnswer = arr[idx][y % arr[idx].length];
            
            results.push(lastAnswer);
        }
    });
    
    return results;
}

