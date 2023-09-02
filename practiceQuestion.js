/*`Q1.  Print Fizz Buzz.
Description: Write a program that prints the numbers from
 1 to 20 and for multiples of 
'3' print "Fizz"  
'5' print "Buzz"
'3' and '5' both print "FizzBuzz"
else number itself */

// for (let i = 1; i <= 20; i++) {
//   if (i % 15 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else {
//     console.log(i);
//   }
// }

/*
Q2: Print All Primes Till N
Easy  Prev   Next
1. You've to print all prime numbers between a range. 
2. Take as input "low", the lower limit of range.
3. Take as input "high", the higher limit of range.
4. For the range print all the primes numbers between low and high (both included). */
// let low = 1,
//   high = 100;
// for (let i = low; i < high; i++) {
//   let count = 0;
//   let squareRoot = Math.floor(Math.sqrt(i));
//   for (let j = 2; j <= squareRoot; j++) {
//     if (i % j === 0) {
//       count++;
//     }
//   }
//   if (count === 0) {
//     console.log(i);
//   }
// a
// function a(p) {
//   console.log("hii", p);
//   b();
//   return "answer";
// }
// function b() {
//   console.log("ali");
//   // return "alli";
// }
// let ans = a(b);
// // console.log(ans);
