function myPromiseAll(promises) {
  let result = new Array(promises.length);
  let counter = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((p, i) => {
      p.then((res) => {
        // store results in the same sequence as the promises passes in arguments
        result[i] = res;
        ++counter;

        // check if this is the last promise to be resolved
        if (counter === promises.length) {
          resolve(result);
        }
      }).catch((err) => {
        reject(err);
      });
    });
  });
}

function showText(text, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, time);
  });
}

console.time("run");

myPromiseAll([
  showText("hello", 1000),
  showText("world", 500),
  showText("light", 3000),
  showText("darkness", 2000),
]).then((result) => {
  console.timeEnd("run");
  result.forEach((value) => {
    console.log(value);
  });
});
