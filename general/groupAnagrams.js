function groupAnagrams(strs) {
  let hashmap = {};

  for (let i = 0; i < strs.length; i++) {
    let sorted = strs[i].split('').sort().join('');
    hashmap[sorted] = [...(hashmap[sorted] ?? []), strs[i]];
  }
  return Object.values(hashmap);
}
let strs = ['act', 'pots', 'tops', 'cat', 'stop', 'hat'];
console.log(groupAnagrams(strs));
