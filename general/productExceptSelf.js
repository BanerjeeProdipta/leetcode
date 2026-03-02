function productExceptSelf(nums) {
  let product = 1;
  let res = Array(nums.length).fill(1);

  for (let i = 0; i < nums.length - 1; i++) {
    product = nums[i] * product;
    res[i + 1] = product;
  }
  product = 1;

  for (let i = nums.length - 1; i > 0; i--) {
    product = nums[i] * product;
    res[i - 1] = product * res[i - 1];
  }
  return res;
}
let nums = [1, 2, 4, 6];
// 1  1  2 8
// 48 24 6 1

// 48 24 12 8
// Output: [48,24,12,8]
console.log(productExceptSelf(nums));
