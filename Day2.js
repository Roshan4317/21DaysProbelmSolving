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

// function checkChar(char) {
//   const vowels = "aeiou";

//   if (
//     !char.charCodeAt() >= 65 &&
//     char.charCodeAt() <= 91 &&
//     char.charCodeAt() >= 97 &&
//     char.charCodeAt() <= 122
//   ) {
//     return "Enter a valid alphabet";
//   }

//   if (vowels.includes(char.toLowerCase())) {
//     return "Vowel";
//   } else {
//     return "Consonant";
//   }
// }

// console.log(checkChar(""));

//***************************************************************************************************************************

// 1. Check if a Character is Uppercase, Lowercase, Digit, or Special Character

// function checkChar(ch) {
//   if (ch >= "A" && ch <= "Z") {
//     return "Uppercase Letter";
//   } else if (ch >= "a" && ch <= "z") {
//     return "Lowercase Letter";
//   } else if (ch >= "0" && ch <= "9") {
//     return "Digit";
//   } else {
//     return "Special Character";
//   }
// }

// console.log(checkChar("A"));
// console.log(checkChar("b"));
// console.log(checkChar("5"));
// console.log(checkChar("#"));

//***************************************************************************************************************************

// 2. Check Triangle Type Using Sides and Angles

// function triangleBySides(a, b, c) {
//   if (a + b <= c || a + c <= b || b + c <= a) {
//     return "Not a valid triangle";
//   }

//   if (a === b && b === c) {
//     return "Equilateral Triangle";
//   } else if (a === b || b === c || a === c) {
//     return "Isosceles Triangle";
//   } else {
//     return "Scalene Triangle";
//   }
// }

// console.log(triangleBySides(5, 5, 5));
// console.log(triangleBySides(5, 5, 3));
// console.log(triangleBySides(3, 4, 5));
