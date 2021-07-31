// Given node in Binary Search tree, write the implementation for Put , Contains and InOrder methods.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// Put
let insertIntoBST = function (root, val) {
    if (root === null) {
        let now = new TreeNode(val, null, null);
        return now;
    }
    if (root.val >= val) {
        root.left = insertIntoBST(root.left, val);
    } else {
        root.right = insertIntoBST(root.right, val);
    }

    return root;
};

// Contains
var searchBST = function (root, val) {
    if (root === null) {
        return null;
    } else if (root.val === val) {
        return root;
    } else if (root.val > val) {
        return searchBST(root.left, val);
    } else {
        return searchBST(root.right, val);
    }
};

// Inorder
let inorderTraversal = (root) => {
    if (!root) {
        return;
    }
    inorderTraversal(root.left);
    console.log(root.val);
    inorderTraversal(root.right);
}