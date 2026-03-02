/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

function maxSum(arr, n, k) {
  // Initialize result
  let max_sum = Number.MIN_SAFE_INTEGER;

  // Consider all blocks starting with i
  for (let i = 0; i < n - k + 1; i++) {
    let current_sum = 0;
    for (let j = 0; j < k; j++) {
      current_sum += arr[i + j];
    }

    // Update result if required
    max_sum = Math.max(current_sum, max_sum);
  }

  return max_sum;
}

var isSubsequence = function (s, t) {
  let pointer = 0;

  for (let i = 0; i < t.length; i++) {
    console.log(s[pointer], t[i], pointer, i, t.length);
    if (s[pointer] === t[i]) {
      pointer++;
    }
  }
  return pointer === s.length;
};

let s = 'abc',
  t = 'ahbgdc';
console.log(isSubsequence(s, t));
