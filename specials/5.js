var longestPalindrome = function (s) {
  let res = "";
  let maxLength = 0;
  let start = 0;

  const expand = (l, r) => {
    console.log("Expand start:", { l, r });

    while (l >= 0 && r < s.length && s[l] === s[r]) {
      console.log("Matching:", s[l], s[r], " -> expand");
      l--;
      r++;
    }

    const length = r - l - 1;
    console.log("Expand end:", { l, r, length });
    console.log("----------------------");

    return length;
  };

  for (let i = 0; i < s.length; i++) {
    console.log("CENTER INDEX:", i);

    let odd = expand(i, i);
    let even = expand(i, i + 1);

    let len = Math.max(odd, even);

    console.log({ odd, even, len });

    if (len > maxLength) {
      maxLength = len;
      start = i - Math.floor((len - 1) / 2);

      console.log("New longest palindrome found");
      console.log({ start, maxLength });
    }

    console.log("=================================");
  }

  res = s.slice(start, start + maxLength);

  console.log("FINAL:", { start, maxLength, res });

  return res;
};

console.log(longestPalindrome("babad"));
