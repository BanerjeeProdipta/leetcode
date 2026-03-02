var lengthOfLongestSubstring = function (s) {
  let start = 0;
  let maxLength = 0;
  let hashMap = {};

  if (s.length === 1) return 1;

  for (let i = 0; i < s.length; i++) {
    if (hashMap[s[i]] !== undefined && hashMap[s[i]] >= start) {
      start = hashMap[s[i]] + 1;
    }
    console.log(i, start);
    maxLength = Math.max(maxLength, i - start + 1);
    hashMap[s[i]] = i;
  }
  return maxLength;
};

// let s = 'abcabcbb';
let s = 'au';
// let s = 'tmmzuxt';
// let s = 'aabaab!bb';
console.log(lengthOfLongestSubstring(s));
