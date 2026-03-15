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

//   return Object.keys(primeFactors).length;
// }

// console.log(primeFactorizationInExponentForm(30));

// *********************************************************************************************

// 4. Check if a Number Is a Powerful Number

// const primeFactors = {};
// function primeFactorizationInExponentForm(num) {
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

//   return Math.min(...Object.values(primeFactors)) >= 2;
// }

// console.log(primeFactorizationInExponentForm(35));

// *********************************************************************************************

// 5.  Find the Product of All Distinct Prime Factors

// function productOfDistinctPrimes(num) {
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
//   const distinctPrimes = [...new Set(primeFactors)];
//   return distinctPrimes.reduce((acc, val) => acc * val, 1);
// }

// console.log(productOfDistinctPrimes(84));

// *********************************************************************************************

// HomeWork

// 1. Check if a Number Is a Square-Free Number

// function isSquareFree(num) {
//   for (let i = 2; i * i <= num; i++) {
//     if (num % (i * i) === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// let n = 30;

// if (isSquareFree(n)) {
//   console.log("Square-Free Number");
// } else {
//   console.log("Not a Square-Free Number");
// }

// *********************************************************************************************

// 2. Check if a Number Is a Smith Number

// function sumDigits(num) {
//   let sum = 0;
//   while (num > 0) {
//     sum += num % 10;
//     num = Math.floor(num / 10);
//   }
//   return sum;
// }

// function isSmithNumber(n) {
//   let temp = n;
//   let sumPrimeFactors = 0;

//   for (let i = 2; i <= temp; i++) {
//     while (temp % i === 0) {
//       sumPrimeFactors += sumDigits(i);
//       temp = temp / i;
//     }
//   }

//   if (sumDigits(n) === sumPrimeFactors) {
//     return true;
//   }
//   return false;
// }

// let n = 666;

// if (isSmithNumber(n)) {
//   console.log("Smith Number");
// } else {
//   console.log("Not a Smith Number");
// }

// *********************************************************************************************

// 3. Check if a Number Is an Ugly Number

// function isUgly(n) {
//   if (n <= 0) return false;

//   let factors = [2, 3, 5];

//   for (let f of factors) {
//     while (n % f === 0) {
//       n = n / f;
//     }
//   }

//   return n === 1;
// }

// let n = 18;

// if (isUgly(5)) {
//   console.log("Ugly Number");
// } else {
//   console.log("Not Ugly");
// }

// *********************************************************************************************

// 4. Check if a Number Is a Kaprekar Number
// function isKaprekar(n) {
//   let square = n * n;
//   let str = square.toString();

//   for (let i = 1; i < str.length; i++) {
//     let left = parseInt(str.substring(0, i));
//     let right = parseInt(str.substring(i));

//     if (right !== 0 && left + right === n) {
//       return "Kaprekar Number";
//     }
//   }

//   return "Not a Kaprekar Number";
// }

// console.log(isKaprekar(45));
// console.log(isKaprekar(10));

// *********************************************************************************************

// 5. Check if a Number Is a Happy Number

// function isHappyNumber(n) {
//   let seen = new Set();

//   while (n !== 1 && !seen.has(n)) {
//     seen.add(n);
//     let sum = 0;

//     while (n > 0) {
//       let digit = n % 10;
//       sum += digit * digit;
//       n = Math.floor(n / 10);
//     }

//     n = sum;
//   }

//   return n === 1 ? "Happy Number" : "Not a Happy Number";
// }

// console.log(isHappyNumber(19));
// console.log(isHappyNumber(20));

// *********************************************************************************************

// 6.  Number Base Conversion (Any Base to Any Base)

// function convertBase(num, fromBase, toBase) {
//   let decimal = parseInt(num, fromBase);
//   return decimal.toString(toBase);
// }

// console.log(convertBase("1010", 2, 10));
// console.log(convertBase("255", 10, 16));
// console.log(convertBase("77", 8, 2));

// 7. Return Prime Factors Without Repetition
// function distinctPrimeFactors(num) {
//   const result = [];

//   while (num % 2 === 0) {
//     if (!result.includes(2)) result.push(2);
//     num /= 2;
//   }

//   let factor = 3;
//   while (factor <= Math.sqrt(num)) {
//     while (num % factor === 0) {
//       if (!result.includes(factor)) result.push(factor);
//       num /= factor;
//     }
//     factor += 2;
//   }

//   if (num > 1) result.push(num);

//   return result;
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
function twoDistinctPrimeFactors(num) {
  const set = new Set();

  while (num % 2 === 0) {
    set.add(2);
    num /= 2;
  }

  let factor = 3;
  while (factor <= Math.sqrt(num)) {
    while (num % factor === 0) {
      set.add(factor);
      num /= factor;
    }
    factor += 2;
  }

  if (num > 1) set.add(num);

  return set.size === 2;
}

console.log(twoDistinctPrimeFactors(12));
