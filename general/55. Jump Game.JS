var canJump = function (nums) {
  let reachable = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > reachable) return false; // if current index is not reachable
    reachable = Math.max(reachable, i + nums[i]);
  }
  return true;
};

// let res2 = canJump(testTwo);
// console.log(res2);

let testOne = [1, 0, 1, 0];
let testTwo = [2, 3, 1, 1, 4];

// let res = canJump(testFive);
// console.log(res);

let res = canJump(testOne);
console.log(res);
// let res2 = canJump(testTwo);
// console.log(res2);
