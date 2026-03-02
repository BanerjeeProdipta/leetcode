/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */

var prefixCount = function (words, pref) {
  const wordStr = ' ' + words.join(' ');
  const result = [...wordStr.matchAll(' ' + pref)];
  console.log(result);
  return result.length;
};

prefixCount(
  ['lewsmb', 'lewrydnve', 'lewqqm', 'lewec', 'lewn', 'lewb', 'lewedb'],
  'lew'
);

var prefixCount = function (words, pref) {
  let counter = 0;
  const prefLength = pref.length;
  for (let i = 0; i < words.length; i++)
    if (words[i].substring(0, prefLength) === pref) {
      counter++;
    }
  return counter;
};
prefixCount(['dog', 'cat', 'app', 'apple', 'dog', 'apple'], 'app'); // 2
