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

var levelOrder = function (root) {
  const res = [];
  const node = [root];
  console.log(node);

  while (node.length > 0) {
    const currLevel = node.length;
    const levelRootVal = [];

    for (let i = 0; i < currLevel; i++) {
      console.log(node);
      const cNode = node.shift();
      levelRootVal.push(cNode.val);

      if (cNode.left) node.push(cNode.left);
      if (cNode.right) node.push(cNode.right);
    }
    res.push(levelRootVal);
  }
  console.log({ res });
};

// Input array
let rootArray = [3, 9, 20, null, null, 15, 7];
// Output: [[3],[9,20],[15,7]]
// Build tree
let root = buildTreeFromArray(rootArray);

// Run level order
console.log(levelOrder(root));
