function findClosestValueInBst(tree, target) {
    // Write your code here.
    let closest = Infinity
    function traverse(tree, target, closest) {
      
      //base case
      if (tree === null ) return  closest
  
      // finding the closest
      if (Math.abs(tree.value - target) < Math.abs(closest - target)) {
        closest = tree.value
      }
      
      if (tree.value > target) {
        //if current node is bigger than target go left since closes to target is smaller
        return traverse(tree.left, target, closest)
      } else {
        // if current node is less than target go right 
        return traverse(tree.right, target, closest)
      }
    }
      return traverse(tree, target, closest)
  }
  
  // This is the class of the input tree. Do not edit.
  class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Do not edit the line below.
  exports.findClosestValueInBst = findClosestValueInBst;
  