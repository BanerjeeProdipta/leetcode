var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let map = {};
  let startIndex = 0;

  for (let i = 0; i < s.length; i++) {
    console.log({ i, si: map[s[i]], startIndex, max }, map);

    if (map[s[i]] >= startIndex) {
      startIndex = map[s[i]] + 1;
    }

    map[s[i]] = i;
    max = Math.max(max, i - startIndex + 1);
  }

  return max;
};

lengthOfLongestSubstring('abcabcbb'); // 3
