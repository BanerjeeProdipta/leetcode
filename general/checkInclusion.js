function checkInclusion(s1, s2) {
  let s1Set = new Set(s1);
  console.log({ s1Set });
  let start = Infinity;

  for (let i = 0; i < s2.length; i++) {
    if (s1Set.has(s2[i])) {
      start = i;
      console.log(s2[i], start);

      for (let j = start + 1; j < s1Set.size; j++) {
        if (!s1Set.has(s2[j])) return false;
      }
    }
  }

  return true;
}

let s1 = "abc";
let s2 = "lecabee";
console.log(checkInclusion(s1, s1));

let s3 = "abc";
let s4 = "lecaabee";

console.log("S2", checkInclusion(s3, s4));
