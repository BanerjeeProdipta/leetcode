var thirdMax = function (nums) {
  const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;

    if (arr.length === 2) {
      if (arr[0] > arr[1]) {
        [arr[0], arr[1]] = [arr[1], arr[0]];
      }
      console.log('ARR: ', arr);
      return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
  };

  const merge = (leftArr, rightArr) => {
    let res = [];
    let i = 0,
      j = 0;

    while (i < leftArr.length && j < rightArr.length) {
      if (leftArr[i] < rightArr[j]) {
        console.log(res, leftArr[i], rightArr[j]);
        res.push(leftArr[i++]);
      } else {
        console.log(res, leftArr[i], rightArr[j]);
        res.push(rightArr[j++]);
      }
    }

    return res.concat(leftArr.slice(i)).concat(rightArr.slice(j));
  };

  const sorted = mergeSort(nums);

  const unique = [...new Set(sorted)];

  return unique.length >= 3
    ? unique[unique.length - 3]
    : unique[unique.length - 1];
};

let nums = [2, 1, 3, 6, 4];
console.log(thirdMax(nums)); // 3
