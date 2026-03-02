var triangularSum = function (nums) {
  let row = nums;

  const generateRow = (row) => {
    let newRow = [];
    for (let i = 0; i < row.length - 1; i++) {
      sum = row[i] + row[i + 1];
      newRow.push(sum % 10);
    }

    return newRow;
  };

  while (row.length > 1) {
    row = generateRow(row);
  }

  return row[0];
};
// Input: nums = [1,2,3,4,5]
// Output: 8
let nums = [1, 2, 3, 4, 5];
console.log(triangularSum(nums));
