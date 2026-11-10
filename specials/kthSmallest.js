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

function kthSmallest(root, k) {
  let stack = [];
  let current = root;

  while (current) {
    // going all the way down on the left
    while (current) {
      stack.push(current);
      current = current.left;
    }

    current = stack.pop();
    k--;
    if (k === 0) return current.val;
    current = current.right;
  }
  console.log(stack);
}

let root = [3, 1, 4, null, 2];
let k = 1;

console.log(kthSmallest(buildTreeFromArray(root), k));
