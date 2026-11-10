var productExceptSelf = function (nums) {
  let res = [1];
  let product = 1;

  // left pass
  for (let i = 0; i < nums.length - 1; i++) {
    product = product * nums[i];
    res.push(product);
  }

  // right pass
  product = 1;
  for (let i = nums.length; i > 0; i--) {
    product = product * nums[i] || 1;
    res[i - 1] *= product;
  }
  return res;
};

let nums = [1, 2, 3, 4];
// Output: [24,12,8,6]
console.log(productExceptSelf(nums));
