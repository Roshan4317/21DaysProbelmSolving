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

function sumDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

function isSmithNumber(n) {
  let temp = n;
  let sumPrimeFactors = 0;

  for (let i = 2; i <= temp; i++) {
    while (temp % i === 0) {
      sumPrimeFactors += sumDigits(i);
      temp = temp / i;
    }
  }

  if (sumDigits(n) === sumPrimeFactors) {
    return true;
  }
  return false;
}

let n = 666;

if (isSmithNumber(n)) {
  console.log("Smith Number");
} else {
  console.log("Not a Smith Number");
}

// *********************************************************************************************
