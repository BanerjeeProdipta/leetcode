function twoSum(numbers, target) {
  function getRangeIndices(start, end) {
    if (numbers[start] + numbers[end] === target) return [start + 1, end + 1];
    let mid = Math.floor((start + end) / 2);
    let sumOfFirstSplit = numbers[start] + numbers[mid];
    let sumOfLastSplit = numbers[mid] + numbers[end];

    console.log({ start, end, mid, sumOfFirstSplit, sumOfLastSplit });

    if (sumOfFirstSplit === target) return [start + 1, mid + 1];

    if (sumOfLastSplit === target) return [mid + 1, end + 1];

    if (sumOfFirstSplit > target) {
      return getRangeIndices(start, mid);
    } else if (sumOfLastSplit < target) {
      return getRangeIndices(mid, end);
    } else {
      while (start < end) {
        if (numbers[start] + numbers[end] === target) {
          return [start + 1, end + 1];
        }
        if (numbers[start] + numbers[end] < target) {
          start++;
        }
        if (numbers[start] + numbers[end] > target) {
          end--;
        }
      }
    }
  }

  return getRangeIndices(0, numbers.length - 1);
}

let numbers = [-5, -3, 0, 2, 4, 6, 8];
let target = 5;
console.log(twoSum(numbers, target));
