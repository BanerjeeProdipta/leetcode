function longestUniqueSubstring(s) {
  let longest = 0;
  let left = 0;
  const seen = new Set();

  for (let right = 0; right < s.length; right++) {
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }
    seen.add(s[right]);
    longest = Math.max(longest, right - left + 1);
  }

  return longest;
}

console.log(longestUniqueSubstring("abcabcbb")); // 3
console.log(longestUniqueSubstring("bbbbb")); // 1
console.log(longestUniqueSubstring("pwwkew")); // 3
console.log(longestUniqueSubstring("")); // 0
