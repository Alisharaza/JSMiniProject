/*Types of function
Namming function
Anonymous function
Immidiate invoked function
Arrow function
 */
/* -----------------
1. NAming function
-------------------*/
// function sayHello(param) {
//   console.log("hii", param);
//   return "raza";
// }
// sayHello("alisha");
// sayHello(1);
// sayHello([1, 2, 4, 5, 6]);
// sayHello({ name: "ali" });
/* -----------------
function woring as a assignment function
-------------------*/
// let ans = function sayHello(param) {
//   console.log("hii", param);
//   return "raza";
// };
// ans(1);
// console.log("ans", ans);
/* -----------------
2.IIFI function :Immediate call
-------------------*/
// (function sayHello(param) {
//   console.log("hii", param);
//   return "raza";
// })(1);
// let ans = function sayHello(param) {
//   console.log("hii", param);
//   return "raza";
// };
/* -----------------
3.Anonymous function
-------------------*/
/* -----------------
4.Arrow function :for react instead of this
-------------------*/
// let fn = (num) => num * num;
// console.log(fn(5));

// fn(4);

// function can return function ->closure
// function outer() {
//   console.log("hii");
//   return function () {
//     console.log("byy");
//   };
// }
// let val = outer();
// console.log("val", val);
// val();
