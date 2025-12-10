/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let jumps = 0;
  let currentEnd = 0;
  let farthest = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    console.log({ farthest, currentEnd, i, num: nums[i] });

    if (i === currentEnd) {
      jumps++;
      console.log(16, { farthest, currentEnd, i, num: nums[i] });

      currentEnd = farthest;
      console.log(18, { farthest, currentEnd, i, num: nums[i] });
    }
  }

  return jumps;
};

let nums = [2, 1, 0, 0, 4];
console.log(jump(nums)); // Output: 2
