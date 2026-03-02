/**
 * @param {string} s
 * @return {boolean}
 */

const BRACKET_MAP = {
  '(': ')',
  '[': ']',
  '{': '}',
};

var isValid = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    // Opening bracket → push
    if (BRACKET_MAP[ch]) {
      stack.push(ch);
      console.log(21, stack);
    } else {
      // Closing bracket → check last opening
      const last = stack.pop();
      console.log(25, BRACKET_MAP[last], { last, ch });

      if (BRACKET_MAP[last] !== ch) return false;
    }
  }

  return stack.length === 0;
};

let s = '([]]]';
console.log(isValid(s));
