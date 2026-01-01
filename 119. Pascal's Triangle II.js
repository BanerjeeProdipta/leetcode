var getRow = function (rowIndex) {
  let row = [];

  for (let i = 0; i < rowIndex + 1; i++) {
    row = [1, ...row.map((curr, index) => curr + (row[index + 1] || 0))];
  }

  return row;
};
// Input: rowIndex = 3
// Output: [1,3,3,1]

let rowIndex = 3;
console.log(getRow(rowIndex));
