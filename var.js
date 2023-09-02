/*----------------------------------------------                              
2015 es6
var has a functional scope
window object pe v add ho jte h
let ko redeclare nii kr skte but var ko karskte h
undef+1=NaN
*/

let a = 10;
console.log("line no 7", a); //10
function fn() {
  // console.log(a++);//Nan
  let f = "ba" + ++a + "a"; //baNaNa
  let g = "1" +++a + "a"; //Inalid LHS for postfix
  console.log(f, g);

  var a = 10;
  console.log("line no 9", a); //10
  a++; //10
  a = 20;
  console.log("line no 12", a); //20

  if (a) {
    let a = 38;
    a++; //38 ++a=>39
    console.log("line no 16", a); //39
  }
  console.log("line no 18", a); //20
}
fn();
console.log(a); //10
/*--------------------------
            Let: let block scope hta hai isko bina declare kye hm us variable print nii kra skte hai but var ko kra skte hai
----------------------------*/
// var varName; //Uncaught SyntaxError: Identifier 'varName' has already been declared
// console.log("line no 26", varName);
// varName = 10;
// varName = 20;
// console.log("line no 28", varName);
// var varName; //Uncaught SyntaxError: Identifier 'varName' has already been declared here is error bcz hoistine krne k tym me isne parszing pase me 2 let declare dekh lya islye ye interpret nii ho pya
// if we reclare to var it will not error
// if we deaclare let a; and var a; than also we will get error.

// let fruit = "apple";
// console.log(fruit);//apple
// {
//   let fruit;
//   console.log("fruitt", fruit);//undef
//   fruit = "orange";
//   console.log(fruit);//orange
// }
// console.log(fruit);//apple
/*=========================================*/
// let fruit = "apple";
// console.log(fruit); //apple
// {
//   console.log("fruitt", fruit); //Cannot access 'fruit' before initialization
//   let fruit;
//   fruit = "orange";
//   console.log(fruit); //not bcz error execute
// }
// console.log(fruit); //not execute bcz  errror
/*--------------------------
          TDZ:cannot access varnmae before initilizatiion reassign v cut jta r redefine v cut jta h
          var me TDZ nii hta hai const r let me hta hai
----------------------------*/
// console.log("hello");//hello
// let varName = 10;
// console.log("line no 26", varName);//10
// varName = 10;
// console.log("line no 28", varName);//10
// let varName;//error bcz two let declare nd we cant do
/*=========================================*/
// console.log("hello");//hello
// console.log("line no 26", varName);//error cant access brfore declare of let but in var we can do bcz TDZ is not their
// let varName = 10;
// varName = 10;
// console.log("line no 28", varName);//10
// let varName;//error bcz two let declare nd we cant do

/*--------------------------
      Shadowing:
----------------------------*/
// Illegal shadowing
// let fruit = "apple";
// console.log(fruit);
// {
//   var fruit = "orange";
//   console.log(fruit);
// }
// console.log(fruit);

// correct
// const fruit = "apple";
// console.log(fruit);//apple
// {
//   const fruit = "orange";
//   console.log(fruit);//orange
// }
// console.log(fruit);//apple
// ===========================
// const fruit = "apple";
// console.log(fruit);
// {
//   let fruit = "orange";
//   console.log(fruit);
// }
// console.log(fruit);
// ===========================
// let fruit = "apple";
// console.log(fruit);//apple
// {
//   const fruit = "orange";
//   console.log(fruit);//orange
// }
// console.log(fruit);//apple
// ===========================
// var fruit = "apple";
// console.log(fruit); //apple
// {
//   var fruit = "orange";
//   console.log(fruit); //orange
// }
// console.log(fruit); //orange
// ===========================
