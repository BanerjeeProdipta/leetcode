var canJump = function (nums) {
  let maxLen = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > maxLen) return false;

    maxLen = Math.max(maxLen, nums[i] + i);
    console.log(maxLen, i);
  }
  return true;
};
console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));
