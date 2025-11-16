// function minmax(nums) {
//   let min = Infinity,
//     max = -Infinity;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > max) {
//       max = nums[i];
//     }
//     if (nums[i] < min) {
//       min = nums[i];
//     }
//   }
//   console.log(min, max);
// }
// let nums = [3, 5, 1, 9, 2];
// minmax(nums);

function reverse(str) {
  let arr = str.split(''); // convert string to array
  const halfLength = Math.floor(arr.length / 2);

  for (let i = 0; i < halfLength; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }

  return arr.join(''); // convert array back to string
}

let str = 'hello';
console.log(reverse(str)); // "olleh"
