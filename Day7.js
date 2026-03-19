// ClassWork

// 1. Find the Prime Factorization (Return as an Array)
// function isPrime(num) {
//   if (num <= 1) {
//     return false;
//   }

//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }

//   return true;
// }

// function primeFactorization(num) {
//   let primeFactorization = [];
//   let dividend = num;

//   if (isPrime(num)) {
//     primeFactorization.push(num);
//     return primeFactorization;
//   }

//   while (dividend > 1) {
//     for (let j = 2; j <= dividend; j++) {
//       if (dividend % j === 0) {
//         if (isPrime(j)) {
//           primeFactorization.push(j);
//         }
//         dividend = dividend / j;
//         break;
//       }
//     }
//   }

//   return primeFactorization;
// }

// console.log(primeFactorization(45));

// function primeFactorization(num) {
//   const primeFactors = [];
//   let factor = 2;

//   while (factor <= Math.sqrt(num)) {
//     while (num % factor === 0) {
//       primeFactors.push(factor);
//       num = num / factor;
//     }
//     factor++;
//   }

//   if (num > 2) {
//     primeFactors.push(num);
//   }

//   return primeFactors;
// }

// console.log(primeFactorization(33));

// function primeFactorization(num) {
//   const primeFactors = [];

//   while (num % 2 === 0) {
//     primeFactors.push(2);
//     num = num / 2;
//   }

//   let factor = 3;
//   while (factor <= Math.sqrt(num)) {
//     while (num % factor === 0) {
//       primeFactors.push(factor);
//       num = num / factor;
//     }
//     factor += 2;
//   }

//   if (num > 2) {
//     primeFactors.push(num);
//   }
//   return primeFactors;
// }

// console.log(primeFactorization(84));

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

// function primeFactorization(num) {
//   const primeFactors = [];

//   for (let i = 2; i <= Math.sqrt(num) + 1; i++) {
//     for (let j = 2; j <= i; j++) {
//       if (num % j === 0) {
//         const checkIfPrime = isPrime(j);
//         if (checkIfPrime) {
//           primeFactors.push(j);
//           num = num / j;
//           if (isPrime(num)) primeFactors.push(num);
//           break;
//         }
//       }
//     }
//   }

//   return primeFactors;
// }

// console.log(primeFactorization(84));

// function primeFactorization(num) {
//   const primeFactors = [];
//   let factor = 2;

//   while (factor <= Math.sqrt(num)) {
//     while (num % factor === 0) {
//       primeFactors.push(factor);
//       num = num / factor;
//     }
//     factor++;
//   }

//   if (num > 2) primeFactors.push(num);
//   return primeFactors;
// }

// console.log(primeFactorization(84));

// function primeFactorization(num) {
//   const primeFactors = [];

//   while (num % 2 === 0) {
//     primeFactors.push(2);
//     num = num / 2;
//   }

//   let factor = 3;
//   while (factor <= Math.sqrt(num)) {
//     while (num % factor === 0) {
//       primeFactors.push(factor);
//       num = num / factor;
//     }
//     factor += 2;
//   }
//   if (num > 2) primeFactors.push(num);
//   return primeFactors;
// }
// console.log(primeFactorization(360));

// *********************************************************************************************

// 2. Factorization in Exponent Form
// function primeFactorizationInExponentForm(num) {
//   const primeFactors = {};
//   while (num % 2 === 0) {
//     primeFactors[2] = (primeFactors[2] || 0) + 1;
//     num = num / 2;
//   }

//   let factor = 3;
//   while (factor <= Math.sqrt(num)) {
//     while (num % factor === 0) {
//       primeFactors[factor] = (primeFactors[factor] || 0) + 1;
//       num = num / factor;
//     }
//     factor += 2;
//   }

//   if (num > 2) primeFactors[num] = (primeFactors[num] || 0) + 1;
//   let output = "";
//   Object.keys(primeFactors).forEach((key, i) => {
//     output +=
//       `${key}^${primeFactors[key]}` +
//       (i !== Object.keys(primeFactors).length - 1 ? " x " : "");
//   });
//   return output;
// }

// console.log(primeFactorizationInExponentForm(160));

