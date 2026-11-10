var merge = function (intervals) {
  intervals.sort((a, b) => a - b);
  const res = [];
  let currInterval = intervals[0];

  for (let interval of intervals) {
    console.log(interval);
    if (currInterval[1] > interval[0]) {
      currInterval = [currInterval[0], Math.max(currInterval[1], interval[1])];
    } else {
      res.push(currInterval);
      currInterval = interval;
    }
  }
  res.push(currInterval);
  console.log(res);
};

let intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
// Output: [[1,6],[8,10],[15,18]]
console.log(merge(intervals));
