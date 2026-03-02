function hasDuplicate(nums) {
  let numSet = new Set();
  // return numSet.size === nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (numSet.has(nums[i])) return true;

    numSet.add(nums[i]);
  }
  return false;
}
let nums = [1, 2, 3, 1];
console.log(hasDuplicate(nums));
