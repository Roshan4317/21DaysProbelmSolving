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

// ****************************************************************************************************************

function generateDecimalNumberFromWholeAndFractionalDigits(whole, fraction) {
  const wholeNumber = whole.reduce((acc, element, index) => {
    return (acc += element * Math.pow(10, whole.length - index - 1));
  }, 0);

  console.log(wholeNumber);

  const fractionNumber = fraction.reduce((acc, element, index) => {
    return (acc += element * Math.pow(10, -(index + 1)));
  }, 0);

  console.log(fractionNumber);

  return wholeNumber + fractionNumber;
}

console.log(generateDecimalNumberFromWholeAndFractionalDigits([1, 2], [3, 4]));
