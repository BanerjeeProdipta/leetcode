function canFinish(numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, (_, i) => []);
  const stack = Array(numCourses).fill(0);
  console.log({ graph, stack });

  for (let [course, pre] of prerequisites) {
    graph[course].push(pre);
  }
  console.log({ graph, stack });

  function dfs(course) {
    if (stack[course] === 1) return false;
    if (stack[course === 2]) return true;

    stack[course] = 1;

    const pre = graph[course];

    for (let p of pre) {
      const res = dfs(p);
      if (!res) return false;
    }

    stack[course] = 2;
    return true;
  }

  for (let i = 0; i < numCourses; i++) {
    const res = dfs(i);
    if (!res) return false;
  }
  return true;
}

// Example usage
let numCourses = 2;
let prerequisites = [
  [1, 0],
  [0, 1],
];

console.log(canFinish(numCourses, prerequisites)); // false
