var longestPalindrome = function (s) {
  let start = 0;
  let maxLength = 0;

  function expand(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const length = right - left + 1;

      if (length > maxLength) {
        maxLength = length;
        start = left;
      }

      left--;
      right++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    expand(i, i); // odd
    expand(i, i + 1); // even
  }
};

// Output: "bab";
console.log(longestPalindrome(s));

let s2 = "cbbd";
// Output: "bb";
console.log(longestPalindrome(s2));
