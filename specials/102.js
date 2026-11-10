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

var levelOrder = (root) => {
  const res = [];
  const queue = [root];

  while (queue.length > 0) {
    const levelLength = queue.length;
    const levelValues = [];

    for (let i = 0; i < levelLength; i++) {
      const currNode = queue.shift();
      levelValues.push(currNode.val);

      if (currNode.left) queue.push(currNode.left);
      if (currNode.right) queue.push(currNode.right);
    }
    res.push(levelValues);
  }

  console.log(JSON.stringify(res));
};

let root = [3, 9, 20, null, null, 15, 7];
levelOrder(buildTreeFromArray(root));
