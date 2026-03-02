var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (map.has(char)) {
      const charCount = map.get(char);
      map.set(char, charCount + 1);
    } else map.set(char, 1);
  }

  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    const charCount = map.get(char);
    console.log(i, char, charCount);
    if (map.has(char) && charCount > 0) {
      map.set(char, charCount - 1);
    } else return false;
  }

  return true;
};

let s = 'anagram';
let t = 'nagaram';

console.log(isAnagram(s, t));
