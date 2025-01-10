var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let map = {};
  let foundAt = 0;

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] !== undefined) {
      foundAt = Math.max(foundAt, map[s[i]] + 1);
    }
    map[s[i]] = i;
    max = Math.max(max, i - foundAt + 1);
  }
  return max;
};

console.log(lengthOfLongestSubstring('abcabcbb')); // 3
