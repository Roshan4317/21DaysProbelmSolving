// ClassWork

// 1. Print All Factors of a Number

// function allFactors(num) {
//   const factors = [];

//   for (let i = 1; i <= num; i++) {
//     if (num % i === 0) {
//       factors.push(i);
//     }
//   }

//   return factors;
// }

// console.log(allFactors(24));

// function allFactors(num) {
//   const factors = [num];

//   for (let i = 1; i <= num/2; i++) {
//     if (num % i === 0) {
//       factors.push(i);
//     }
//   }

//   return factors;
// }

// console.log(allFactors(24));

// function getAllFactors(num) {
//   const factors = [];

//   for (let i = 1; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       factors.splice(factors.length / 2, 0, i);
//       const anotherFactor = num / i;
//       if (i != anotherFactor)
//         factors.splice(factors.length / 2 + 1, 0, anotherFactor);
//     }
//   }

//   return factors;
// }

// console.log(getAllFactors(100));

// *********************************************************************************************

// 2. Print All Multiples of a Number up to N

// function multiplesOfNumber(num, limit) {
//   let multiples = [];

//   for (let i = num; i <= limit; i += num) {
//     multiples.push(i);
//   }

//   return multiples;
// }

// console.log(multiplesOfNumber(4, 30));

// function multiplesOfNumber(num, limit) {
//   let multiples = [];

//   for (let i = 1; i <= limit / num; i++) {
//     multiples.push(num * i);
//   }

//   return multiples;
// }

// console.log(multiplesOfNumber(4, 30));

// *********************************************************************************************

// 3. Find the HCF (Highest Common Factor) or GCD of Two Numbers

// function HCF(num1, num2) {
//   const factorsOFNum1 = [];
//   let commonFactor = 0;

//   for (let i = 1; i <= Math.sqrt(num1); i++) {
//     if (num1 % i === 0) {
//       factorsOFNum1.splice(factorsOFNum1.length / 2, 0, i);
//       const pairFactor = num1 / i;
//       if (i != pairFactor)
//         factorsOFNum1.splice(factorsOFNum1.length / 2 + 1, 0, pairFactor);
//     }
//   }

//   for (let i = factorsOFNum1.length - 1; i >= 1; i--) {
//     if (num2 % factorsOFNum1[i] === 0) {
//       return (commonFactor = factorsOFNum1[i]);
//     }
//   }

//   return commonFactor;
// }

// console.log(HCF(12, 16));
// console.log(HCF(12, 18));

// function HCF(num1, num2) {
//   let dividend = Math.max(num1, num2);
//   let divisor = Math.min(num1, num2);

//   while (dividend % divisor != 0) {
//     const remainder = dividend % divisor;
//     dividend = divisor;
//     divisor = remainder;
//   }

//   return divisor;
// }

// console.log(HCF(12, 16));
// console.log(HCF(12, 18));

// *********************************************************************************************

// 4. Find the LCM (Least Common Multiple) of Two Numbers

// function LCM(num1, num2) {
//   let divisor = num1 < num2 ? num1 : num2;
//   let dividend = num1 > num2 ? num1 : num2;

//   while (dividend % divisor !== 0) {
//     const remainder = dividend % divisor;
//     dividend = divisor;
//     divisor = remainder;
//   }

//   return (num1 * num2) / divisor;
// }

// console.log(LCM(12, 18));

// *********************************************************************************************

// 5. Count the Total Number of Factors of a Number

// function totalNumberOFFactors(num) {
//   const factors = [];

//   for (let i = 1; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       factors.push(i);
//       const anotherFactor = num / i;
//       factors.push(anotherFactor);
//     }
//   }

//   return `Total number of Factors of ${num} is ${factors.length}`;
// }

// console.log(totalNumberOFFactors(12));

// *********************************************************************************************

// HomeWork

// 1. Sum of All Factors of a Number

// function sumOfAllFactors(num) {
//   const factors = [];

//   for (let i = 1; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       factors.push(i);
//       let anotherFactor = num / i;
//       factors.push(anotherFactor);
//     }
//   }

//   const sum = factors.reduce((acc, curr) => (acc += curr), 0);
//   return sum;
// }

// console.log(sumOfAllFactors(12));

// *********************************************************************************************

// 2. Find the Greatest Factor of a Number (Other Than Itself)

// function greatestFactorOtherThanItself(num) {
//   const factors = [];

//   for (let i = 1; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       factors.splice(factors.length / 2, 0, i);
//       const anotherFactor = num / i;
//       factors.splice(factors.length / 2 + 1, 0, anotherFactor);
//     }
//   }

//   return factors[factors.length - 2];
// }

// console.log(greatestFactorOtherThanItself(36));

// *********************************************************************************************
// 3.  Check if a Number is a Perfect Number

// function IsPerfectNumber(num) {
//   const factors = [];
//   let sum = 0;
//   for (let i = 1; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       factors.splice(factors.length / 2, 0, i);
//       const anotherFactor = num / i;
//       if (i !== anotherFactor)
//         factors.splice(factors.length / 2 + 1, 0, anotherFactor);
//     }
//   }

//   for (let i = 0; i < factors.length - 1; i++) {
//     sum += factors[i];
//   }

//   return num === sum ? "Perfect Number" : "Not a perfect Number";
// }

// console.log(IsPerfectNumber(28));

// *********************************************************************************************

// 4. Find the HCF and LCM of Three Numbers

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

// function LCM(num1, num2) {
//   return (num1 * num2) / HCF(num1, num2);
// }

// function HCFAndLCM(num1, num2, num3) {
//   const HCF12 = HCF(num1, num2);
//   const HCFOf123 = HCF(HCF12, num3);

//   const LCM12 = LCM(num1, num2);
//   const LCMOf123 = LCM(LCM12, num3);

//   return { HCFOf123, LCMOf123 };
// }

// console.log(HCFAndLCM(8, 12, 16));
