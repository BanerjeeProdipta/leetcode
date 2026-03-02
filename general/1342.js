var numberOfSteps = function (num) {
  let step = 0;
  while (num > 0) {
    if (num & 1) {
      num--;
    } else {
      num >>= 1;
    }
    step++;
  }
  return step;
};

let num = 14;
console.log(numberOfSteps(num));
