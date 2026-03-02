// Rotate an array to the right by k steps (without using extra space if possible)
function rotateArray(arr, steps) {
  for (let i = 0; i < steps; i++) {
    [[arr[i]] = [[arr[arr.length - steps]]
    console.log(i, arr)
  }
}
console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3)); // [5, 6, 7, 1, 2, 3, 4]
