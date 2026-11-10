// function page(arr, pivot, pageSize, pageNumber) {
//   const pivotIndex = arr.indexOf(pivot);
//   const res = [];
//   const startIndex = (pivotIndex + (pageNumber - 1) * pageSize) % arr.length;

//   for (let i = 0; i < pageSize; i++) {
//     console.log(startIndex + i, (startIndex + i) % arr.length);
//     res.push(arr[(startIndex + i) % arr.length]);
//     console.log({ res });
//   }
// }

// let arr = [10, 20, 30, 40, 50, 60];
// let pivot = 30;
// let pageSize = 3;
// let pageNumber = 2;

// page(arr, pivot, pageSize, pageNumber);

function sum(arr, start, k) {
    let sum=0
  for (let i = 0; i < k; i++) {
    console.log(arr[(i + start) % arr.length]);
    sum+=
  }
}

let arr = [5, 10, 15, 20, 25];
let start = 4;
let k = 3;
sum(arr, start, k);
