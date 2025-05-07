// function abc() {
//   console.log(a);

//   var a = 10;
// }

// abc();

/* 
Output:
undefined
*/

function abc() {
  console.log(c, a, b);

  const c = 30;
  let b = 20;
  var a = 10;
}

abc();

/* 
Output:
Uncaught ReferenceError: can't access lexical declaration 'c' before initialization
Reason:
variables are hoisted but let and const are in temporal dead zone
*/
