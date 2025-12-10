// var isAnagram = function (s, t) {
//   console.log({ s, t });
//   const map = new Map();

//   if (s.length !== t.length) return false;

//   for (let i = 0; i < s.length; i++) {
//     if (map.has(s[i])) {
//       map.set(s[i], map.get(s[i]) + 1);
//     } else map.set(s[i], 1);
//   }

//   for (let i = 0; i < t.length; i++) {
//     if ((map.has(t[i]) && map.get(t[i])) > 0) {
//       map.set(t[i], map.get(t[i]) - 1);
//     } else return false;
//   }
//   return true;
// };

// var groupAnagrams = function (strs) {
//   let grouped = [];

//   for (let i = 0; i < strs.length; i++) {
//     if (strs[i] === '_') continue;

//     let currArr = [strs[i]];

//     for (let j = i + 1; j < strs.length; j++) {
//       if (strs[j] === '_') continue;

//       if (isAnagram(strs[i], strs[j])) {
//         currArr.push(strs[j]);
//         strs[j] = '_'; // mark as used
//       }
//     }

//     grouped.push(currArr);
//     strs[i] = '_'; // mark current as used
//   }

//   return grouped;
// };

var groupAnagrams = function (strs) {
  const map = new Map();

  for (let i = 0; i < strs.length; i++) {
    const key = strs[i].split('').sort().join('');
    if (!map.has(key)) map.set(key, []);

    map.get(chars).push(strs[i]);
  }

  return Array.from(map.values());
};
let strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

console.log(groupAnagrams(strs));
