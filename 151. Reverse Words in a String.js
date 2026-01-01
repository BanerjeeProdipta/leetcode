var reverseWords = function (s) {
  return s
    .split(' ')
    .filter((splits) => splits !== '')
    .reverse()
    .join(' ');
};

let s = 'a good   example.  test';
console.log(reverseWords(s));
