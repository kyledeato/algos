//bubble sort

//====== SELECTION SORT ============
/* 
  https://visualgo.net/en/sorting
    
  Selection sort works by iterating through the list, finding the minimum
  value, and moving it to the beginning of the list. Then, ignoring the first
  position, which is now sorted, iterate through the list again to find the
  next minimum value and move it to index 1. This continues until all values
  are sorted.
  Unstable sort.
  
  Time Complexity
    - Best: O(n^2) quadratic.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic.
  Space: O(1) constant.
  Selection sort is one of the slower sorts.
  - ideal for: pagination, where page 1 displays 10 records for example,
      you run selection sort for 10 iterations only to display the first 10
      sorted items.
*/


// /**
//  * Sorts given array in-place.
//  * Best: O(n^2) quadratic.
//  * Average: O(n^2) quadratic.
//  * Worst: O(n^2) quadratic.
//  * @param {Array<number>} nums
//  * @returns {Array<number>} The given array after being sorted.
//  */
//  function selectionSort(nums) {
//     const len = nums.length;
//     let selectedIdx = 0;
//     let idxOfCurrMin = 0;
  
//     while (selectedIdx < len) {
//       for (let i = selectedIdx; i < len; i++) {
//         if (nums[i] < nums[idxOfCurrMin]) {
//           idxOfCurrMin = i;
//         }
//       }
  
//       if (nums[selectedIdx] !== nums[idxOfCurrMin]) {
//         // Swap.
//         [nums[selectedIdx], nums[idxOfCurrMin]] = [
//           nums[idxOfCurrMin],
//           nums[selectedIdx],
//         ];
//       }
//       selectedIdx += 1;
//       // reset idxOfCurrMin to the next selected index we are going to work with to find the next min
//       idxOfCurrMin = selectedIdx;
//     }
//     return nums;
//   }
// console.log(selectionSort(numsRandomOrder));

//====== INSERTION SORT ===============
// const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
// const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function insertionSort(nums) {
//   let arr = [nums[0]];
//   for(let i = 1; i < nums.length; i++) {
//     // add to new arr
//     arr.push(nums[i]);
 
//     for(let j = arr.length-1; j > 0; j--) {
//       // check
//       if(arr[j] < arr[j-1]) {
//         // swap
//         let tempt = arr[j];
//         arr[j] = arr[j-1]
//         arr[j-1] = tempt
//       }
//     }
//   }
//   return arr;
// }

//========= MERGE SORTED ARR ==============

// const sortedA3 = [2, 3, 4, 7];
// const sortedB3 = [5];
// const expectedMerge3 = [2, 3, 3, 4, 5, 7];

// const sortedA4 = [1, 2, 4, 5, 6, 9];
// const sortedB4 = [3, 7, 8, 10];
// const expectedMerge4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Efficiently merges two already sorted arrays into a new sorted array.
 * Do not mutate the given arrays.
 * - Time: O(?).
 * - Space: O(?).
//  * @param {Array<number>} left
//  * @param {Array<number>} right
 * @returns {Array<number>} A new sorted array containing all the elements of
 *    both given halves.
 */
/*
what we know
-create new arr for result +
-loop through left arr (can use while loop) +
-loop through right arr +
-compare indexes between the two arrays
-if left index is smaller than right index move left index forward vice versa
-push smallest number into new arr
- *edge case* if index of an array is undefined push all values in the other arr
- *edge case* if nothing in both arr return nothing

let arr =[]
let i=0
let j=0
while (i < left.length &&  j < right.length)

  //left indx is less than right indx
if (left[i] <= right[j]) {
  // push left[i]
  arr.push(left[i])
  i++
} else {
  //push right[i]
  arr.push(right[i])
  i++
}

*/
// function merge(left, right) {

//   let arr =[]
//   let i=0
//   let j=0
//   while (i < left.length &&  j < right.length)
  
//   // if(left[i] === undefined){
//   //   arr.push(right[j])
//   //   j++
//   // }
//   //   if(right[j] === undefined){
//   //   arr.push(left[i])
//   //   i++
//   // }
//     //left indx is less than right indx
//   if (left[i] <= right[j]) {
//     // push left[i]
//     arr.push(left[i])
//     i++
//   } else {
//     //push right[j]
//     arr.push(right[j])
//     j++
//   }
//     while (i < left.length){
//       arr.push(left[i])
//       i++
//     } 
//       while (j < right.length){
//       arr.push(right[j])
//       j++
//     } 
//     console.log(arr)
//   }
//   merge(sortedA4, sortedB4)

//====== QUICK SORT ===============
/* 
what we need 
- pivot
- 
*/

function quickSort(nums){
  if (nums.length <=1) {
    return nums
  }
  //finding middle pivot
  let pivot = Math.floor(nums.length/2)
  let lessThan = []
  let equalTo = []
  let greaterThan = []
  //loop nums to check if less or greater than pivot to push in arr
  for (let i = 0; i<nums.length; i++) {
    if (nums[i] < nums[pivot]) {
      //less than move push to arr
      lessThan.push(nums[i])
    } else if (nums[i] > nums[pivot]) {
      //more than move push to arr
      greaterThan.push(nums[i])
    } else {
      equalTo.push(nums[i])
    }
  }
 
  let newArr = []
  // concat all the arrays starting for less than to middle to greater than && RECURSE
  return newArr.concat(quickSort(lessThan), equalTo, quickSort(greaterThan))
}
console.log(quickSort(nums2))

