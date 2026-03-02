function twoSum(nums, target) {
  let hashmap = {};

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    console.log(hashmap, nums[i], { complement });

    if (hashmap[complement] !== undefined) {
      return [i, hashmap[complement]];
    }

    hashmap[nums[i]] = i;
  }
}
let nums = [3, 4, 5, 6];
let target = 7;
console.log(twoSum(nums, target));
