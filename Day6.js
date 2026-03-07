// ClassWork

// 1. Check if a number is Prime or not

// function isPrime(num) {
//   if (num <= 1) return false;

//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }

//   return true;
// }

// console.log(isPrime(7));
// console.log(isPrime(10));

// *********************************************************************************************

// 2. Check if two Numbers are Co-Prime

// function HCF(a, b) {
//   let divisor = a < b ? a : b;
//   let dividend = a > b ? a : b;

//   while (dividend % divisor !== 0) {
//     let remainder = dividend % divisor;
//     dividend = divisor;
//     divisor = remainder;
//   }

//   return divisor;
// }

// function areCoPrime(num1, num2) {
//   return HCF(num1, num2) === 1;
// }

// console.log(areCoPrime(8, 15));
// console.log(areCoPrime(8, 12));
