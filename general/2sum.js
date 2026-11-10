var twoSum = function (nums, target) {
  let nummap = {};

  for (let i = 0; i < nums.length; i++) {
    const remaining = target - nums[i];

    if (nummap[remaining] !== undefined) {
      return [nummap[remaining], i];
    } else nummap[nums[i]] = i;
  }
};

let nums = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(nums, target));
