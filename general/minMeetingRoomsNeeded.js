export default function minMeetingRoomsNeeded(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const starts = [];
  const ends = [];

  for (const [start, end] of intervals) {
    starts.push(start);
    ends.push(end);
  }
  ends.sort((a, b) => a - b);

  let rooms = 0;
  let endPointer = 0;

  for (let start of starts) {
    if (start < ends[endPointer]) rooms++;
    else endPointer++;
  }
  return rooms;
  // let meetingEnds = [sortByStart[0][1]];

  // for (let i = 1; i < sortByStart.length; i++) {
  //   let start = sortByStart[i][0];

  //   for (let j = 0; j < meetingEnds.length; j++) {
  //     let end = meetingEnds[j];
  //     if (start < end) {
  //       meetingEnds.push(sortByStart[i][1]);
  //       i++;
  //     }
  //   }
  // }
  // return meetingEnds.length;
}
// let intervals = [
//   [1, 5],
//   [2, 6],
//   [2, 6],
//   [2, 6],
//   [8, 9],
// ];

let intervals = [
  [1, 5],
  [2, 11],
  [8, 9],
];
console.log(minMeetingRoomsNeeded(intervals));
