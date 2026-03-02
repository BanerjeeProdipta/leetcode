function isAnagram(s, t) {
  let hashmap = {};
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    hashmap[s[i]] = (hashmap[s[i]] || 0) + 1;
  }
  for (let i = 0; i < t.length; i++) {
    if (hashmap[t[i]] === 0 || hashmap[t[i]] === undefined) return false;
    hashmap[t[i]] = hashmap[t[i]] - 1;
  }
  return true;
}
let s = 'jar';
let t = 'jam';

console.log(isAnagram(s, t));
