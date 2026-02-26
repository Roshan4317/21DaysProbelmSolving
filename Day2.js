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
