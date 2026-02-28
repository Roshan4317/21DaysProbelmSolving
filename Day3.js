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

// **************************************************************************************************************************************

// 6. Print Hollow Pyramid Pattern

// function hollowpyramid(rows) {
//   for (let i = 1; i <= 5; i++) {
//     let star = "";
//     for (let j = 1; j <= rows * 2 - 1; j++) {
//       if (j === rows - i + 1 || j === rows + i - 1 || i === rows) {
//         star += "*";
//       } else {
//         star += " ";
//       }
//     }

//     console.log(star);
//   }
//   return "Hollow Pyramid";
// }

// console.log(hollowpyramid(5));

// function hollowPyramid(rows) {
//   for (let i = 1; i <= rows * 2 - 1; i += 2) {
//     let currentRow = (i + 1) / 2;

//     let star = "";
//     for (let j = 1; j <= rows + currentRow - 1; j++) {
//       if (
//         j <= rows - currentRow ||
//         (j > rows - currentRow + 1 &&
//           j < rows + currentRow - 1 &&
//           i !== rows * 2 - 1)
//       ) {
//         star += " ";
//       } else {
//         star += "*";
//       }
//     }

//     console.log(star);
//   }
//   return "Hollow Pyramid";
// }

// console.log(hollowPyramid(5));

// **************************************************************************************************************************************

// 7 . Print Alternating Binary Triangle

// function AlternatingBinaryTriangle(rows) {
//   for (let i = 1; i <= rows; i++) {
//     let count = "";

//     for (let j = 1; j <= i; j++) {
//       count += i % 2 === 1 ? j % 2 : (j + 1) % 2;
//     }

//     console.log(count);
//   }

//   return "AlternatingBinaryTriangle";
// }

// console.log(AlternatingBinaryTriangle(5));

// **************************************************************************************************************************************

// HomeWork

// 1. Print Hollow Inverted Pyramid

function hollowInvertedPyramid(rows) {
  for (let i = rows; i >= 1; i--) {
    let line = " ".repeat(rows - i);

    if (i === rows) {
      line += "*".repeat(rows * 2 - 1);
    } else if (i === 1) {
      line += "*";
    } else {
      line += "*" + " ".repeat(2 * i - 3) + "*";
    }

    console.log(line);
  }
}

hollowInvertedPyramid(5);
