function addFive(a) {
  return a + 5;
}

function subtractTwo(a) {
  return a - 2;
}

function multiplyFour(a) {
  return a * 4;
}

function compose(...functions) {
  return (args) => functions.reduceRight((arg, fn) => fn(arg), args);

  // OR

  // return function (args) {
  //   for (let i = functions.length - 1; i >= 0; i--) {
  //     a = functions[i](args);
  //   }
  //   return a;
  // };
}

// result will be passsed from last to first function in the sequence
// and at last the final result will be returned
const evaluate = compose(addFive, subtractTwo, multiplyFour);
console.log(evaluate(10));
