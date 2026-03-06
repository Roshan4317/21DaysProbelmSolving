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

function findLCM(a, b) {
  let divisor = a < b ? a : b;
  let dividend = a > b ? a : b;
  let loopCount = 0;

  while (dividend % divisor !== 0) {
    loopCount++;
    const remainder = dividend % divisor;
    dividend = divisor;
    divisor = remainder;
  }

  return (a * b) / divisor;
}
