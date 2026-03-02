function maxProfit(prices) {
  let min = Infinity;
  let max = -Infinity;
  let profit = -Infinity;

  for (let i = 0; i < prices.length - 1; i++) {
    min = Math.min(min, prices[i]);
    max = Math.max(0, prices[i + 1]);
    profit = Math.max(profit, max - min);
  }

  return Math.max(profit, 0);
}

// let prices = [10, 1, 5, 6, 7, 1];
// let prices = [3, 4, 1];
// let prices = [5, 1, 5, 6, 7, 1, 10];
let prices = [7, 6, 4, 3, 1];

// Output: 6

console.log(maxProfit(prices));
