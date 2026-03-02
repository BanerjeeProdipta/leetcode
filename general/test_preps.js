// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function (nums, target) {
//   let hashmap = {};
//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];

//     if (hashmap[complement] !== undefined) {
//       return [hashmap[complement], i];
//     }
//     if (hashmap[nums[i]] === undefined) {
//       hashmap[nums[i]] = i;
//     }
//   }
// };

// console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0,1]

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// var isAnagram = function (s, t) {
//   let hashmap = {};

//   for (let i = 0; i < s.length; i++) {
//     hashmap[s[i]] = hashmap[s[i]] === undefined ? 1 : hashmap[s[i]] + 1;
//     hashmap[t[i]] = hashmap[t[i]] === undefined ? -1 : hashmap[t[i]] - 1;
//   }
//   for (let key in hashmap) {
//     console.log('key', hashmap, key, hashmap[key]);
//     if (hashmap[key] !== 0) return false;
//   }

//   return true;
// };

// // Example tests
// console.log(isAnagram('anagram', 'nagaram')); // Expected: true
// console.log(isAnagram('rat', 'car')); // Expected: false

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let set = new Set();
  let left = 0,
    maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

// // Example tests
// console.log(lengthOfLongestSubstring('abcabcbb')); // Expected: 3
// console.log(lengthOfLongestSubstring('bbbbb')); // Expected: 1
console.log(lengthOfLongestSubstring('pwcwkew')); // Expected: 4 cwke

var isPalindrome = function (x = 321) {
  if (x < 0) return false;
  let reverse = 0;
  let original = x;

  while (original > reverse) {
    let remainder = original % 10;
    reverse = reverse * 10 + remainder;
    original = Math.floor(original / 10);
    console.log('reverse', reverse, original);
    console.log(Math.floor(reverse / 10));
  }
  return original === reverse || original === Math.floor(reverse / 10);
};
console.log(isPalindrome());

const defaultSettings = {
  theme: 'light',
  notifications: true,
  language: 'en',
};

const groupSettings = {
  notifications: false,
  language: 'fr',
};

const personalSettings = {
  theme: 'dark',
};

const merged = { ...defaultSettings, ...groupSettings, ...personalSettings };
console.log(merged);

const userRoles = {
  admin: 'alice',
  editor: 'bob',
  viewer: 'carol',
};

let res = Object.entries(userRoles).map(([key, value]) => [value, key]);
res = Object.fromEntries(res);
console.log(res);
