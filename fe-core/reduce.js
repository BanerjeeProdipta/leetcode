/**
 * @template T, U
 * @param {(previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U} callbackFn
 * @param {U} [initialValue]
 * @return {U}
 */
Array.prototype.myReduce = function (callbackFn, initialValue) {
  if (typeof callbackFn !== 'function') {
    throw new TypeError(`${callbackFn} is not a function`);
  }

  const arr = this;
  const length = arr.length;
  let accumulator;
  let startIndex = 0;

  if (arguments.length >= 2) {
    console.log(arguments, initialValue);
    // If initialValue is provided, use it
    accumulator = initialValue;
  } else {
    // No initialValue provided, use first defined element as accumulator
    let found = false;
    for (let i = 0; i < length; i++) {
      if (i in arr) {
        // skip holes in sparse arrays
        accumulator = arr[i];
        startIndex = i + 1;
        found = true;
        break;
      }
    }
    if (!found) {
      throw new TypeError('Reduce of empty array with no initial value');
    }
  }

  for (let i = startIndex; i < length; i++) {
    if (i in arr) {
      accumulator = callbackFn(accumulator, arr[i], i, arr);
    }
  }

  return accumulator;
};
console.log([1, 2, 3].myReduce((prev, curr) => prev + curr, 0)); // 6
[1, 2, 3].myReduce((prev, curr) => prev + curr, 4); // 10
