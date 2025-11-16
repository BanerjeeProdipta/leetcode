/**
 * @param {string} s
 * @return {string}
 */

var reverseVowels = function (s) {
  const vowels = new Set('AaEeIiOoUu');
  console.log(s, vowels);
  const arr = s.split('');
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    while (left < right && !vowels.has(arr[left])) left++;
    while (left < right && !vowels.has(arr[right])) right--;
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr.join('');
};

console.log(reverseVowels('leetcode'));
