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

//   let newString = a + a;
//   ("abcdeabcde");

//   for (let i = 0; i <= newString.length - b.length; i++) {
//     let match = true;
//     for (let j = 0; j < b.length; j++) {
//       if (newString[i + j] !== b[j]) {
//         match = false;
//         break;
//       }
//     }
//     if (match) return true;
//   }

//   return false;
// }

// console.log(isRotation("abcde", "cdeab"));

// **********************************************************************************************************

// HomeWork

// 1. Count Frequency of Each Word in a Sentence

// function wordFrequency(sentence) {
//   const splittedSentence = sentence.split(" ");
//   const obj = {};

//   splittedSentence.forEach((el) => {
//     obj[el] = (obj[el] || 0) + 1;
//   });

//   return obj;
// }

// console.log(wordFrequency("i love coding and i love javascript"));

// function wordFrequency(sentence) {
//   let word = "";
//   const frequency = {};

//   for (let i = 0; i < sentence.length; i++) {
//     let char = sentence[i];
//     if (char !== " ") {
//       word += char;
//     } else {
//       if (word.length > 0) {
//         frequency[word] = (frequency[word] || 0) + 1;
//         word = "";
//       }
//     }
//   }

//   frequency[word] = (frequency[word] || 0) + 1;
//   word = "";

//   return frequency;
// }
// console.log(wordFrequency("i love   coding and i love javascript"));

// **********************************************************************************************************

// 2.  Check If a String Is a Pangram

// function isPangram(str) {
//   const letters = new Set();

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase();

//     if (char >= "a" && char <= "z") {
//       letters.add(char);
//     }
//   }

//   return letters.size === 26 ? true : false;
// }

// console.log(isPangram("The quick brown fox jumps over the lazy dog"));

// **********************************************************************************************************

// 3. Remove All Duplicate Words From a Sentence

// function removeDuplicateWords(sentence) {
//   const seen = new Set();
//   let word = "";
//   const splittedSentence = sentence.split(" ");

//   for (let i = 0; i < splittedSentence.length; i++) {
//     if (!seen.has(splittedSentence[i])) {
//       seen.add(splittedSentence[i]);
//       word += splittedSentence[i] + " ";
//     }
//   }

//   return word;
// }

// console.log(removeDuplicateWords("This is is a test test string"));

// function removeDuplicateWords(sentence) {
//   let word = "";
//   let frequency = {};

//   for (let i = 0; i < sentence.length; i++) {
//     let char = sentence[i];

//     if (char !== " ") {
//       word += char;
//     } else {
//       if (word.length > 0 && frequency[word] === undefined) {
//         frequency[word] = (frequency[word] || 0) + 1;
//       }
//       word = "";
//     }
//   }

//   frequency[word] === undefined
//     ? (frequency[word] = (frequency[word] || 0) + 1)
//     : "";
//   word = "";
//   let finalString = "";
//   Object.keys(frequency).forEach((el) => (finalString += el + " "));

//   return finalString;
// }

// console.log(removeDuplicateWords("This is is a test test string"));
// **********************************************************************************************************

// 4. Find the Longest Palindromic Substring

// function longestPalindrome(string) {
//   for (let i = 0; i < string.length / 2; i++) {
//     let left = 0;
//     let right = string.length - 1;
//     let longestWord = "h";

//     while (left < right) {
//       if (string[left] !== string[right]) {
//         return false;
//       }
//       left++;
//       right--;
//     }
//   }
//   return true;
// }

// console.log(longestPalindrome("banana"));

// **********************************************************************************************************

// 5.  Find All Anagram Pairs in an Array of Strings

// function findAnagramPairs(arr) {
//   const map = new Map();
//   const result = [];

//   for (let word of arr) {
//     let key = word.split("").sort().join("");

//     if (!map.has(key)) {
//       map.set(key, []);
//     }

//     map.get(key).push(word);
//   }

//   for (let group of map.values()) {
//     if (group.length > 1) {
//       for (let i = 0; i < group.length; i++) {
//         for (let j = i + 1; j < group.length; j++) {
//           result.push([group[i], group[j]]);
//         }
//       }
//     }
//   }

//   return result;
// }

// console.log(findAnagramPairs(["eat", "tea", "tan", "ate", "nat", "bat"]));
