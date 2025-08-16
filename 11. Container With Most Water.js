/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function (height) {
  let max = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const minHeightBetween = Math.min(height[i], height[j]);
      const currArea = minHeightBetween * (j - i);
      console.log({ i, elm: height[i], minHeightBetween, currArea });

      if (max < currArea) max = currArea;
    }
  }
  return max;
};

const test1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const test2 = [4, 3, 2, 1, 4];
const res = maxArea(test2);

console.log('RES: ', res);
