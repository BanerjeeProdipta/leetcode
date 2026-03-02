export default function debounce(func, wait) {
  let timer = null;

  return function (...args) {
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(context, args), wait);
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
