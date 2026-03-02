// Input: intervals = [[0, 30], [5, 10], [15, 20]]
// Output: 2

// Explanation:
// - At time 5, two meetings are active ([0,30] and [5,10]).
// - Needs at least 2 rooms.

function getMinMeetingRoom(intervals) {
  const startTimes = intervals.map((interval) => interval[0]);
  const endTimes = intervals.map((interval) => interval[1]);

  let room = 1;

  for (let i = 0; i < endTimes.length; i++) {
    if (startTimes[i + 1] > endTimes[i]) {
      room++;
    }
  }
  console.log(room);
}

let intervals = [
  [0, 30],
  [5, 10],
  [15, 20],
];

getMinMeetingRoom(intervals);
