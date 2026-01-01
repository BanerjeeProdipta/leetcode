var compress = function (chars) {
  const charMap = new Map();
  let res = '';

  for (let i = 0; i < chars.length - 1; i++) {
    charMap.set(chars[i], (charMap.get(chars[i]) || 0) + 1);
  }

  charMap.forEach((value, key) => {
    console.log(key, value);
    res += key;
    if (value > 1) res += value;
  });

  return res;
};

let chars = ['a', 'a', 'b', 'b', 'c', 'c', 'c'];
console.log(compress(chars));
