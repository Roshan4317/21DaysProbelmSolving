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

//   while (fractionNum >= 1) {
//     fractionArray.push(fractionNum % 10);
//     fractionNum = Math.floor(fractionNum / 10);
//   }

//   let wholeArray = [];

//   while (whole >= 1) {
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

// function IsPalindrome(num) {
//   const initialNum = num;

//   const digit = [];

//   while (num >= 1) {
//     digit.push(num % 10);
//     num = Math.floor(num / 10);
//   }

//   const result = digit.reduce((acc, curr, index) => {
//     return (acc += curr * Math.pow(10, digit.length - index - 1));
//   }, 0);

//   return initialNum === result ? "Given num is Palindrome" : "Not Palindrome";
// }

// console.log(IsPalindrome(111));

// ****************************************************************************************************************

// 8. Check if a Number is an Armstrong Number (also called a Narcissistic Number)

// function isArmStrong(num) {
//   let initialNum = num;
//   const digit = [];

//   while (num > 0) {
//     digit.unshift(num % 10);
//     num = Math.floor(num / 10);
//   }

//   const result = digit.reduce((acc, curr, index) => {
//     return (acc += Math.pow(curr, digit.length));
//   }, 0);

//   return initialNum === result ? "ArmStrong Number" : "Not ArmStrong Number";
// }

// console.log(isArmStrong(1634));

// ****************************************************************************************************************

// HomWork

// ****************************************************************************************************************

// 1. Find the Sum of Digits

// function sumOfDigits(num) {
//   const digit = [];

//   while (num > 0) {
//     digit.push(num % 10);
//     num = Math.floor(num / 10);
//   }

//   const sum = digit.reduce((acc, curr) => {
//     return (acc += curr);
//   }, 0);

//   return sum;
// }

// console.log(sumOfDigits(987));

// ****************************************************************************************************************

// 2. Find the Average of Digits

// function averageOfDigits(num) {
//   const digit = [];

//   while (num > 0) {
//     digit.push(num % 10);
//     num = Math.floor(num / 10);
//   }
//   const sumResult = digit.reduce((acc, curr) => {
//     return (acc += curr);
//   });

//   return Number((sumResult / digit.length).toFixed(2));
// }

// console.log(averageOfDigits(4567));

// ****************************************************************************************************************

// 3. Find the Largest and Smallest Digit in a Number

// function largestAndSmallest(num) {
//   const digit = [];

//   while (num > 0) {
//     digit.push(num % 10);
//     num = Math.floor(num / 10);
//   }

//   let largest = 0;
//   let smallest = 9;
//   console.log(digit);

//   [1, 3, 8, 4, 9];

//   for (let i = 0; i < digit.length; i++) {
//     if (digit[i] >= largest) {
//       largest = digit[i];
//     }
//     if (digit[i] < smallest) {
//       smallest = digit[i];
//     }
//   }

//   return { largest, smallest };
// }

// console.log(largestAndSmallest(1123141));

// function largestAndSmallest(num) {
//   let largest = 0;
//   let smallest = 9;

//   while (num > 0) {
//     let digit = num % 10;

//     if (digit > largest) {
//       largest = digit;
//     }

//     if (digit < smallest) {
//       smallest = digit;
//     }

//     num = Math.floor(num / 10);
//   }

//   return { largest, smallest };
// }

// console.log(largestAndSmallest(9483));

// ****************************************************************************************************************

// 4. Check if a Number is a Strong Number

// function isStrongNumber(num) {
//   let initialNum = num;
//   let digit = [];
//   while (num > 0) {
//     digit.unshift(num % 10);
//     num = Math.floor(num / 10);
//   }

//   let result = 0;

//   for (let i = 0; i < digit.length; i++) {
//     let innerValue = 1;

//     for (let j = 1; j <= digit[i]; j++) {
//       innerValue = innerValue * j;
//     }

//     result = result + innerValue;
//   }

//   return result === initialNum ? "Strong Num" : "Not a Strong Num";
// }
// console.log(isStrongNumber(1453));

// ****************************************************************************************************************

// 5. Check if a Number is an Automorphic Number

// function isAutomorphic(num) {
//   let squareOfNum = num ** 2;
//   let digit = [];

//   while (squareOfNum > 0) {
//     digit.unshift(squareOfNum % 10);
//     squareOfNum = Math.floor(squareOfNum / 10);
//   }

//   const lastTwoDigit =
//     digit[digit.length - 2] * Math.pow(10, 1) +
//     digit[digit.length - 1] * Math.pow(10, 0);

//   return num === lastTwoDigit ? "Automorphic Num" : "Not an Automorphic Num";
// }

// console.log(isAutomorphic(76));

// function isAutomorphic(num) {
//   let squareOfNum = num ** 2;

//   while (num > 0) {
//     let lastDigitOfNum = num % 10;
//     let lastDigitOfSquareNum = squareOfNum % 10;

//     if (lastDigitOfNum != lastDigitOfSquareNum) {
//       return "Not an Automorphic Num";
//     }

//     num = Math.floor(num / 10);
//     squareOfNum = Math.floor(squareOfNum / 10);
//   }

//   return "Automorphic Num";
// }

// console.log(isAutomorphic(25));

// ****************************************************************************************************************

// 6. Find the Frequency of Each Digit

// function frequency(num) {
//   let digit = [];

//   while (num > 0) {
//     digit.unshift(num % 10);
//     num = Math.floor(num / 10);
//   }

//   let frequency = {};

//   for (let i = 0; i < digit.length; i++) {
//     if (frequency[digit[i]]) {
//       frequency[digit[i]] = frequency[digit[i]] + 1;
//     } else {
//       frequency[digit[i]] = 1;
//     }
//   }

//   return frequency;
// }

// console.log(frequency(112023334));

// ****************************************************************************************************************

// 7. Check if a Number is a Harshad Number

// function harshadNumber(num) {
//   let initialNum = num;
//   let digit = [];

//   while (num > 0) {
//     digit.unshift(num % 10);
//     num = Math.floor(num / 10);
//   }

//   let sumOFDigit = digit.reduce((acc, curr) => {
//     return (acc += curr);
//   }, 0);

//   return initialNum % sumOFDigit === 0 ? "Harshad Num" : "Not a Harshad Num";
// }

// console.log(harshadNumber(21));

// function harshadNumber(num) {
//   let initialNum = num;
//   let sum = 0;

//   while (num > 0) {
//     sum += num % 10;
//     num = Math.floor(num / 10);
//   }

//   return initialNum % sum === 0 ? "Harshad Num" : "Not a Harshad Num";
// }

// console.log(harshadNumber(21));
