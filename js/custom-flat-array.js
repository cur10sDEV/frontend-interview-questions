const arr = [[1, 2], [3, 4, [5, 6], 7], [8, 9], 10];

function customFlat(arr, depth = 1) {
  const result = [];

  arr.forEach((item) => {
    if (Array.isArray(item) && depth > 0) {
      result.push(...customFlat(item, depth - 1));
    } else result.push(item);
  });

  return result;
}

console.log(customFlat(arr, 2));
