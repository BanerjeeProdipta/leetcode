var isArraySpecial = function (nums) {
  const isEven = (num) => num % 2 === 0;
  const parity = nums.map(isEven);

  let res = true;

  for (let i = 0; i < nums.length - 1; i++) {
    if (
      (parity(nums[i]) && parity(nums[i + 1])) ||
      (!parity(nums[i]) && !parity(nums[i + 1]))
    ) {
      res = false;
      break;
    }
  }

  console.log(res);
  return res;
};

// let nums = [2, 1, 4];
// let nums = [4, 3, 1, 6];
let nums = [1];
// nums = [2, 1];
isArraySpecial(nums);
