/*
You are given the root node of a binary search tree (BST) and a value to insert into the tree. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.

Notice that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.

Input: root = [4,2,7,1,3], val = 5
Output: [4,2,7,1,3,5]
Explanation: Another accepted tree is:

Example 2:

Input: root = [40,20,60,10,30,50,70], val = 25
Output: [40,20,60,10,30,50,70,null,null,25]
Example 3:

Input: root = [4,2,7,1,3,null,null,null,null,null,null], val = 5
Output: [4,2,7,1,3,5]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
// gpt
var insertIntoBST = function(root, val) {
    if (!root) {
        return new TreeNode(val); // Base case: Insert the new node here
    }

    // If the value to insert is less than the current node, go left
    if (val < root.val) {
        root.left = insertIntoBST(root.left, val); // Assign the result back to root.left
    }
    // If the value to insert is greater than the current node, go right
    if (val > root.val) {
        root.right = insertIntoBST(root.right, val); // Assign the result back to root.right
    }

    return root; // Return the updated root
};


//  mine answer
// var insertIntoBST = function(root, val) {
//     const newNode = new TreeNode(val);

//     if (!root) {
//         return new TreeNode(val);
//     }

//     //if current node is less thatn val go left
//     if (root.val > newNode.val) {
//         insertIntoBST(root.left, val)
//         if (!root.left) {
//             root.left = newNode;
//         }
//     }

//     //if current node is greater than val go left
//     if (root.val < newNode.val) {
//         insertIntoBST(root.right, val)
//         if (!root.right) {
//             root.right = newNode;
//         }
//     }

//     return root;
// };