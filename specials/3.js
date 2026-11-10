function lengthOfLongestSubstring(s) {
  let left = 0;
  let maxLength = 0;
  let seen = new Set();

  for (let right = 0; right < s.length; right++) {
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }

    seen.add(s[right]);

    let windowLength = right - left + 1;
    maxLength = Math.max(maxLength, windowLength);
  }

  console.log(maxLength);
  return maxLength;
}

let s1 = "abcabcbb";
let s2 = "bbbbb";
let s3 = "pwwkew";
let s4 = "dvdf";
let s5 = "abba";

lengthOfLongestSubstring(s1);
lengthOfLongestSubstring(s2);
lengthOfLongestSubstring(s3);
lengthOfLongestSubstring(s4);
lengthOfLongestSubstring(s5);
