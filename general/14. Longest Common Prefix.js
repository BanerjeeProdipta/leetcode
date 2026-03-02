// var longestCommonPrefix = function (strs) {
//   let matchedPrefix = '';

//   for (let i = 0; i < strs[0].length; i++) {
//     if (strs.every((str) => str[i] === strs[0][i])) {
//       matchedPrefix += strs[0][i];
//     } else {
//       break;
//     }
//   }
//   return matchedPrefix;
// };

// var longestCommonPrefix = function (strs) {
//   let str = ' ' + strs.join(' ');

//   let matchedPrefix = '';
//   if (strs.length === 1) return strs[0];

//   for (let i = 1; i < strs[0].length + 1; i++) {
//     let substr = strs[0].substring(0, i);

//     let res = [...str.matchAll(' ' + substr)].length;

//     if (res !== strs.length) {
//       return (matchedPrefix = substr.substring(0, substr.length - 1));
//     } else matchedPrefix = substr;
//   }

//   return matchedPrefix;
// };

console.log(longestCommonPrefix(['aa', 'aa']));
