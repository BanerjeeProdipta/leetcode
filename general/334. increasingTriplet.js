var increasingTriplet = function (nums) {
  let first = -Infinity;
  let middle = -Infinity;

  for (let num of nums) {
    console.log({ num, first, middle });
    if (first < num) {
      first = num;
      console.log({ first, num });
    } else if (middle < num) {
      middle = num;
    } else {
      console.log({ first, middle, num });
    }
  }
};

// nums = [5,4,3,2,1]
// Output: false
let nums = [2, 1, 5, 0, 4, 6];
// Output: true;
console.log(increasingTriplet(nums));
