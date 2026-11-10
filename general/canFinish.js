function canFinish(numCourses, prerequisites) {
  const preRequisitesByCourse = Array.from({ length: numCourses }, () => []);

  const status = Array(numCourses).fill(0);
  //   0 todo
  //   1 in progress
  //   2 done

  for (let pre of prerequisites) {
    const [course, prereq] = pre;
    preRequisitesByCourse[course].push(prereq);
  }

  function dfs(course) {
    if (status[course] === 1) return false;
    if (status[course] === 2) return true;
    status[course] = 1;

    const courses = preRequisitesByCourse[course];
    console.log(courses);

    for (let crs of courses) {
      const res = dfs(crs);
      console.log({ res });
      if (!res) return false;
    }

    status[course] = 2;
    return true;
  }

  for (let i = 0; i < numCourses; i++) {
    return dfs(i);
  }

  console.log({ preRequisitesByCourse, status });
}

let numCourses = 2;
// let prerequisites = [[1, 0]];
let prerequisites = [
  [1, 0],
  //   [0, 1],
  //   [0, 2],
];
console.log(canFinish(numCourses, prerequisites));
