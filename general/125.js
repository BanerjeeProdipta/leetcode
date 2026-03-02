var isPalindrome = function (s) {
  // lowercase and keep only letters
  const matches = s.toLowerCase().match(/[a-z0-9]/g);
  if (!matches) return true; // empty string is a palindrome

  const cleaned = matches.join('');

  // check palindrome
  const reversed = matches.reverse().join('');
  return cleaned === reversed;
};

let s = '0P';
console.log(isPalindrome(s)); // false

s = 'A man, a plan, a canal: Panama';
console.log(isPalindrome(s)); // true