// function primeFactorizationInExponentForm(num) {
//   const primeFactors = [];

//   while (num % 2 === 0) {
//     primeFactors.push(2);
//     num /= 2;
//   }

//   let factor = 3;
//   while (factor <= Math.sqrt(num)) {
//     while (num % factor === 0) {
//       primeFactors.push(factor);
//       num /= factor;
//     }
//     factor += 2;
//   }

//   if (num > 1) primeFactors.push(num);

//   let count = {};
//   primeFactors.forEach((value) => {
//     count[value] = (count[value] || 0) + 1;
//   });

//   let output = [];

//   for (let number in count) {
//     const repeat = count[number];
//     output.push(`${number}^${repeat} `);
//   }

//   return output.join("x ");
// }

// console.log(primeFactorizationInExponentForm(360));

// *********************************************************************************************

// 3. Distinct Prime Factor Count

// function distinctPrimeFactors(num) {
//   const factors = {};

//   while (num % 2 === 0) {
//     factors[2] = (factors[2] || 0) + 1;
//     num /= 2;
//   }

//   let primeFactor = 3;

//   while (primeFactor <= Math.sqrt(num)) {
//     while (num % primeFactor === 0) {
//       factors[primeFactor] = (factors[primeFactor] || 0) + 1;
//       num /= primeFactor;
//     }

//     primeFactor += 2;
//   }
//   if (num > 2) factors[num] = (factors[num] || 0) + 1;

//   const distinctPrimes = Object.keys(factors).length;

//   return `Distinct Prime Factors = ${distinctPrimes}`;
// }

// console.log(distinctPrimeFactors(30));

// *********************************************************************************************

// 4. Check if a Number Is a Powerful Number

// function isPowerfulNumber(num) {
//   let originalNum = num;
//   const primeFactor = {};

//   while (num % 2 === 0) {
//     primeFactor[2] = (primeFactor[2] || 0) + 1;
//     num /= 2;
//   }

//   let factor = 3;

//   while (factor <= Math.sqrt(num)) {
//     while (num % factor === 0) {
//       primeFactor[factor] = (primeFactor[factor] || 0) + 1;
//       num /= factor;
//     }
//     factor += 2;
//   }

//   if (num > 2) primeFactor[num] = (primeFactor[num] || 0) + 1;

//   if (Object.values(primeFactor).some((el) => el === 1)) {
//     return `No ${originalNum} is not a Powerful Number`;
//   }

//   return `Yes ${originalNum} is a Powerful Number`;
// }

// console.log(isPowerfulNumber(16));

// *********************************************************************************************

// 5.  Find the Product of All Distinct Prime Factors

// function productOfAllDistinctPrimeFactors(num) {
//   let primeFactors = {};
//   while (num % 2 === 0) {
//     primeFactors[2] = (primeFactors[2] || 0) + 1;
//     num /= 2;
//   }

//   let factor = 3;
//   while (factor <= Math.sqrt(num)) {
//     while (num % factor === 0) {
//       primeFactors[factor] = (primeFactors[factor] || 0) + 1;
//       num /= factor;
//     }

//     factor++;
//   }

//   if (num > 2) primeFactors[num] = (primeFactors[num] || 0) + 1;

//   const result = Object.keys(primeFactors).reduce(
//     (acc, curr) => (acc *= Number(curr)),
//     1,
//   );

//   return result;
// }

// console.log(productOfAllDistinctPrimeFactors(150));

// *********************************************************************************************

// HomeWork

// 1. Check if a Number Is a Square-Free Number
// function isSquareFreeNumber(num) {
//   const primeFactors = [];

//   while (num % 2 === 0) {
//     primeFactors.push(2);
//     num /= 2;
//   }

//   let factor = 3;

//   while (factor <= Math.sqrt(num)) {
//     while (num % factor === 0) {
//       primeFactors.push(factor);
//       num /= factor;
//     }

//     factor += 2;
//   }

//   if (num > 2) primeFactors.push(num);

//   if (new Set(primeFactors).size !== primeFactors.length) {
//     return `Given number is not a square Free`;
//   }

//   return "Given number is a square Free";
// }

// console.log(isSquareFreeNumber(80));

// *********************************************************************************************

