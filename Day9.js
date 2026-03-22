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

function findSubstring(text, pattern) {
  for (let i = 0; i < text.length; i++) {
    let match = true;

    for (let j = 0; j < pattern.length; j++) {
      if (text[i + j] !== pattern[j]) {
        match = false;
        break;
      }
    }
    if (match) return `Found at index ${i}`;
  }

  return `Not Found`;
}

console.log(findSubstring("hello world", "ld"));

// *********************************************************************************************

// 3 . Check if One String is Rotation of Another

// function isSubstring(text, pattern) {
//   for (let i = 0; i <= text.length - pattern.length; i++) {
//     let match = true;

//     for (let j = 0; j < pattern.length; j++) {
//       if (text[i + j] !== pattern[j]) {
//         match = false;
//         break;
//       }
//     }

//     if (match) return true;
//   }
//   return false;
// }

// function isRotation(s1, s2) {
//   if (s1.length !== s2.length) return false;

//   const combined = s1 + s1;
//   return isSubstring(combined, s2);
// }

// console.log(isRotation("abcde", "cdeab"));
