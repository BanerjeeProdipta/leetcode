var merge = function (intervals) {
  let [currStart, currEnd] = intervals[0];
  const res = [];

  for (let i = 0; i < intervals.length - 1; i++) {
    const [nextStart, nextEnd] = intervals[i + 1];
    console.log({ nextStart, nextEnd });

    // if current overlaps update currEnd
    if (currStart <= nextStart && nextStart <= currEnd) {
      currEnd = Math.max(currEnd, nextEnd);
    }
    // otherwise push curr in res and update curr to next
    else {
      res.push([currStart, currEnd]);
      [currStart, currEnd] = [nextStart, nextEnd];
    }
  }
  res.push([currStart, currEnd]);
  return res;
};

intervals = [
  [1, 3],
  [2, 6],
  [8, 16],
  [15, 18],
];

// starts -> 1,2,8,15
// ends->    3,6,10,18
merge(intervals);
