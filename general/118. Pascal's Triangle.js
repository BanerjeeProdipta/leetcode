// var generate = function (numRows) {
//   const arr = [];

//   const rowNumbersGenerator = (index) => {
//     let numbersCount = index + 1;

//     if (numbersCount > 2) {
//       let currArr = [];
//       for (let i = 0; i < numbersCount; i++) {
//         if (i === 0 || i === numbersCount - 1) {
//           currArr.push(1);
//         } else {
//           let lastArr = arr[index - 1];
//           let currVal = (lastArr[i - 1] || 0) + lastArr[i];
//           currArr.push(currVal);
//         }
//       }

//       return currArr;
//     } else return Array(numbersCount).fill(1);
//   };

//   for (let i = 0; i < numRows; i++) {
//     arr.push(rowNumbersGenerator(i));
//   }

//   return arr;
// };

var generate = function (numRows) {
  const result = [];
  let row = [];

  for (let i = 0; i < numRows; i++) {
    row = [
      1,
      ...row.map((currentValue, index) => currentValue + (row[index + 1] || 0)),
    ];

    result.push(row);
  }

  return result;
};

console.log(generate(5));
