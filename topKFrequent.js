var topKFrequent = function (nums, k) {
  let counterMap = new Map();

  for (let num of nums) {
    counterMap.set(num, (counterMap.get(num) || 0) + 1);
  }
  const sorted = Array.from(counterMap).sort((a, b) => b[1] - a[1]);

  return sorted.slice(0, k).map((arr) => arr[0]);
};

let nums = [1, 1, 2, 2, 2, 3];
let k = 1;

console.log(topKFrequent(nums, k));
