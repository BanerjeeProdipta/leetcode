/**
 * @param {number} x
 * @return {number}
 */

var reverse = function (x) {
  let remainder,
    remaining = x,
    reversed = 0,
    isNegative = false,
    maxLimit = Math.pow(2, 31) - 1;

  if (remaining < 0) {
    isNegative = true;
    remaining = remaining * -1;
  }

  while (remaining >= 10) {
    remainder = remaining % 10;
    remaining = Math.floor(remaining / 10);
    reversed = (reversed + remainder) * 10;
    console.log(reversed, maxLimit);

    if (reversed > maxLimit) {
      return 0;
    }
  }

  reversed = reversed + remaining;

  if (isNegative) {
    reversed = reversed * -1;
  }

  return reversed;
};

console.log('RES:', reverse(15343));
