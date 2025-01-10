var longestCommonPrefix = function (strs) {
  let matchedPrefix = '';

  for (let i = 0; i < strs[0].length; i++) {
    if (strs.every((str) => str[i] === strs[0][i])) {
      matchedPrefix += strs[0][i];
    } else {
      break;
    }
  }
  return matchedPrefix;
};

console.log(longestCommonPrefix([''])); // 'fl'
