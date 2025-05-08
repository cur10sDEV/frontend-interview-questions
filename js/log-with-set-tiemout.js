// for (var i = 0; i < 3; i++) {
//   setTimeout(function log() {
//     console.log(i);
//   }, i * 1000);
// }

/*
Output:
3
3
3
*/

for (var i = 0; i < 3; i++) {
  // closure or can use `let`
  ((i) => {
    setTimeout(function log() {
      console.log(i);
    }, i * 1000);
  })(i);
}

/*
Output:
0
1
2
*/
