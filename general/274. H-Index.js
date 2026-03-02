var hIndex = function (citations) {
  const sortedCitations = citations.sort((a, b) => b - a);
  // if (citations.length === 1) {
  //   return citations[0] <= 0 ? 0 : 1;
  // }

  for (let i = 0; i <= sortedCitations.length; i++) {
    console.log(sortedCitations, sortedCitations[i], i);
    if (sortedCitations[i] <= i) {
      return i;
    }
  }

  return citations.length;
};

// console.log(hIndex([1, 3, 1]));
// console.log(hIndex([3, 0, 6, 1, 5]));
console.log(hIndex([100]));
// console.log(hIndex([11, 15]));
