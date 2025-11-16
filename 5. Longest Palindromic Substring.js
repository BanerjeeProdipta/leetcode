function longestPalindrome(s) {
  if (s.length < 2) return s;

  let start = 0,
    maxLen = 1;

  // Helper function to expand from the center
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      console.log(s[left], s[right], right - left + 1, {
        left,
        right,
        start,
        maxLen,
      });

      if (right - left + 1 > maxLen) {
        start = left;
        maxLen = right - left + 1;
      }
      left--;
      right++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    // Odd-length palindrome
    expandAroundCenter(i, i);
    // Even-length palindrome
    expandAroundCenter(i, i + 1);
  }

  return s.substring(start, start + maxLen);
}

// Example usage:
console.log(longestPalindrome('bacad')); // "bab" or "aba"
console.log(longestPalindrome('cbbd')); // "bb"
