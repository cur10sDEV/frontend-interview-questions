function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

console.log(add(5)(4)(3)(2)(1)());

/* 
Output:
15
*/
