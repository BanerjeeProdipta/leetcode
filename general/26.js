var removeDuplicates = function (nums) {
  let pointer = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      pointer++;

      nums[pointer] = nums[i];
    }
  }

  return pointer + 1;
};

let nums = [1, 1, 2];
removeDuplicates(nums);
