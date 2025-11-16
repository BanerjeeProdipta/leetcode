/* you have a set of non-overlapping intervals 
[(a1, b1), (a2, b2), … (an, bn)] 
and a second set of intervals 
[(c1, d1), (c2, d2), … (cm, dm)].
Where m >> n ( >> is much greater than)
An interval (ci, di) is contained within an interval (aj, bj) if aj <= ci < di <= bj.

For the each of the values (ci, di), find the corresponding containing interval (aj, bj) if one exists */

// const ab_test_data = [
//   [0, 2],
//   [5, 7],
//   [3, 4],
//   [8, 10],
// ]
// // op=[[0, 2],[0,2],-1]
// const cd_test_data = [
//   [0.1, 1.9], // => [0, 2]
//   [0, 2],  // => [0, 2]
//   [0, 2.5], // => -1
//   [1, 10], // => -1
//   [3.1, 3.99], // => [3, 4]
//   [0, 1],
//   [0.5, 2],
//   [5.55, 6.55],
//   [9.98, 9.99],
//   [1.0, 1.0],
//   [11, 12]
// ]

// // An interval (ci, di) is contained within an interval (aj, bj) if a <= c < d <= b.
// //ab_interval = [0, 2]
// const isContained = (ab_interval, cd_interval) => {

//   for(let i=0;i<cd_interval.length;i++){
//   const [a, b] = ab_interval
//   const [c, d] = cd_interval[i]

//   if(a<=c && b>=d){
// return ab_interval

//   } else return []}
// console.log('isContained',res,ab_interval)
//   return res
// }

// function checkIfInRange(ab_test_data){
//     let res=[]
//     let length=cd_test_data.length
//   for(let i=0;i<ab_test_data.length;i++){
//    let result= isContained(ab_test_data[i],cd_test_data)
//    res=[...res,...result]
//   console.log('res',res)}
//   while(length!==0){
//     checkIfInRange()
//   }
// }

// console.log(checkIfInRange(ab_test_data,cd_test_data))

const ab_test_data = [
  [0, 2],
  [5, 7],
  [3, 4],
  [8, 10],
]; //sorted => [0,2], [3,4], [5,7], [8, 10]

const cd_test_data = [
  [0.1, 1.9],
  [0, 2],
  [0, 2.5],
  [1, 10],
  [3.1, 3.99],
  [0, 1],
  [0.5, 2],
  [5.55, 6.55],
  [9.98, 9.99],
];

let sortAbByStartTime = ab_test_data.sort((a, b) => a[0] - b[0]);

function getAbIntervalRange(cdInterval) {
  let intervalRange = [];

  for (let i = 0; i < sortAbByStartTime.length; i++) {
    let abStartPoint = sortAbByStartTime[i][0];
    let cdStartPoint = cdInterval[0];
    let abEndPoint = sortAbByStartTime[i][1];
    let cdEndPoint = cdInterval[1];

    if (abStartPoint > cdStartPoint) {
      console.log(`NOT IN RANGE: `, cdInterval, abStartPoint, abEndPoint);
      break;
    }
    if (cdStartPoint >= abStartPoint && cdEndPoint <= abEndPoint) {
      console.log(`IN RANGE: `, cdInterval, abStartPoint, abEndPoint);
      intervalRange = [abStartPoint, abEndPoint];
      break;
    } else {
      console.log(`NOT IN RANGE: `, cdInterval, abStartPoint, abEndPoint);
      intervalRange = [-1];
    }
  }

  return intervalRange;
}

function findIntervals() {
  let res = [];
  for (let i = 0; i < cd_test_data.length; i++) {
    res = [...res, ...[getAbIntervalRange(cd_test_data[i])]];
  }

  return res;
}

console.log(JSON.stringify(findIntervals()));

/* you have a set of non-overlapping intervals 
[(a1, b1), (a2, b2), … (an, bn)] 
and a second set of intervals 
[(c1, d1), (c2, d2), … (cm, dm)].
Where m >> n ( >> is much greater than)
An interval (ci, di) is contained within an interval (aj, bj) if aj <= ci < di <= bj.

Find the containing intervals for the each of the values (ci, di) */

// const isContained = (ab_interval, cd_interval) => {
//   //interval 1 is of form [a, b], interval 2 is of form [c, d]
//   if (ab_interval.length !== 2 || cd_interval.length !== 2)
//     throw new Error('oops');

//   const [a, b] = ab_interval;
//   const [c, d] = cd_interval;

//   return a <= c && c < d && d <= b;
// };

// const binarySearch = (nums, target, left, right) => {
//   const mid = Math.ceil((left + right) / 2);

//   if (isContained(nums[mid], target)) {
//     return mid;
//   }

//   if (left === right) return -1;
//   else if (target[0] < nums[mid][0])
//     return binarySearch(nums, target, left, mid - 1);
//   else if (target[0] > nums[mid][0])
//     return binarySearch(nums, target, mid + 1, right);
//   else return -1;
// };

// const main = (ab_set, cd_set) => {
//   //[c,d] => set of [a,b] intervals that contain it
//   const found = new Map();

//   // binary search only works on sorted lists
//   ab_set.sort((a, b) => {
//     if (a[0] < b[0]) return -1;
//     else if (a[0] === b[0]) return 0;
//     else return 1;
//   });

//   //for each [c, d] produce a map entry equal to the set of [a,b] that contains [c,d]
//   cd_set.forEach((cd_interval) => {
//     const cd_containing_interval_list = found.get(cd_interval) ?? new Array();
//     const index = binarySearch(ab_set, cd_interval, 0, ab_set.length - 1);
//     if (index !== -1) {
//       cd_containing_interval_list.push(ab_set[index]);
//       found.set(cd_interval, cd_containing_interval_list);
//     } else {
//       found.set(cd_interval, [[-1, -1]]);
//     }
//   });
//   return found;
// };
// console.log(main(ab_test_data, cd_test_data));
