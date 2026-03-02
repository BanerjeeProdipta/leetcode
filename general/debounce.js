export default function debounce(func, wait) {
  let timer = null; // stores the timeout ID
  return function (...args) {
    clearTimeout(timer); // cancel previous scheduled call
    timer = setTimeout(() => {
      func.apply(this, args); // call func after wait ms
    }, wait);
  };
}

let i = 0;
function increment(num) {
  i = i + num;
}
const debouncedIncrement = debounce(increment, 100);

// Now pass the argument when calling
debouncedIncrement(10);
debouncedIncrement(20);

console.log(i);

setTimeout(() => {
  console.log(i);
}, 150);
