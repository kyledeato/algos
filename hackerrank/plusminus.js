
function plusMinus(arr) {
    // Write your code here
    //counters 
    let positive = 0;
    let negative = 0;
    let zero = 0;
    let length = arr.length;
    
    //loop through array
    for (let x = 0; x < length; x++) {
        if (arr[x] >= 1 ){
            positive++;
        } else if (arr[x] <= -1) {
            negative++;
        } else if (arr[x] == 0) {
            zero++;
        }
    }
    let positiveResult = (positive/length).toFixed(6);
    let negativeResult = (negative/length).toFixed(6);
    let zeroResult = (zero/length).toFixed(6);
    console.log(positiveResult)
    console.log(negativeResult)
    console.log(zeroResult)
}


console.log(plusMinus([1,1,0,-1,-1]))


