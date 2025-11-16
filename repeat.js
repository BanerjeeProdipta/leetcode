// Find the first non-repeating character in a string.
let s = 'loveleetcode'; // 2
// s = "leetcode"

function repeating(s) {
  const map = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    map[char] = (map[char] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === 1) {
      console.log(map[s[i]]);
      return s[i];
    }
  }
}
repeating(s);
console.log(repeating(s));
