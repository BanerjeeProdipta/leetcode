function page(arr, page_size, page_number) {
  const res = [];
  const start = ((page_number - 1) * page_size) % arr.length;
  const end = Math.min(start + page_size, arr.length);
  console.log({ start, end });

  for (let i = 0; i < page_size; i++) {
    if (i + start < arr.length) res.push(arr[i + start]);
  }
  console.log(res);
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let page_size = 20;
let page_number = 1;

page(arr, page_size, page_number);
