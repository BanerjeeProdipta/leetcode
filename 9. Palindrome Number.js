var isPalindrome = function (x) {
  let reversed = 0;
  let original = x;

  while (x > 0) {
    let digit = x % 10;
    x = parseInt(x / 10);
    reversed = reversed * 10 + digit;
  }

  return original === reversed;
};

console.log(isPalindrome(1221)); // true
