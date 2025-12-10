/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let lastNonZeroIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastNonZeroIndex] = nums[i];
      lastNonZeroIndex++;
    }
  }
  while (lastNonZeroIndex < nums.length) {
    nums[lastNonZeroIndex] = 0;
    lastNonZeroIndex++;
  }
  return nums;
};

moveZeroes([0, 1, 0, 3, 12]);
