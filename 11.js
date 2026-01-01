var maxArea = function (height) {
  let max = 0;
  let right = height.length - 1;
  let left = 0;

  while (left < right) {
    let currArea = Math.min(height[left], height[right]) * (right - left);
    console.log(currArea, height[left], height[right]);
    max = Math.max(currArea, max);
    if (height[left] > height[right]) right--;
    else left++;
  }
  return max;
};
let height = [8, 7, 2, 1];
console.log(maxArea(height));
