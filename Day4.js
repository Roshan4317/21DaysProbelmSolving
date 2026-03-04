// const digitList1 = [2, 4, 6, 5];
// const digitList2 = [7, 3, 1];

// const result1 = digitList1.reduce((acc, curr, index) => {
//   return (acc += curr * 10 ** index);
// }, 0);

// console.log(result1);

// const result2 = digitList2.reduce((acc, curr, index) => {
//   return (acc += curr * 10 ** index);
// }, 0);

// console.log(result2);

// ****************************************************************************************************************

// ClassWork

// 1. Split Number into Digits

// function splitNumbersIntoDigits(num) {
//   let digit = [];

//   while (num >= 1) {
//     let remainder = num % 10;
//     digit.unshift(remainder);
//     num = Math.floor(num / 10);
//   }
//   return digit;
// }

// console.log(splitNumbersIntoDigits(12345));

// function splitNumbersIntoDigits(num) {
//   let digits = [];

//   while (num % 10 >= 1) {
//     digits.unshift(num % 10);
//     num = Math.floor(num / 10);
//   }
//   return digits;
// }

// console.log(splitNumbersIntoDigits(12345975));

// ****************************************************************************************************************

// 2. Remove the Decimal Point Mathematically

// function removeDecimalPoint(num) {
//   while (!Number.isInteger(num)) {
//     num = num * 10;
//   }

//   return num;
// }

// console.log(removeDecimalPoint(12.12));

// function removeDecimalPoint(num) {
//   while (num != Math.floor(num)) {
//     num = num * 10;
//   }
//   return num;
// }

// console.log(removeDecimalPoint(12.112));

// function removeDecimalPoint(num) {
//   while (!Number.isInteger(num)) {
//     num = num * 10;
//   }

//   return num;
// }

// console.log(removeDecimalPoint(1233.34))

// ****************************************************************************************************************

// 3. Separate Whole and Fractional Parts of a Number

// function separateWholeAndFraction(num) {
//   const wholePart = Math.trunc(num);
//   const fractionPart = Number((num - wholePart).toFixed(10));

//   return `Whole = ${wholePart} Fraction = ${fractionPart}`;
// }

// console.log(separateWholeAndFraction(522.7522));

// function separateWholeAndFraction(num) {
//   const fractionPart = Number((num % 1).toFixed(10));
//   const wholePart = num - fractionPart;

//   return `Whole = ${wholePart} Fraction = ${fractionPart}`;
// }

// console.log(separateWholeAndFraction(522.7522));

// function separateWholeAndFraction(num) {
//   const fraction = Number((num % 1).toFixed(10));

//   const whole = num - fraction;

//   return `whole = ${whole} fraction = ${fraction}`;
// }
// console.log(separateWholeAndFraction(5.75));

// ****************************************************************************************************************

// 4. Count Whole and Fractional Digits Separately

// function separateByDecimals(n) {
//   let whole = Math.floor(n);

//   let fraction = Number((n - whole).toFixed(10));
//   return { whole, fraction };
// }

// function wholeNumberCount(n) {
//   let count = 0;
//   while (n !== 0) {
//     count++;
//     n = Math.floor(n / 10);
//   }
//   return count;
// }

// function fractionCount(n) {
//   while (n % 1 !== 0) {
//     n = Number(n * 10).toFixed(10);
//   }
//   return wholeNumberCount(n);
// }

// function main(n) {
//   const { whole, fraction } = separateByDecimals(n);

//   return {
//     wholeCount: wholeNumberCount(whole),
//     fractionCount: fractionCount(fraction),
//   };
// }

// const n = 12.345;
// console.log(main(n));

// function countWholeAndFraction(num) {
//   const fraction = Number((num % 1).toFixed(10));
//   let whole = num - fraction;

//   let fractionNum = fraction;
//   while (!Number.isInteger(fractionNum)) {
//     fractionNum = fractionNum * 10;
//   }

//   let fractionArray = [];

//   while (fractionNum % 10 >= 1) {
//     fractionArray.push(fractionNum % 10);
//     fractionNum = Math.floor(fractionNum / 10);
//   }

//   let wholeArray = [];

//   while (whole % 10 >= 1) {
//     wholeArray.push(whole % 10);
//     whole = Math.floor(whole / 10);
//   }

//   return `Whole Count = ${wholeArray.length} Fraction Count = ${fractionArray.length} `;
// }

// console.log(countWholeAndFraction(12.345));

// ****************************************************************************************************************

// 5. Generate a Decimal Number from Whole and Fractional Digits

// function decimalNumberFromWholeAndFraction(whole, fraction) {
//   const wholeValue = whole.reduce((acc, curr, index) => {
//     return (acc += curr * Math.pow(10, whole.length - index - 1));
//   }, 0);

//   const fractionValue = fraction.reduce((acc, curr, index) => {
//     return (acc += curr * Math.pow(10, fraction.length - index - 1));
//   }, 0);

//   return Number(`${wholeValue}.${fractionValue}`);
// }

// console.log(decimalNumberFromWholeAndFraction([1, 2, 3, 4, 1, 2], [3, 2, 4]));

// ****************************************************************************************************************

// 6. Reverse a Number

// function reverseANumber(num) {
//   const digit = [];

//   while (num >= 1) {
//     digit.unshift(num % 10);
//     num = Math.floor(num / 10);
//   }

//   const result = digit.reduce((acc, curr, index) => {
//     return (acc += curr * Math.pow(10, index));
//   }, 0);
//   return result;
// }

// console.log(reverseANumber(1234));

// ****************************************************************************************************************

// 7. Check if a Number is a Palindrome

function isPalindrome(num) {
  let original = num;
  let reversed = 0;

  while (num > 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }

  return original === reversed;
}

console.log(isPalindrome(128971));
console.log(isPalindrome(121));

// HomWork

// ****************************************************************************************************************

//1. Check if a Number is a ArmStrong Number

// function isArmStrong(num) {
//   const originalNumber = num;
//   const digit = [];

//   while (num > 0) {
//     digit.push(num % 10);
//     num = Math.floor(num / 10);
//   }

//   let result = 0;
//   for (let i = 0; i < digit.length; i++) {
//     result += digit[i] ** digit.length;
//   }

//   return originalNumber === result;
// }

// console.log(isArmStrong(407));

// ****************************************************************************************************************

// 2. Find the Sum of Digits

// function isArmStrong(num) {
//   const originalNumber = num;
//   const digit = [];

//   while (num > 0) {
//     digit.push(num % 10);
//     num = Math.floor(num / 10);
//   }

//   let result = 0;
//   for (let i = 0; i < digit.length; i++) {
//     result += digit[i] ** digit.length;
//   }

//   return originalNumber === result;
// }

// console.log(isArmStrong(407));
