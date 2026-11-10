function threeSum(nums) {
  let res = [];
  const set = new Set();
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const currSum = nums[left] + nums[right] + nums[i];

      if (currSum === 0) {
        const sorted = [nums[left], nums[right], nums[i]].sort((a, b) => a - b);
        if (!set.has(JSON.stringify(sorted))) {
          set.add(JSON.stringify(sorted));
          res.push(sorted);
        }
      }
      if (currSum < 0) {
        left++;
      } else right--;
    }
  }
  return res;
}

let nums = [-1, 0, 1, 2, -1, -4];
threeSum(nums);
// Output: [
//   [-1, -1, 2],
//   [-1, 0, 1],
// ];
