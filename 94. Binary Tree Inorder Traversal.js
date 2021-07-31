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
 * @return {number[]}
 */

let inorderTraversalHelper = (root, inorderArr) => {
    if(!root) {
        return;
    }
    inorderTraversalHelper(root.left, inorderArr);
    inorderArr.push(root.val);
    inorderTraversalHelper(root.right, inorderArr);
}

var inorderTraversal = function(root) {
    let inorder = [];
    inorderTraversalHelper(root, inorder);
    return inorder;
};
