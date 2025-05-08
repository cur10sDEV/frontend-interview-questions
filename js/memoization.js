// memoize function
const memoizeFn = (fn, context) => {
  const cache = {};
  return function (...args) {
    // keys should be unique and consistent with respect to arguments
    const key = JSON.stringify(args.join(","));
    // check in cache
    if (!cache[key]) {
      // pass arguments to original function and store the result into the cache
      cache[key] = fn.call(context || this, ...args);
    }
    // return the cached result
    return cache[key];
  };
};

function heavyOperation(num1, num2) {
  for (let i = 0; i < 2_000_000_000; i++) {}
  return num1 * num2;
}

const memoizedHeavyOperation = memoizeFn(heavyOperation);

console.time("firstCall");
console.log(memoizedHeavyOperation(1002, 7697));
console.timeEnd("firstCall");

console.time("secondCall");
console.log(memoizedHeavyOperation(1002, 7697));
console.timeEnd("secondCall");

/* 
Output:
25
1300ms
25
0ms
*/
