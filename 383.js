var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine) return false;
  let map = new Map();

  for (let i = 0; i < magazine.length; i++) {
    map.set(magazine[i], (map.get(magazine[i]) || 0) + 1);
  }
  console.log(map);

  for (let i = 0; i < ransomNote.length; i++) {
    if (!map.get(ransomNote[i]) > 0) return false;
    map.set(ransomNote[i], (map.get(ransomNote[i]) || 0) - 1);
  }
  console.log(map);

  return true;
};

let ransomNote = 'aa';
let magazine = 'aba';
console.log(canConstruct(ransomNote, magazine));
