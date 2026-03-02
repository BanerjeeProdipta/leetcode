function topKFrequent(nums, k) {
  let hashMap = {};
  for (let num of nums) {
    hashMap[num] = (hashMap[num] || 0) + 1;
  }

  return Object.entries(hashMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([key]) => Number(key));
}
let nums = [1, 2, 2, 3, 3, 3];
let k = 2;
console.log(topKFrequent(nums, k));
