/**
 * @param {string[]} words
 * @return {string[]}
 */
// https://leetcode.com/problems/string-matching-in-an-array/

var stringMatching = function (words) {
  let result = [];

  for (let word of words) {
    console.log(word);
    if (
      words.filter((w) => w.includes(word)).length > 1 &&
      !result.includes(word)
    ) {
      result.push(word);
    }
  }

  return result;
};

stringMatching(['mass', 'as', 'hero', 'superhero']);
