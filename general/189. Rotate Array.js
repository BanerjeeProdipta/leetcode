var rotate = function (nums, k) {
  let n = nums.length;
  k = k % n;
  const reverse = (start, end) => {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  };

  reverse(0, n - 1);
  reverse(0, k - 1);
  reverse(k, n - 1);

  return nums;
};

let nums = [-1];
// 7 6 5 4 3 2 1
// [5,6,7,1,2,3,4]

let k = 3;
console.log(rotate(nums, k));
