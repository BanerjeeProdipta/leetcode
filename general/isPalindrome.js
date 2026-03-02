function isPalindrome(s) {
  const matches = s.toLowerCase().match(/[a-z0-9]/g);
  if (matches === null || s.length === 1 || matches.length === 1) return true;
  let left = 0;
  let right = matches.length - 1;
  while (left < right) {
    if (matches[left] !== matches[right]) return false;
    left++;
    right--;
  }
  return true;
}
let s = '.,';
let s2 = 'a.';
console.log(isPalindrome(s));
console.log(isPalindrome(s2));
