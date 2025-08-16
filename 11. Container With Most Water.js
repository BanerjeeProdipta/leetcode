/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function (height) {
  let leftPointer = 0;
  let rightPointer = height.length - 1;
  let max = 0;

  while (leftPointer !== rightPointer) {
    let min = Math.min(height[leftPointer], height[rightPointer]);
    let width = rightPointer - leftPointer;
    const currArea = min * width;

    if (currArea > max) max = currArea;
    if (min === height[leftPointer]) {
      leftPointer += 1;
    } else rightPointer -= 1;
  }
  return max;
};

// const test1 = [1, 1];
const test2 = [4, 3, 2, 1, 4];
const res = maxArea(test2);

console.log('RES: ', res);
