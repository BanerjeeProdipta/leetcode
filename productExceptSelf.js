function productExceptSelf(nums) {
  const n = nums.length;
  let res = Array(n).fill(1);

  let leftProduct = 1;
  let rightProduct = 1;

  // Left pass
  for (let i = 0; i < n; i++) {
    res[i] = leftProduct;
    leftProduct *= nums[i];
  }

  // Right pass
  for (let i = n - 1; i >= 0; i--) {
    res[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return res;
}

// Example
console.log(productExceptSelf([1, 2, 3])); // [6, 3, 2]
