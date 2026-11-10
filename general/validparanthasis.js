const BRACKET_MAP = {
  "(": ")",
  "[": "]",
  "{": "}",
};

var isValid = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (BRACKET_MAP[char] === undefined) {
      let last = stack.pop();
      console.log({ char, last });

      if (BRACKET_MAP[last] !== char) return false;
    } else {
      stack.push(char);
    }
    return true;
  }
};

let s = "()[}";
console.log(isValid(s));
