/*---------------------
        Q1:Function
-----------------------*/
// function real() {
//   console.log("I am real");
// }
// function real() {
//   console.log("I am fake");
// }
// real();
// function real() {
//   console.log("I am awsm");
// }

/*---------------------
        Q2:hoisting
-----------------------*/
// console.log("varName", varName);
// var varName;
// console.log("varName", varName);
// varName = "captain America";
// console.log("var", varName);
// fn();
// function fn() {
//   console.log("Hello from fn");
// }
// fn();
// fun();
// var fun = function () {
//   console.log("I am expression");
// };
// fun();
/*---------------------
        Q3: var
-----------------------*/
// var a = 10;
// console.log("line no37", a); //10
// function fn() {
//   console.log("line no 39", a); //undef
//   var a = 20;
//   a++;
//   console.log("line no 42", a); //21
//   if (a) {
//     var a = 38;
//     a++;
//     console.log("line no 46", a); //39
//   }
//   console.log("line no 48", a); //21--X 39--ok
// }
// fn();
// console.log(a); //10
/*---------------------
        Q3:Let and const
-----------------------*/
// let letFruit = "orange";
// var varFruit = "orange";
// console.log("letzfruit", letFruit, "varFruit", varFruit); //orange orange
// {
//   let letFruit = "aaple";
//   var varFruit = "apple";
//   console.log("letzfruit", letFruit, "varFruit", varFruit); //apple apple
// }
// console.log("letzfruit", letFruit, "varFruit", varFruit); //orange apple
