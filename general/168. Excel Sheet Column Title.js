/**
 * @param {number} columnNumber
 * @return {string}
 */

var convertToTitle = function (columnNumber = 28) {
  columnNumber--;

  let remainder = columnNumber % 26;
  let remaining = 0;
  let result = '';
  const A = 65;

  result += String.fromCharCode(A + remainder) + result;

  console.log(result, remainder, remaining);
};

console.log('RES: ', convertToTitle());
