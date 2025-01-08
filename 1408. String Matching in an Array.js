/**
 * @param {string[]} words
 * @return {string[]}
 */
// https://leetcode.com/problems/string-matching-in-an-array/

var stringMatching = function (words) {
  let result = [];

  for (let i = 0; i < words.length; i++) {
    const stringWithoutCurrentWord = words.toString().replace(words[i], '');
    if (stringWithoutCurrentWord.includes(words[i])) {
      result.push(words[i]);
    }
  }

  return result;
};

stringMatching(['mass', 'as', 'hero', 'superhero']);
