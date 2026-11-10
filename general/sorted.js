function what(s, k) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let vCount = 0;

  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) {
      vCount++;
    }
  }

  let maxCount = vCount;
  for (let i = k; i < s.length; i++) {
    if (vowels.has(s[i])) {
      vCount++;
    }
    if (vowels.has(s[i - k])) vCount--;

    maxCount = Math.max(vCount, maxCount);
  }

  console.log(vowels, vCount, maxCount);
}
s = "abeiiidef";
k = 3;
Output = 3;
what(s, k);
