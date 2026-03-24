// ClassWork

// 1. Find if One String Is a Substring of Another (Manual Method)

// function isSubstringOfAnother(mainString, testString) {
//   for (let i = 0; i < mainString.length; i++) {
//     let char = mainString[i];
//     if (char === testString[0]) {
//       let match = true;
//       for (let j = 1; j < testString.length; j++) {
//         if (mainString[i + j] !== testString[j]) {
//           match = false;
//           break;
//         }
//       }
//       if (match) return true;
//     }
//   }
//   return false;
// }

// console.log(isSubstringOfAnother("heltlotheere", "there"));

// function isSubstringOfAnother(mainString, testString) {
//   for (let i = 0; i < mainString.length; i++) {
//     let char = mainString[i];

//     if (char === testString[0]) {
//       let match = true;
//       for (let j = 1; j < testString.length; j++) {
//         if (mainString[i + j] !== testString[j]) {
//           match = false;
//           break;
//         }
//       }
//       if (match) return true;
//     }
//   }

//   return false;
// }

// console.log(isSubstringOfAnother("heltlotheere", "there"));

// function isSubstringOfAnother(mainString, testString) {
//   for (let i = 0; i <= mainString.length - testString.length; i++) {
//     let match = true;

//     for (let j = 0; j < testString.length; j++) {
//       if (mainString[i + j] !== testString[j]) {
//         match = false;
//         break;
//       }
//     }
//     if (match) return true;
//   }

//   return false;
// }
// console.log(isSubstringOfAnother("heltlothere", "there"));

// *********************************************************************************************

// 2.  Manual Substring Search (Without Using indexOf)

// function SubstringSearch(mainString, testString) {
//   for (let i = 0; i <= mainString.length - testString.length; i++) {
//     let count = i;
//     let match = true;
//     for (let j = 0; j < testString.length; j++) {
//       if (mainString[i + j] !== testString[j]) {
//         match = false;
//         break;
//       }
//     }
//     if (match) {
//       count = i;
//       return `Found at index ${count}`;
//     }
//   }
//   return "Did not find the testString";
// }

// console.log(SubstringSearch("hellotheredde", "ac"));

// *********************************************************************************************

// 3 . Check if One String is Rotation of Another
// function isRotation(a, b) {
//   if (a.length !== b.length) return false;
//   a = a + a;

//   for (let i = 0; i <= a.length - b.length; i++) {
//     let match = true;

//     for (let j = 0; j < b.length; j++) {
//       if (a[i + j] !== b[j]) {
//         match = false;
//         break;
//       }
//     }
//     if (match) return true;
//   }

//   return false;
// }

// console.log(isRotation("abcde", "deab"));

// **********************************************************************************************************

// HomeWork

//Count Frequency of Each Word in a Sentence
