function maxSum(arr, k) {
  const n = arr.length;
  // while(k<n){

  // }

  let windowSum = 0;

  // initial window
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  let maxSum = windowSum;

  console.log(windowSum);
  for (let i = k; i < n; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

function findMaxAverage(arr, k) {
  return maxSum(arr, k) / k;
}

// Driver code
const arr = [5, 2, -1, 0, 3];
const k = 3;
console.log('Max Sum:', maxSum(arr, k));
console.log('Max Avg:', findMaxAverage(arr, k));
