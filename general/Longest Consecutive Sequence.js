function longestConsecutive(nums) {
  let sorted = nums.sort((a, b) => a - b);
  let longest = 0;
  console.log(sorted);
  let currLength = 0;

  for (let i = 0; i < sorted.length; i++) {
    let curr = sorted[i];
    let next = sorted[i + 1];
    // 1,1 || 1,2
    if (curr === next) continue;
    else if (curr + 1 === next) {
      console.log({ curr, next });
      currLength++;
    } else {
      longest = Math.max(currLength + 1, longest);
      console.log({ curr, next, longest, currLength });

      currLength = 0;
    }
  }
  // longest = Math.max(currLength, longest);
  return longest;
}

let nums1 = [2, 20, 4, 10, 3, 4, 5];
let nums2 = [0, 3, 2, 5, 4, 6, 1, 1];
let nums3 = [100, 4, 200, 1, 3, 2];
let nums4 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
let nums5 = [1, 1, 2, 6, 7, 8];
console.log(longestConsecutive(nums5));

console.log(longestConsecutive(nums1));
console.log(longestConsecutive(nums2));
console.log(longestConsecutive(nums3));