// 2. Check if a Number Is a Smith Number
// For smith number, it should be composite

// function isPrime(num) {
//   if (num <= 1) return false;

//   if (num === 2) return true;

//   if (num % 2 === 0) {
//     return false;
//   }

//   for (let i = 3; i <= Math.sqrt(num); i += 2) {
//     if (num % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// function sumOfDigits(num) {
//   let digits = [];

//   while (num >= 1) {
//     digits.push(num % 10);
//     num = Math.floor(num / 10);
//   }

//   const sum = digits.reduce((acc, curr) => (acc += curr), 0);

//   return sum;
// }

// function isASmithNumber(num) {
//   if (isPrime(num)) {
//     return `Given Num is Not a Smith Number`;
//   }

//   const sumOfOriginalNum = sumOfDigits(num);

//   const primeFactor = [];

//   while (num % 2 === 0) {
//     primeFactor.push(2);
//     num /= 2;
//   }

//   let factor = 3;

//   while (factor <= Math.sqrt(num)) {
//     while (num % factor === 0) {
//       primeFactor.push(factor);
//       num /= factor;
//     }
//     factor += 2;
//   }

//   if (num > 2) primeFactor.push(num);

//   const primeDigit = Number(primeFactor.join(""));

//   const sumOfPrimeDigit = sumOfDigits(primeDigit);

//   return sumOfOriginalNum === sumOfPrimeDigit
//     ? "Given Num is Smith Number"
//     : "Given Num is Not Smith Number";
// }

// console.log(isASmithNumber(131));

// *********************************************************************************************

// 3. Check if a Number Is an Ugly Number

// function isUglyNumber(num) {
//   if (num === 1) return "Ugly Number";

//   const primeFactors = [];

//   while (num % 2 === 0) {
//     primeFactors.push(2);
//     num /= 2;
//   }

//   let factors = 3;

//   while (factors <= Math.sqrt(num)) {
//     while (num % factors === 0) {
//       primeFactors.push(factors);
//       num /= factors;
//     }
//     factors += 2;
//   }

//   if (num > 2) primeFactors.push(num);
//   return Math.max(...primeFactors) >= 7 ? "Not a Ugly Number" : "Ugly Number";
// }

// console.log(isUglyNumber(18));

// function isUglyNumber(num) {
//   while (num % 2 == 0) {
//     num /= 2;
//   }
//   while (num % 3 === 0) {
//     num /= 3;
//   }
//   while (num % 5 === 0) {
//     num /= 5;
//   }

//   return num === 1 ? "Ugly Number" : "Not a Ugly Number";
// }

// console.log(isUglyNumber(20));

// *********************************************************************************************

// 4. Check if a Number Is a Kaprekar Number
// function isKaprekar(n) {
//   let squareOfNumber = n ** 2;

//   const digits = [];
//   while (squareOfNumber >= 1) {
//     digits.unshift(squareOfNumber % 10);
//     squareOfNumber = Math.floor(squareOfNumber / 10);
//   }

//   for (let i = 1; i < digits.length; i++) {
//     const left = Number(digits.slice(0, i).join(""));
//     const right = Number(digits.slice(i).join(""));
//     if (n === left + right) {
//       return "Karprekar Number";
//     }
//   }

//   return "Not a Karprekar Number";
// }

// console.log(isKaprekar(45));
// console.log(isKaprekar(48));
// console.log(isKaprekar(9));

// function isKaprekar(num) {
//   if (num === 1) return "Given num is Kaprekar Number";

//   const squareOfNumber = num ** 2;
//   const str = String(squareOfNumber).split("");

//   for (let i = 1; i < str.length; i++) {
//     let left = Number(str.slice(0, i).join(""));
//     let right = Number(str.slice(i).join(""));
//     if (left + right === num) return "Given num is Kaprekar Number";
//   }

//   return "Given num is  not Kaprekar Number";
// }

// console.log(isKaprekar(45));
// console.log(isKaprekar(48));
// console.log(isKaprekar(9));

// *********************************************************************************************

// 5. Check if a Number Is a Happy Number

// function isHappyNumber(num) {
//   if (num === 1) return "Given Number is Happy Number";

