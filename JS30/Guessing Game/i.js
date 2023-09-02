// let nums = [4, 6, 8, 9, 89];
// let ans = nums.filter((n, i, []) => n % 2 === 0);

// console.log(ans);
// class Person {
//   constructor(name, rollno) {
//     this.name = name;
//     this.rollno = rollno;
//   }
// }
// var object = new Person("Sudheer", 6);
// console.log(object);
// var e1 = { firstName: "John", lastName: "Rodson" };
// var e2 = { firstName: "Jimmy", lastName: "Baily" };

// function invite(greeting1, greeting2) {
//   console.log(
//     greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
//   );
// }
// invite.call(e2, "hii", "hello");
// // invite.call(employee1, "Hello", "How are you?"); // Hello John Rodson, How are you?
// // invite.call(employee2, "Hello", "How are you?"); // Hello Jimmy Baily, How are you?
// let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
// let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
// let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];

// let arrayIntegers1 = arrayIntegersOriginal1.splice(0, 2); // returns [1, 2]; original array: [3, 4, 5]
// let arrayIntegers2 = arrayIntegersOriginal2.slice(3); // returns [4, 5]; original array: [1, 2, 3]
// let arrayIntegers3 = arrayIntegersOriginal3.slice(3, 1, "a", "b", "c"); //returns [4]
// console.log(arrayIntegers1);
// console.log(arrayIntegers2);

// console.log(arrayIntegers3);

// ghar ao
// khana bnao
// pani piyo
let p1 = new Promise(function (res, rej) {
  return res("ghar aao");
});
p1.then(function (data) {
  console.log(data);
  p2 = new Promise(function (res, rej) {
    return res("Khana khao");
  });
});
p2.then(function (data) {
  console.log(data);
  p3 = new Promise(function (res, rej) {
    return res("ghar ao");
  });
});
