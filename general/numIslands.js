var numIslands = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  let count = 0;

  function islandExplorer(i, j) {
    // boundary + water check
    if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === "0") {
      return;
    }
    grid[i][j] = "0";
    console.log({ i, j }, grid[i][j]);
    islandExplorer(i + 1, j);
    islandExplorer(i - 1, j);
    islandExplorer(i, j + 1);
    islandExplorer(i, j - 1);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        islandExplorer(i, j);
        count++;
      }
    }
  }
  console.log({ count });
};

let grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];
console.log(numIslands(grid));
