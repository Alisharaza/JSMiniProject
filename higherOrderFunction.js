/* Map:ye function array-based function hai */
let myArray = [1, 2, 3, 4];
// let newArr = myArray.map((x) => {
//   return x * x;
// });
// console.log(myArray);
// console.log(newArr);//[1 4 9 16]
/* filter:ye function array-based function hai */
// let filterArr = myArray.filter((x) => {
//   return x % 2 == 0;
// });
// console.log(filterArr);//[2 4]

// /* Reduce:singl entity ko dispalay krega initial valuen v leta hai */
// let sumaArr = myArray.reduce((accum, x) => {
//   return accum + x;
// }, 0); //initial value

/*Polyfills=>Imperative function ko likhni hti hai */
// Array.prototype.myMap = function (cb) {
//   let newArr = [];
//   for (let i = 0; i < this.length; i++) {
//     newArr.push(cb(this[i], i, this));
//   }
//   return newArr;
// };
// function square(x) {
//   return x * x;
// }
// console.log(myArray.myMap(square));

// Array.prototype.myFilter = function (cb) {
//   let newArr = [];
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, this)) {
//       newArr.push(this[i]);
//     }
//   }
//   return newArr;
// };
// function filter(x) {
//   return x % 2 == 0;
// }
// console.log(myArray.myFilter(filter));

// function polyfilReduce(cb) {
//   for (let i = 0; i < arr.length; i++) {
//     acc = cb(acc, arr[i], i, this);
//   }
//   return acc;
// }
// function sum(a, b) {
//   return a + b;
// }
// console.log(myArray.polyfilReduce(0, sum));
