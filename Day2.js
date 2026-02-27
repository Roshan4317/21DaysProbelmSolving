// 1. Find the Maximum of Three Numbers

// function MaximumNum(a, b, c) {
//   if (a >= b && a >= c) {
//     return { a };
//   } else if (b > c) {
//     return { b };
//   } else {
//     return { c };
//   }
// }

// console.log(MaximumNum(4, 4, 2));

//***************************************************************************************************************************

// 2. Check if a Number is Positive, Negative, or Zero

// function checkNum(num = 0) {
//   if (num === 0) return "Num is 0";

//   if (num > 0) {
//     return "Positive";
//   } else {
//     return "Negative";
//   }
// }

// console.log(checkNum());

//***************************************************************************************************************************

// 3. Calculate Electricity Bill

// function calculateElectricityBill(unit) {
//   let totalAmount = 0;

//   if (unit <= 100) {
//     return (totalAmount = unit * 5);
//   } else if (unit <= 200) {
//     return (totalAmount = 100 * 5 + (unit - 100) * 7);
//   } else if (unit <= 300) {
//     return (totalAmount = 100 * 5 + 100 * 7 + (unit - 200) * 10);
//   } else {
//     return (totalAmount = 100 * 5 + 100 * 7 + 100 * 10 + (unit - 300) * 12);
//   }
// }

// console.log(calculateElectricityBill(250));

//***************************************************************************************************************************

// 4. Check if a Character is a Vowel or Consonant

// function checkChar(char = "0") {
//   const vowels = "aeiou";

//   if (vowels.includes(char.toLowerCase()) && char !== "") {
//     return "Vowel";
//   } else if (/^[a-z]$/.test(char.toLowerCase())) {
//     return "Consonant";
//   } else {
//     return "Enter a valid Alphabet";
//   }
// }

// console.log(checkChar(""));

// function checkChar(char = "0") {
//   if (
//     char.toLowerCase().charCodeAt() === 97 ||
//     char.toLowerCase().charCodeAt() === 101 ||
//     char.toLowerCase().charCodeAt() === 105 ||
//     char.toLowerCase().charCodeAt() === 111 ||
//     char.toLowerCase().charCodeAt() === 117
//   ) {
//     return "Vowel";
//   } else if (
//     char.toLowerCase().charCodeAt() >= 97 &&
//     char.toLowerCase().charCodeAt() <= 122
//   ) {
//     return "Consonant";
//   }
//   return "Enter a Valid Alphabet";
// }

//***************************************************************************************************************************

// 5. Check if a Year is a Leap Year

// function checkIfAYearIsLeapYear(year) {
//   if (year % 400 === 0) {
//     return "Leap Year";
//   } else if (year % 100 === 0) {
//     return "Not a Leap Year";
//   } else if (year % 4 === 0) {
//     return "Leap Year";
//   }

//   return "Not Leap Year";
// }

// console.log(checkIfAYearIsLeapYear(1900));

// function checkIfAYearIsLeapYear(year) {
//   if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//     return "Leap Year";
//   }

//   return "Not Leap Year";
// }

//***************************************************************************************************************************

// HomeWork

// 1. Check if a Character is Uppercase, Lowercase, Digit, or Special Character

// function checkChar(char) {
//   const charCode = char.charCodeAt();

//   if (charCode >= 65 && charCode <= 90) {
//     return "Upper Case";
//   } else if (charCode >= 97 && charCode <= 122) {
//     return "Lower Case";
//   } else if (charCode >= 48 && charCode <= 57) {
//     return "Digit";
//   } else if (
//     (charCode >= 58 && charCode <= 64) ||
//     (charCode >= 32 && charCode <= 47)
//   ) {
//     return "Special Character";
//   }

//   return "Enter a Valid Characters Only";
// }

// console.log(checkChar("A"));
// console.log(checkChar("b"));
// console.log(checkChar("5"));
// console.log(checkChar("#"));
// console.log(checkChar(""));

//***************************************************************************************************************************

// 2. Check Triangle Type Using Sides

// function triangleBySides(a, b, c) {
//   const [side1, side2, hypo] = [a, b, c].sort((a, b) => a - b);

//   if (side1 ** 2 + side2 ** 2 === hypo ** 2) {
//     return "Right-angled Triangle";
//   } else if (a === b && b === c) {
//     return "Equilateral Triangle";
//   } else if (a === b || b === c || a === c) {
//     return "Isosceles Triangle";
//   }
//   return "Scalene Triangle";
// }

// console.log(triangleBySides(5, 5, 5));
// console.log(triangleBySides(5, 5, 3));
// console.log(triangleBySides(3, 4, 5));
// console.log(triangleBySides(9, 7, 4));

//***************************************************************************************************************************

// 3. Calculate Income Tax Based on Slabs

// Up to $2,50,000 - No Tax
// $2,50,001-$5,00,000 - 5%
// $5,00,001 - $ 10,00,000 -20%
// Above $10,00,000 -30%

// function incomeTaxCalculator(income) {
//   if (income <= 0) {
//     return "Enter valid Amount";
//   }

//   if (income <= 250000) {
//     return 0;
//   } else if (income <= 500000) {
//     return (income - 250000) * 0.05;
//   } else if (income <= 1000000) {
//     return 250000 * 0.05 + (income - 500000) * 0.2;
//   } else {
//     return 250000 * 0.05 + 500000 * 0.2 + (income - 1000000) * 0.3;
//   }
// }

// console.log(incomeTaxCalculator(300000));
