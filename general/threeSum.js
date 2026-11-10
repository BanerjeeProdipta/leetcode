var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[left] + nums[right] + nums[i];

      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]]);
        console.log(sum, { i, left, right }, [
          nums[i],
          nums[left],
          nums[right],
        ]);

        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  console.log({ res });
};

// let nums = [-1, 0, 1, 2, -1, -1, -4];
// Output: [[-1,-1,2],[-1,0,1]]
let nums = [-2, 0, 0, 2, 2];
threeSum(nums);
