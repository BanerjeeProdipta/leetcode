var lengthOfLongestSubstring = function (s) {
  let longest = 0;
  let leftIndex = 0;
  const charSet = new Set();

  for (let i = 0; i < s.length; i++) {
    while (charSet.has(s[i])) {
      charSet.delete(s[leftIndex]);
      leftIndex++;
      console.log({ i, leftIndex, char: s[i] });
    }
    charSet.add(s[i]);
    longest = Math.max(longest, i - leftIndex + 1);
    // console.log({ i, leftIndex, i, longest });
  }
  console.log("RESULT: ", s, longest);
  return longest;
};

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
