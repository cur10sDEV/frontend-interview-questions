function debounceFn(fn, delay) {
  let timerId;
  return function (...args) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => fn(...args), delay);
  };
}

function logger(a) {
  console.log(a);
}

const debounceLogger = debounceFn(logger, 500);

for (let i = 0; i < 10; i++) {
  // logger(i);
  debounceLogger(i);
}
