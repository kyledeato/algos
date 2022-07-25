/*
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 

Example 1:


Input: root = [2,1,3]
Output: true
Example 2:


Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.

Base Case
1. if tree is null return true
2. if root <= left || root >= right return false

Recurrence relation:
-infinity and positive inifinity to compare the first top root

*/
var isValidBST = function(root) {
    //min = left, max = right
    function recurse(root, min, max) {
        
        //base case
        if (root === null) return true
        
        if (root.val <= min || root.val >= max) return false
        
        //recurrence relation
        //recurse(1, dont know min yet, 2)           recurse(3,2,dont know max yet)
        return recurse(root.left, min, root.val) && recurse(root.right, root.val, max)
    }
    // the infinity compares the top root
    return recurse(root, -Infinity, Infinity)
};
