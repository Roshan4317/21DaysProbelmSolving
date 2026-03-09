// ClassWork

// 1. Check if a number is Prime or not

// function isPrime(num) {
//   let factors = [];
//   for (let i = 1; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       factors.push(i);
//       const anotherFactor = num / i;
//       if (i !== anotherFactor) factors.push(anotherFactor);
//     }
//   }
//   return factors.length === 2 ? "Prime Number" : "Not a Prime Number";
// }

// console.log(isPrime(7));
// console.log(isPrime(10));

// function IsPrime(num) {
//   if (num <= 1) {
//     return "Not a Prime Num";
//   }

//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return "Not a Prime Number";
//     }
//   }

//   return "Prime Number";
// }

// console.log(IsPrime(8));
// console.log(IsPrime(17));

// *********************************************************************************************

// 2. Check if two Numbers are Co-Prime

// function areCoPrime(a, b) {
//   let divisor = a < b ? a : b;
//   let dividend = a > b ? a : b;

//   while (dividend % divisor !== 0) {
//     const remainder = dividend % divisor;
//     dividend = divisor;
//     divisor = remainder;
//   }

//   return divisor === 1 ? "Co-Prime" : "Not a Co-Prime";
// }

// console.log(areCoPrime(8, 15));
// console.log(areCoPrime(8, 12));

// function HCF(num1, num2) {
//   let divisor = num1 < num2 ? num1 : num2;
//   let dividend = num1 > num2 ? num1 : num2;

//   while (dividend % divisor !== 0) {
//     const remainder = dividend % divisor;
//     dividend = divisor;
//     divisor = remainder;
//   }

//   return divisor;
// }

// function isCoPrime(num1, num2) {
//   const result = HCF(num1, num2);

//   return result === 1 ? "CO-Prime" : "Not Co-Prime";
// }

// console.log(isCoPrime(8, 15));
// console.log(isCoPrime(8, 14));

// *********************************************************************************************

// 3. Print Fibonacci Series up to N Terms

// function fibonacci(terms) {
//   let series = [0, 1];

//   for (let i = 2; i < terms; i++) {
//     series.push(series[i - 1] + series[i - 2]);
//   }

//   return series;
// }

// console.log(fibonacci(10));

// function fibonacci(term) {
//   let a = 0;
//   let b = 1;
//   console.log(a);
//   console.log(b);

//   for (let i = 2; i < term; i++) {
//     let next = a + b;
//     console.log(next);
//     a = b;
//     b = next;
//   }
// }

// console.log(fibonacci(10));

// *********************************************************************************************

// 4. Find the Nth Fibonacci Number

// function NthFibonacci(term) {
//   let fibonacci = [0, 1];

//   for (let i = 2; i < term; i++) {
//     fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
//   }

//   return fibonacci[fibonacci.length - 1];
// }

// console.log(NthFibonacci(8));

// function NthFibonacci(term) {
//   let a = 0;
//   let b = 1;

//   for (let i = 2; i < term; i++) {
//     const next = a + b;
//     a = b;
//     b = next;
//   }

//   return b;
// }

// console.log(NthFibonacci(8));

// *********************************************************************************************

// 5. Check if a Number Belongs to the Fibonacci Series

// function isFibonacciSeries(num) {
//   let series = [0, 1];

//   for (let i = 2; i < num; i++) {
//     const next = series[series.length - 1] + series[series.length - 2];
//     series.push(next);
//     if (next === num) {
//       return "Belongs to Fibonacci";
//     }
//   }

//   return "Not Belong";
// }

// console.log(isFibonacciSeries(21));

// *********************************************************************************************

// 6. Check if a number is a Palindrome

// function isPalindrome(num) {
//   let original = num;
//   let reversed = 0;

//   while (num > 0) {
//     let digit = num % 10;
//     reversed = reversed * 10 + digit;
//     num = Math.floor(num / 10);
//   }

//   return original === reversed ? "Palindrome Number" : "Not a Palindrome";
// }

// console.log(isPalindrome(121));
// console.log(isPalindrome(123));

// *********************************************************************************************

// HomeWork

// 1. Print All Prime Numbers up to N
// function printPrimesUpToN(N) {
//   for (let num = 2; num <= N; num++) {
//     let isPrime = true;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       console.log(num);
//     }
//   }
// }

// printPrimesUpToN(20);
