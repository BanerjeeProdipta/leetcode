function characterReplacement(s, k) {
  let startIndex = 0;
  let charMap = {};
  let maxLength = 0;
  let maxFreq = 0;

  for (let i = 0; i < s.length; i++) {
    charMap[s[i]] = (charMap[s[i]] || 0) + 1;

    maxFreq = Math.max(maxFreq, charMap[s[i]]);

    // window size - maxFreq > k
    while (i - startIndex + 1 - maxFreq > k) {
      charMap[s[startIndex]]--;
      startIndex++;
    }

    maxLength = Math.max(maxLength, i - startIndex + 1);
  }

  return maxLength;
}

console.log(characterReplacement("BAAABAB", 1)); // Output: 5
