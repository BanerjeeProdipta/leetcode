var climbStairs = function (n = 4) {
  if (n <= 3) return n;
  let a = 1,
    b = 2,
    res;
  for (let i = 3; i <= n; i++) {
    res = a + b;
    a = b;
    b = res;
  }
  return res;
};
console.log(climbStairs());
