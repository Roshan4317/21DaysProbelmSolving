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

// function isFibonacciSeries(num) {
//   let fibonacci = [0, 1];

//   for (let i = 2; true; i++) {
//     const next = fibonacci[i - 1] + fibonacci[i - 2];

//     if (next > num) {
//       break;
//     }
//     fibonacci.push(next);
//   }

//   return num === fibonacci[fibonacci.length - 1] ? "Yes" : "No";
// }

// console.log(isFibonacciSeries(13));

// function isFibonacciSeries(num) {
//   const fibonacci = [0, 1];

//   for (let i = 2; true; i++) {
//     const next = fibonacci[i - 1] + fibonacci[i - 2];
//     if (num === next || num === 0) {
//       return "Yes";
//     }
//     if (next > num) break;
//     fibonacci.push(next);
//   }
//   return "No";
// }

// console.log(isFibonacciSeries(5));
// *********************************************************************************************

// 6. Check if a number is a Palindrome

// function isPalindrome(num) {
//   const originalNum = num;
//   const digits = [];

//   while (num >= 1) {
//     digits.push(num % 10);
//     num = Math.floor(num / 10);
//   }

//   const reversedNum = Number(digits.join(""));
//   return reversedNum === originalNum ? "Yes Palindrome" : "Not a Palindrome";
// }

// console.log(isPalindrome(121));
// console.log(isPalindrome(123));

// *********************************************************************************************

// HomeWork

// 1. Print All Prime Numbers up to N
// function printPrimesUpToN(num) {
//   for (let i = 2; i <= num; i++) {
//     let isPrime = true;

//     for (let j = 1; j <= Math.sqrt(j); j++) {
//       if (i % j === 0) {
//         isPrime = false;
//         break;
//       }
//     }

//     if (isPrime) console.log(i);
//   }
// }

// printPrimesUpToN(20);

// printPrimesUpToN(20);

// function printPrimesUpToN(num) {
//   const Prime = [];

//   for (let i = 2; i <= num; i++) {
//     let isPrime = true;

//     for (let j = 2; j <= Math.sqrt(i); j++) {
//       if (i % j === 0) {
//         isPrime = false;
//       }
//     }

//     if (isPrime) {
//       Prime.push(i);
//     }
//   }

//   return Prime;
// }

// console.log(printPrimesUpToN(20));

// *********************************************************************************************

// 2. Sum of All Prime Numbers till N
// function sumPrimesUpToN(N) {
//   let sum = 0;
//   for (let num = 2; num <= N; num++) {
//     let isPrime = true;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       sum += num;
//     }
//   }
//   return sum;
// }

// console.log(sumPrimesUpToN(20));

// function sumPrimesUpToN(num) {
//   let PrimeNumbers = [];

//   for (let i = 2; i <= num; i++) {
//     let prime = true;

//     for (let j = 2; j <= Math.sqrt(i); j++) {
//       if (i % j === 0) {
//         prime = false;
//         break;
//       }
//     }

//     if (prime) {
//       PrimeNumbers.push(i);
//     }
//   }

//   const totalSum = PrimeNumbers.reduce((acc, curr) => {
//     return (acc += curr);
//   }, 0);

//   return totalSum;
// }

// console.log(sumPrimesUpToN(10));

// *********************************************************************************************

//3. Check if Two Numbers are Twin Primes
// function isPrime(num) {
//   if (num < 2) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }

// function areTwinPrimes(a, b) {
//   if (isPrime(a) && isPrime(b) && Math.abs(a - b) === 2) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(areTwinPrimes(11, 13));
// console.log(areTwinPrimes(17, 19));
// console.log(areTwinPrimes(14, 16));

// function isPrime(num) {
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// function areTwinPrimes(num1, num2) {
//   const firstNumber = isPrime(num1);
//   const secondNumber = isPrime(num2);

//   if (firstNumber && secondNumber) {
//     if (Math.abs(num1 - num2) === 2) {
//       return "Twin Prime";
//     }
//   }

//   return "Not a Twin Prime";
// }

// console.log(areTwinPrimes(11, 13));

// *********************************************************************************************

// 4. Print All Fibonacci Numbers up to a Given Limit

// function fibonacciUptoLimit(limit) {
//   const fibonacci = [0, 1];

//   for (let i = 2; true; i++) {
//     const next = fibonacci[i - 1] + fibonacci[i - 2];
//     if (next > limit) break;
//     fibonacci.push(next);
//   }

//   return fibonacci;
// }

// console.log(fibonacciUptoLimit(100));

// *********************************************************************************************

// 5. Generate Fibonacci Numbers Within a Range

// function fibonacciWithInRange(start, end) {
//   const fibonacci = [0, 1];
//   const newFibonacci = [];

//   while (true) {
//     const next =
//       fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
//     if (next > end) break;
//     fibonacci.push(next);
//     if (next > start) {
//       newFibonacci.push(next);
//     }
//   }

//   return newFibonacci;
// }

// console.log(fibonacciWithInRange(10, 100));

// *********************************************************************************************

// 6. Find the Sum of Even Fibonacci Numbers up to N Terms

// function sumOfEvenFibonacci(num) {
//   const fibonacci = [0, 1];
//   let sum = 0;

//   for (let i = 2; i < num; i++) {
//     const next = fibonacci[i - 1] + fibonacci[i - 2];
//     if (next % 2 === 0) {
//       sum += next;
//     }
//     fibonacci.push(next);
//   }

//   return sum;
// }
// console.log(sumOfEvenFibonacci(10));

// *********************************************************************************************

// 7. Check if the Sum of Two Consecutive Fibonacci Numbers is Prime

// function isConsecutivePrime(limit) {
//   let fibonacci = [0, 1];

//   while (true) {
//     const next =
//       fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
//     if (next > limit) break;
//     let factors = [];
//     for (let i = 1; i <= Math.sqrt(next); i++) {
//       if (next % i === 0) {
//         factors.push(i);
//         const nextFactor = next / i;
//         if (i !== nextFactor) factors.push(nextFactor);
//       }
//     }

//     factors.length === 2 ? console.log(`${next} is Prime`) : "";
//     fibonacci.push(next);
//   }

//   return fibonacci;
// }

// console.log(isConsecutivePrime(100));

// *********************************************************************************************

// 8. Print First N Prime Fibonacci Numbers

// function isPrime(num) {
//   if (num <= 1) {
//     return false;
//   }

//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// function firstNPrimeFibonacci(num) {
//   let fibonacci = [0, 1];
//   const primeArray = [];

//   while (primeArray.length < num) {
//     const next =
//       fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
//     fibonacci.push(next);
//     const prime = isPrime(next);
//     if (prime) {
//       primeArray.push(next);
//     }
//   }
//   return primeArray;
// }

// console.log(firstNPrimeFibonacci(5));
