/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let complement = 0;
  const hashmap = new Map();

  for (let i = 0; i < nums.length; i++) {
    complement = target - nums[i];

    if (hashmap.has(complement)) {
      return [hashmap.get(complement), i];
    }
    hashmap.set(nums[i], i);
  }
};
console.log(twoSum([3, 2, 4], 6));