//   const seen = new Set();

//   while (num !== 1 && !seen.has(num)) {
//     seen.add(num);
//     let digit = [];

//     while (num > 0) {
//       digit.unshift(num % 10);
//       num = Math.floor(num / 10);
//     }

//     const result = digit.reduce((acc, curr) => (acc += curr ** 2), 0);
//     num = result;
//     if (num === 1) return "Given Number is Happy Number";
//   }

//   return "Given Number is not Happy Number";
// }

// console.log(isHappyNumber(14));
// console.log(isHappyNumber(19));
// console.log(isHappyNumber(13));

// function isHappyNumber(num) {
//   const seen = new Set();

//   while (num !== 1 && !seen.has(num)) {
//     seen.add(num);
//     let digit = 0;
//     while (num > 0) {
//       const addingNum = num % 10;
//       digit += addingNum * addingNum;
//       num = Math.floor(num / 10);
//     }

//     num = digit;
//   }

//   return num === 1
//     ? "Given Number is Happy Number"
//     : "Given Number is not Happy Number";
// }

// console.log(isHappyNumber(14));
// console.log(isHappyNumber(19));
// console.log(isHappyNumber(13));

// *********************************************************************************************

// 6.  Number Base Conversion (Any Base to Any Base)

// function convertBase(num, fromBase, toBase) {
//   let number = Number(num);
//   let digit = [];

//   while (number > 0) {
//     digit.unshift(number % 10);
//     number = Math.floor(number / 10);
//   }

//   let result = 0;

//   digit.forEach((num, i) => {
//     result += num * fromBase ** (digit.length - i - 1);
//   });

//   return result;
// }

// console.log(convertBase("1010", 2, 10));

// *********************************************************************************************

// 7. Return Prime Factors Without Repetition

// function distinctPrimeFactors(num) {
//   const result = new Set();

//   while (num % 2 === 0) {
//     result.add(2);
//     num /= 2;
//   }

//   let factor = 3;

//   while (factor <= Math.sqrt(num)) {
//     while (num % factor === 0) {
//       result.add(factor);
//       num /= factor;
//     }
//     factor++;
//   }

//   if (num > 1) result.add(num);

//   return result;
// }

// console.log(distinctPrimeFactors(84));

// function distinctPrimeFactors(num) {
//   let factor = [];

//   while (num % 2 === 0) {
//     if (!factor.includes(2)) factor.push(2);
//     num /= 2;
//   }

//   let singleFactor = 3;

//   while (singleFactor <= Math.sqrt(num)) {
//     while (num % singleFactor === 0) {
//       if (!factor.includes(singleFactor)) factor.push(singleFactor);
//       num /= singleFactor;
//     }

//     singleFactor += 2;
//   }

//   if (num > 1 && !factor.includes(num)) factor.push(num);
//   return factor;
// }

// console.log(distinctPrimeFactors(84));

// *********************************************************************************************

// 8. Count Total Prime Factors

// function totalPrimeFactors(num) {
//   let count = 0;

//   while (num % 2 === 0) {
//     count++;
//     num /= 2;
//   }

//   let factor = 3;
//   while (factor <= Math.sqrt(num)) {
//     while (num % factor === 0) {
//       count++;
//       num /= factor;
//     }
//     factor += 2;
//   }

//   if (num > 1) count++;

//   return count;
// }

// console.log(totalPrimeFactors(360));

// *********************************************************************************************

// 9. Check if Number Has Exactly Two Distinct Prime Factors

// function twoDistinctPrimeFactors(num) {
//   const set = new Set();

//   while (num % 2 === 0) {
//     set.add(2);
//     num /= 2;
//   }

//   let factor = 3;
//   while (factor <= Math.sqrt(num)) {
//     while (num % factor === 0) {
//       set.add(factor);
//       num /= factor;
//     }
//     factor += 2;
//   }

//   if (num > 1) set.add(num);

//   return set.size === 2;
// }

// console.log(twoDistinctPrimeFactors(12));

// *********************************************************************************************

// 10. Swap Variable without using third variable

// function swap(num1, num2) {
//   const [a, b] = [num2, num1];

//   return { a, b };
// }

// console.log(swap(5, 6));
