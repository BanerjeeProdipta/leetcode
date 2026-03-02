var isArraySpecial = function (nums, queries) {
  const res = [];
  const isEven = (num) => num % 2 === 0;

  const parity = nums.map(isEven);

  for (const [start, end] of queries) {
    const firstParity = parity[start];
    let flag = true;

    for (let i = start; i <= end; i++) {
      const relativeIndex = i - start;

      if (
        (relativeIndex % 2 === 0 && parity[i] !== firstParity) ||
        (relativeIndex % 2 !== 0 && parity[i] === firstParity)
      ) {
        flag = false;
        break;
      }
    }

    res.push(flag);
  }

  return res;
};
