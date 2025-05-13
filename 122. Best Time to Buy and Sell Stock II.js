/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
  let currentPrice,
    nextPrice,
    profit = 0;

  for (let i = 0; i < prices.length; i++) {
    currentPrice = prices[i];
    nextPrice = prices[i + 1];

    if (currentPrice < nextPrice) {
      let currProfit = nextPrice - currentPrice;
      profit += currProfit;
    }
  }
  console.log(profit);
  return profit;
};

maxProfit([1, 2, 3, 4, 5]);
