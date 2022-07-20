/*
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
Example 2:

Input: root = [1]
Output: [[1]]
Example 3:

Input: root = []
Output: []
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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if (!root) return []
    
    const q = [root]
    const res = []
    
    while(q.length) {
        let len = q.length
        res.push(q.map(node=> node.val))
        
        while(len--){ //keep decrementing till 0
            let node = q.shift()
            if(node.left) q.push(node.left)
            if(node.right) q.push(node.right)
        }
        
    }
    return res
};