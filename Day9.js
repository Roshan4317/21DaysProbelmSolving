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

// 1. Count Frequency of Each Word in a Sentence

// function wordFrequency(sentence) {
//   let words = sentence.toLowerCase().split(" ");
//   let frequency = {};

//   for (let i = 0; i < words.length; i++) {
//     let word = words[i];

//     if (word === "") continue;

//     if (frequency[word]) {
//       frequency[word]++;
//     } else {
//       frequency[word] = 1;
//     }
//   }

//   return frequency;
// }

// console.log(wordFrequency("This is a test this is fun"));

// **********************************************************************************************************

// 2.  Check If a String Is a Pangram

// function isPangram(str) {
//   let set = new Set();

//   for (let char of str.toLowerCase()) {
//     if (char >= 'a' && char <= 'z') {
//       set.add(char);
//     }
//   }

//   return set.size === 26;
// }

// console.log(isPangram("The quick brown fox jumps over the lazy dog"));

// **********************************************************************************************************

// 3. Remove All Duplicate Words From a Sentence

function removeDuplicateWords(sentence) {
  let words = sentence.split(" ");
  let seen = new Set();
  let result = [];

  for (let word of words) {
    let lowerWord = word.toLowerCase();

    if (!seen.has(lowerWord)) {
      seen.add(lowerWord);
      result.push(word);
    }
  }

  return result.join(" ");
}

console.log(removeDuplicateWords("This is is a test Test string"));
