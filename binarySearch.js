// Given a sorted array, implement binary search. What is its time complexity?
// Consider an array arr[] = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91}, and the target = 23.

function getTarget(arr, target) {
  const middlePoint = Math.floor(arr.length / 2);
  const firstHalf = arr.slice(0, middlePoint);
  const lastHalf = arr.slice(middlePoint, arr.length);

  if (arr[middlePoint] === target) {
    console.log('FOUND TARGET', arr[middlePoint]);
    return middlePoint;
  }

  console.log(13);

  if (arr[middlePoint] > target) {
    return getTarget(firstHalf, target);
  } else {
    return getTarget(lastHalf, target);
  }
}

const arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91, 101];
const target = 72;
console.log('RES :', getTarget(arr, target));
