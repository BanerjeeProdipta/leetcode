/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// https://leetcode.com/problems/two-sum

var twoSum = function (nums, target) {
  const hashmap = {};
  for (let i = 0; i < nums.length; i++) {
    const remaining = target - nums[i];
    if (hashmap[remaining] !== undefined) {
      return [hashmap[remaining], i];
    } else hashmap[nums[i]] = i;
  }
};

console.log(19, twoSum([2, 7, 11, 15], 18)); // [0, 1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const remaining = target - nums[i];
    const found = nums.indexOf(remaining);
    console.log(nums.indexOf(remaining));
    if (found !== -1) return [i, found];
  }
};

console.log(twoSum([2, 7, 11, 15], 18)); // [0, 1]
