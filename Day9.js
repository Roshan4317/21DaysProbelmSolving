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

function isSubstringOfAnother(mainString, testString) {
  for (let i = 0; i < mainString.length; i++) {
    let char = mainString[i];

    if (char === testString[0]) {
      let match = true;
      for (let j = 1; j < testString.length; j++) {
        if (mainString[i + j] !== testString[j]) {
          match = false;
          break;
        }
      }
      if (match) return true;
    }
  }

  return false;
}

console.log(isSubstringOfAnother("heltlotheere", "there"));
