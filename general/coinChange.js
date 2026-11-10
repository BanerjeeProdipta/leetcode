var coinChange = function (coins, amount) {
  coins.sort((a, b) => a - b);
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  console.log(dp);

  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      const remaining = i - coin;

      if (remaining < 0) break;

      const coinsNeeded = dp[remaining];

      if (coinsNeeded !== Infinity) {
        dp[i] = Math.min(dp[i], coinsNeeded + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};

let coins = [1, 2, 5];
let amount = 11;

console.log(coinChange(coins, amount)); // 3
