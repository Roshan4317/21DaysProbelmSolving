// ClassWork

// 1. Print Right-Angled Star Triangle

// function printRightAnglesTriangle(rows) {
//   for (let i = 1; i <= rows; i++) {
//     let star = "";

//     for (let j = 1; j <= i; j++) {
//       star += "*";
//     }

//     console.log(star);
//   }

//   return "Right-Angled Star Triangle";
// }

// console.log(printRightAnglesTriangle(8));

// **************************************************************************************************************************************

// 2. Print Inverted Right-Angled Triangle

// function invertedRightAngledTriangle(rows) {
//   for (let i = rows; i >= 1; i--) {
//     let star = "";
//     for (let j = 1; j <= i; j++) {
//       star += "*";
//     }

//     console.log(star);
//   }

//   return "invertedRightAngledTriangle";
// }

// console.log(invertedRightAngledTriangle(5));

// **************************************************************************************************************************************

// 3. Print Pyramid Pattern

// function pyramid(rows) {
//   for (let i = 1; i <= rows; i++) {
//     let star = "";

//     for (let j = 1; j <= rows * 2 - 1; j++) {
//       if (j <= rows - i || j > rows + i - 1) {
//         star += "|";
//       } else {
//         star += "*";
//       }
//     }

//     console.log(star);
//   }

//   return "Pyramid Pattern ";
// }

// console.log(pyramid(5));

// function pyramid(rows) {
//   for (let i = 1; i <= rows; i++) {
//     let star = "";

//     for (let j = 1; j <= rows + i - 1; j++) {
//       if (j <= rows - i) {
//         star += " ";
//       } else {
//         star += "*";
//       }
//     }

//     console.log(star);
//   }

//   return "Pyramid Pattern ";
// }

// console.log(pyramid(5));

// function pyramid(rows) {
//   for (let i = 1; i <= rows * 2 - 1; i += 2) {
//     let star = "";

//     let currentRow = (i + 1) / 2;

//     for (let j = 1; j <= rows + currentRow - 1; j++) {
//       if (j <= rows - currentRow) {
//         star += " ";
//       } else {
//         star += "*";
//       }
//     }

//     console.log(star);
//   }

//   return "Pyramid Pattern ";
// }

// console.log(pyramid(5));

// **************************************************************************************************************************************

// 4. Print Inverted Pyramid Pattern

// function invertedPyramid(rows) {
//   for (let i = 1; i <= rows; i++) {
//     let star = "";
//     for (let j = 1; j <= rows * 2 - i; j++) {
//       if (j < i) {
//         star += " ";
//       } else {
//         star += "*";
//       }
//     }

//     console.log(star);
//   }

//   return "Inverted Pyramid";
// }

// console.log(invertedPyramid(5));

// function invertedPyramid(rows) {
//   for (let i = rows * 2 - 1; i >= 1; i -= 2) {
//     let star = "";
//     let currentRow = (i + 1) / 2;

//     for (let j = 1; j <= rows + currentRow - 1; j++) {
//       if (j <= rows - currentRow) {
//         star += " ";
//       } else {
//         star += "*";
//       }
//     }
//     console.log(star);
//   }

//   return "Inverted Pyramid";
// }

// console.log(invertedPyramid(5));

// **************************************************************************************************************************************

// 5. Print Hollow Square Pattern

// function hollowSquare(rows) {
//   for (let i = 1; i <= rows; i++) {
//     let star = "";

//     for (let j = 1; j <= rows; j++) {
//       if (i === 1 || i === rows || j === 1 || j === rows) {
//         star += "*";
//       } else {
//         star += " ";
//       }
//     }

//     console.log(star);
//   }

//   return "Hollow Square";
// }

// console.log(hollowSquare(5));
