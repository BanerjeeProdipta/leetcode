// var threeSum = function (nums) {
//   let keySet = new Set();
//   let res = [];
//   nums.sort((a, b) => a - b);

//   function binarySearch(n, i, j) {
//     let low = 0;
//     let high = nums.length - 1;
//     while (high >= low) {
//       let mid = low + Math.floor((high - low) / 2);
//       if (nums[mid] === n && mid !== i && mid !== j) {
//         return mid;
//       } else if (nums[mid] > n) {
//         high = mid - 1;
//       } else low = mid + 1;
//     }
//     return undefined;
//   }

//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       let complement = 0 - (nums[i] + nums[j]);
//       let match = binarySearch(complement, i, j);

//       if (match !== undefined) {
//         let sorted = [nums[i], nums[j], nums[match]].sort((a, b) => a - b);
//         let key = sorted.join(',');
//         if (!keySet.has(key)) {
//           keySet.add(key);
//           res.push(sorted);
//         }
//       }
//     }
//   }
//   return res;
// };

var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    let left = i + 1;
    let right = nums.length - 1;

    if (i > 0 && nums[i] === nums[i - 1]) continue;

    while (left < right) {
      let sum = nums[left] + nums[right] + num;
      if (sum === 0) {
        console.log({
          i,
          // left,
          // right,
          num,
          lval: nums[left],
          rval: nums[right],
        });
        res.push([num, nums[left], nums[right]]);
        left++;
        right--;
        // while (left < right && nums[left] === nums[left + 1]) left++; // skip duplicates
        // while (left < right && nums[right] === nums[right - 1]) right--; // skip duplicates
      }
      if (sum > 0) {
        right--;
      } else left++;
    }
  }
  for (let resItem of res) console.log(resItem);
  return res;
};
// let nums = [-1, 0, 1, 2, -1, -4];
let nums = [0, 0, 0, 0];
console.log(threeSum(nums));
