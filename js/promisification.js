function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn.call(this, ...args, (err, result) => {
        if (err) return reject(err);
        return resolve(result);
      });
    });
  };
}

// Example usage
function exampleCallbackFunction(arg1, arg2, callback) {
  if (arg1 < 0) {
    return callback(new Error("Negative value not allowed"));
  }
  const result = arg1 + arg2;
  callback(null, result);
}

const promisifiedFunction = promisify(exampleCallbackFunction);

// Using the promisified function
promisifiedFunction(5, 10)
  .then((result) => {
    console.log("Result:", result); // Result: 15
  })
  .catch((err) => {
    console.error("Error:", err.message);
  });
