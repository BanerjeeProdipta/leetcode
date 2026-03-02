function longestPalindrome(s) {
  let hashmap = {};
  let longest = 0;
  let hasOdd = false;
  for (let i = 0; i < s.length; i++) {
    hashmap[s[i]] = (hashmap[s[i]] || 0) + 1;
  }

  for (let char in hashmap) {
    if (hashmap[char] % 2 === 0) {
      longest += hashmap[char];
    } else {
      longest += hashmap[char] - 1;
      hasOdd = true;
    }
  }
  return hasOdd ? longest + 1 : longest;
}

let s = 'abccccdd';
console.log(longestPalindrome(s));
