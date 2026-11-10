var productExceptSelf = function (nums) {
  let res = Array.from({ length: nums.length }).fill(1); //{ res: [ 1, 1, 1, 1 ] }
  let product = nums[0];

  for (let i = 0; i < nums.length; i++) {
    res[i] = product;
    product *= nums[i];
  }

  // { res: [ 1, 1, 2, 6 ] }
  product = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= product;
    console.log(product);
    product *= nums[i];
  }
  console.log({ res });
};

let nums = [1, 2, 3, 4];
productExceptSelf(nums);
