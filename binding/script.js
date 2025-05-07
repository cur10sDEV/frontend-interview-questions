// var obj = {
//   name: "piyush",
//   display: function () {
//     console.log(this.name);
//   },
// };

// var obj1 = {
//   name: "ABC",
// };

// obj.display.call(obj1);

/* 
Output:
ABC
*/

var obj = {
  name: "piyush",
  display: () => {
    console.log(this.name);
  },
};

var obj1 = {
  name: "ABC",
};

obj.display.call(obj1);

/* 
Output:
<empty string>
Reason:
In Arrow functions this refers to window object
*/
