var trap = function (height) {
  let leftPointer = 0;
  let rightPointer = height.length - 1;
  let maxLeft = height[leftPointer];
  let maxRight = height[rightPointer];
  let res = 0;

  while (leftPointer < rightPointer) {
    console.log({
      // leftPointer,
      leftH: height[leftPointer],
      // rightPointer,
      // rightH: height[rightPointer],
      maxLeft,
      // maxRight,
      res,
    });
    if (height[leftPointer] > height[rightPointer]) {
      rightPointer--;
      maxRight = Math.max(height[rightPointer], maxRight);
      res += Math.max(maxRight - height[rightPointer], 0);
    } else {
      leftPointer++;
      maxLeft = Math.max(height[leftPointer], maxLeft);
      res += Math.max(maxLeft - height[leftPointer], 0);
    }
  }
  return res;
};
let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

console.log(trap(height));
