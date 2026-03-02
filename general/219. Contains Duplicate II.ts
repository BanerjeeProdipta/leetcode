/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function () {
  let set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true;
    }
    set.add(nums[i]);

    if (set.size > k) {
      set.delete(nums[i - k]);
    }
  }

  return false;
};

// Example:
let nums = [1, 0, 1, 1],
  k = 1;
console.log(containsNearbyDuplicate(nums, k)); // true
