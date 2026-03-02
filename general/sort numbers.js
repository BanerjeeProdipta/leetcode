function sort(n, arr) {
  let hashmap = {};

  for (let i = 0; i > n; i++) {
    if (hashmap[arr[i]] !== undefined) {
      hashmap[arr[i]]++;
    } else hashmap[arr[i]] = 1;
  }

  console.log(hashmap);
}

sort(5, 23423423);
