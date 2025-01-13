let I = 1;
let V = 5;
let X = 10;
let L = 50;
let C = 100;
let D = 500;
let M = 1000;

let hashmap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt = function (s) {
  let res = 0;

  for (let i = 0; i < s.length; i++) {
    if (hashmap[s[i]] >= hashmap[s[i + 1]] || s[i + 1] === undefined) {
      res += hashmap[s[i]];
    } else {
      res += hashmap[s[i + 1]] - hashmap[s[i]];
      i++;
    }
  }

  return res;
};

console.log('1: ', romanToInt('III')); // 3
console.log('2 :', romanToInt('LVIII')); // 58
console.log('3 :', romanToInt('MCMXCIV')); // 1994
