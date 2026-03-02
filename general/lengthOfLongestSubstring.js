function lengthOfLongestSubstring(s) {
  let map = {};
  let maxLength = 0;
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] !== undefined) {
      start = Math.max(start, map[s[i]] + 1);
    }

    map[s[i]] = i;
    maxLength = Math.max(maxLength, i - start + 1);
  }

  return maxLength;
}

let s = 'dvdf';
let s1 = ' ';
let s2 = 'au';
let s3 = 'bbb';
let s4 = 'pwwwkew';
let s5 = 'cdd';
let s6 = 'abcabcbb';
let s7 = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabcdefghijk';
console.log(s, lengthOfLongestSubstring(s));
console.log(s1, lengthOfLongestSubstring(s1));
console.log(s2, lengthOfLongestSubstring(s2));
console.log(s3, lengthOfLongestSubstring(s3));
console.log(s4, lengthOfLongestSubstring(s4));
console.log(s5, lengthOfLongestSubstring(s5));
console.log(s6, lengthOfLongestSubstring(s6));
console.log(s7, lengthOfLongestSubstring(s7));
