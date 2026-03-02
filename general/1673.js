var maximumWealth = function (accounts) {
  let max = 0;

  for (let account of accounts) {
    let length = account.length;
    let currProfit = 0;
    while (length > 0) {
      currProfit += account[length - 1];
      length--;
    }
    max = Math.max(currProfit, max);
  }
  return max;
};
let accounts = [
  [1, 5],
  [7, 3],
  [3, 5],
];
console.log(maximumWealth(accounts));
