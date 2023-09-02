// function add() {
//   let a = 4;
//   function addChild() {
//     console.log(a + 5);
//   }

//   return addChild;
// }
// let catchAdd = add();
// console.log(catchAdd);
// catchAdd();

// const parent = document.querySelector(".parent");
// console.log(parent);
// console.log(parent.children[1].innerHTML);
// for (let i = 0; i < parent.children.length; i++) {
//   console.log(parent.children[i].innerHTML);
// }
// let arr = [1, 2, 3, 4, 5];
// const mapped = arr.map((number) => {
//   return {
//     [number]: number,
//   };
// });

// console.log(mapped);
// let p1 = new Promise(function (res, rej) {
//   res("ghar aao");
// });
// let p2 = p1.then(function (res) {
//   console.log(res);
//   throw new Error("hi chetu");
//   return "Khana khao";
// });

// let p3 = p2
//   .then(function (res) {
//     console.log(res);
//     return "mat ao";
//   })
//   .then((res) => console.log(res))
//   .catch((rej) => {
//     console.log(rej);
//     return "error reesolve";
//   })
//   .then((res) => {
//     console.log(res);
//   });
// let fetch = new Promise((res, rej) => {
//   res("ffdgsfgfdgbfdbhd");
// })
//   .then((res) => {
//     return res.json();
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((rej) => {
//     console.log("error");
//   });

//  var count;

// console.log(count);
// var count = 1;
// const map = new Map();
// map.set("in", "India");
// // console.log(map);
// for (let [key, value] of map) {
//   console.log(key);
//   console.log(value);
// }
// const myMap = {
//   g: "I",
// };

// for (let key in myMap) {
//   console.log(myMap[key]);
// }

// const myC = [
//   {
//     name: "ali",
//     roll: 1,
//   },
// ];
// myC.forEach((i) => {
//   console.log(i.name);
// });
