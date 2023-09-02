// /*this keyword with non strict mode =>nodej js */
// //console.log(this);//{}

// /*this used in function */
// function showthis() {
//   console.log(this); //global object
// }
// showthis();
// /*this used in object normal  function only */
// let a = {
//   name: "ali",
//   f: function () {
//     console.log(this); //object itself
//   },
// };
// a.f();
// /*this used in object function */
// let a1 = {
//   name: "ali",
//   f: function () {
//     function g() {
//       console.log(this); //global object
//     }
//     g();
//   },
// };
// a1.f();

// /*this keyword with strict mode */
// //console.log(this);//{}

// /*this used in function */
// function showthis() {
//   console.log(this); //undef
// }
// showthis();
// /*this used in object function */
// let a = {
//   name: "ali",
//   f: function () {
//     console.log(this); //object itself
//   },
// };
// a.f();
// /*this used in object function */
// let a1 = {
//   name: "ali",
//   f: function () {
//      chetu(x)=>{
//       console.log(this); //undef
//     }
//     chetu();
//   },
// };

// a1.f();
// /*this keyword with non strict mode=>browser */
// //console.log(this);//window

// /*this used in function */
// function showthis() {
//   console.log(this); //window
// }
// showthis();
// /*this used in object function */
// let a = {
//   name: "ali",
//   f: function () {
//     console.log(this); //object itself
//   },
// };
// a.f();
// /*this used in object function */
// let a1 = {
//   name: "ali",
//   f: function () {
//     function g() {
//       console.log(this); //window
//     }
//     g();
//   },
// };
// a1.f();
// /*this keyword with strict mode =>browser*/
// //console.log(this);//window

// /*this used in function */
// function showthis() {
//   console.log(this); //undef
// }
// showthis();
// /*this used in object function */
// let a = {
//   name: "ali",
//   f: function () {
//     console.log(this); //object itself
//   },
// };
// a.f();
// /*this used in object function */
// let a1 = {
//   name: "ali",
//   f: function () {
//     function g() {
//       console.log(this); //undef
//     }
//     g();
//   },
// };
// a1.f();
