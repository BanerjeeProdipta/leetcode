function isValidSudoku(board) {
  let rowMap = {};
  let colMap = {};
  let gridMap = {};

  for (let i = 0; i < 9; i++) {
    rowMap[i] = new Set();
    colMap[i] = new Set();
    gridMap[i] = new Set();
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === '.') continue;

      const gridIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

      if (
        rowMap[i].has(board[i][j]) ||
        colMap[j].has(board[i][j]) ||
        gridMap[gridIndex].has(board[i][j])
      ) {
        return false;
      }

      rowMap[i].add(board[i][j]);
      colMap[j].add(board[i][j]);
      gridMap[gridIndex].add(board[i][j]);
    }
  }

  return true;
}

let board = [
  ['1', '2', '.', '.', '3', '.', '.', '.', '.'],
  ['4', '.', '.', '5', '.', '.', '.', '.', '.'],
  ['.', '9', '6', '.', '.', '.', '.', '.', '3'],
  ['5', '.', '.', '.', '6', '.', '.', '.', '4'],
  ['.', '.', '.', '8', '.', '3', '.', '.', '5'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '.', '.', '.', '.', '.', '2', '.', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '8'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

console.log(isValidSudoku(board));
