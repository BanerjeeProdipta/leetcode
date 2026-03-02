export default function flatten(value) {
  const result = [];

  for (let val of value) {
    if (Array.isArray(val)) {
      result.push(...flatten(val));
    } else {
      result.push(val);
    }
  }

  return result;
}
// Single-level arrays are unaffected.
flatten([1, 2, 3]); // [1, 2, 3]

// Inner arrays are flattened into a single level.
console.log(flatten([1, [2, 3]])); // [1, 2, 3]
flatten([
  [1, 2],
  [3, 4],
]); // [1, 2, 3, 4]

// Flattens recursively.
flatten([1, [2, [3, [4, [5]]]]]); // [1, 2, 3, 4, 5]
