// Write a function to reverse an array in-place.
function reverseArr(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let right = arr[arr.length - 1 - i],
      left = arr[i];

    let temp;

    temp = left;
    left = right;
    right = temp;
    arr[i] = right;
    console.log({ left, right }, arr);
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}

// const arr = [1, 2, 3, 4, 5];
// console.log(reverseArr(arr));

function reverseArr(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    [arr[i], arr[arr.length - 1]] = [arr[arr.length - 1], arr[i]];
  }
  return arr;
}

const arr = [1, 2, 3, 4, 5];
console.log('Final:', reverseArr(arr));
