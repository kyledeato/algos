function twoNumberSum(array, targetSum) {
    // Write your code here.
    let obj = {}
  
    for (let item of array) {
        const complement = targetSum - item

        if (obj[item]){
            console.log(obj[item]);

        }
        obj[complement] = true
    }
    console.log(obj);
    return "test"
  }
let arr = [2,4,5,8]
let target = 10
console.log(twoNumberSum(arr,target));