/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums = [1, 2, 3, 4]) {
  let set = new Set();
  for (let num of nums) {
    if (set.has(num)) {
      return true;
    } else set.add(num);
  }

  return false;
};

console.log(containsDuplicate());
