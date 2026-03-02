/**
 * @param {number[]} gain
 * @return {number}
 */

var largestAltitude = function (gain) {
  let alt = 0;
  let maxAlt = 0;

  for (let g of gain) {
    alt += g;
    if (alt > maxAlt) {
      maxAlt = alt;
    }
  }

  return maxAlt;
};

let gain = [-5, 1, 5, 0, -7];
console.log(gain);
