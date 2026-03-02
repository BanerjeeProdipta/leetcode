function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  for (let i = 0; i < height.length - 1; i++) {
    let area = (right - left) * Math.min(height[left], height[right]);
    max = Math.max(area, max);
    if (height[left] < height[right]) {
      left++;
    } else right--;
  }
  return max;
}
height = [1, 7, 2, 5, 4, 7, 3, 6];
console.log(maxArea(height));
