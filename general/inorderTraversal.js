// Definition of a binary tree node
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// Example inorderTraversal function (empty for now)
var inorderTraversal = function (root) {
  const result = [];

  const traverse = (node) => {
    if (!node) return;
    traverse(node.left); // go left
    result.push(node.val); // visit root
    traverse(node.right); // go right
  };

  traverse(root);
  return result;
};

// Build the tree
const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));

// Test the tree
console.log(inorderTraversal(root));
