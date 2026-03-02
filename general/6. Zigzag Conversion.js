var convert = function (s, numRows) {
  if (numRows === 1 || s.length <= numRows) return s;

  const arr = new Array(numRows).fill('');
  let currRow = 0;
  let goingDown = false;

  for (let i = 0; i < s.length; i++) {
    arr[currRow] += s[i];

    if (currRow === 0 || currRow === numRows - 1) {
      goingDown = !goingDown;
    }

    currRow += goingDown ? 1 : -1;
  }

  return arr.join('');
};

convert('PAYPALISHIRING', 4);

// NOTES
// first row 0,6,12
// second row 1,5,7,11,13
// third row 2,4,8,10
// forth row 3,9
