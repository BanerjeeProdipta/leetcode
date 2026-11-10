function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function buildTreeFromArray(arr) {
  if (!arr.length) return null;

  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;

  while (i < arr.length) {
    const current = queue.shift();

    if (arr[i] !== null) {
      current.left = new TreeNode(arr[i]);
      queue.push(current.left);
    }
    i++;

    if (i < arr.length && arr[i] !== null) {
      current.right = new TreeNode(arr[i]);
      queue.push(current.right);
    }
    i++;
  }

  return root;
}

var isValidBST = function (root) {
  function isValid(node, max, min) {
    if (!node) return true;
    if (node.val >= max || node.val <= min) {
      return false;
    }

    console.log(node, max, min);
    return (
      isValid(node.left, node.val, min) && isValid(node.right, max, node.val)
    );
  }
  return isValid(root, Infinity, -Infinity);
};

let root = [5, 1, 4, null, null, 3, 6];
console.log(isValidBST(buildTreeFromArray(root)));
