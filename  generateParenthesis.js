var generateParenthesis = function (n) {
  const result = [];
  let recursionCount = 0;

  const generate = (current, open, close, recursionCount) => {
    recursionCount++;

    console.log({
      recursionCount,
      current,
      open,
      close,
    });
    // Base case: if the current string length is equal to n * 2, add it to the result
    if (current.length === n * 2) {
      result.push(current);
      return;
    }

    // If the number of open parentheses is less than n, add an open parenthesis
    if (open < n) {
      generate(current + '(', open + 1, close, recursionCount);
    }

    // If the number of close parentheses is less than the number of open parentheses, add a close parenthesis
    if (close < open) {
      generate(current + ')', open, close + 1, recursionCount);
    }
  };

  // Start the recursion with an empty string and 0 open and close parentheses
  generate('', 0, 0, 0);
  console.log(result);
  return result;
};

generateParenthesis(3);
