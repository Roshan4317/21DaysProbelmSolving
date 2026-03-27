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

// function isPalindrome(str) {
//   let left = 0;
//   let right = str.length - 1;

//   while (left < right) {
//     if (str[left] !== str[right]) {
//       return false;
//     }

//     left++;
//     right--;
//   }

//   return true;
// }

// function longestPalindromicSubstring(str) {
//   let longestSubstring = "";

//   for (let i = 0; i < str.length; i++) {
//     let word = "";
//     for (let j = i; j < str.length; j++) {
//       word += str[j];
//       if (isPalindrome(word)) {
//         if (word.length > longestSubstring.length) {
//           longestSubstring = word;
//         }
//       }
//     }
//   }

//   return longestSubstring.length > 1
//     ? longestSubstring
//     : "No longest Substring Found";
// }

// console.log(longestPalindromicSubstring("masda"));

// **********************************************************************************************************

// 5.  Find All Anagram Pairs in an Array of Strings

// function isAnagram(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   let seen1 = {};

//   for (let i = 0; i < str1.length; i++) {
//     let char = str1[i];

//     seen1[char] = (seen1[char] || 0) + 1;
//   }

//   for (let j = 0; j < str2.length; j++) {
//     let char = str2[j];
//     if (seen1[char]) {
//       seen1[char]--;
//     } else {
//       return false;
//     }
//   }

//   return true;
// }

// function findAnagramPairs(arr) {
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length - 1; j++) {
//       if (arr[i].length === arr[j + 1].length) {
//         if (isAnagram(arr[i], arr[j + 1])) {
//           if (!result.includes(arr[i])) {
//             result.push(arr[i]);
//           }

//           if (!result.includes(arr[j + 1])) {
//             result.push(arr[j + 1]);
//           }
//         }
//       }
//     }
//   }

//   return result;
// }

// console.log(findAnagramPairs(["cat", "tac", "act", "dog"]));

// function isAnagram(str1, str2) {
//   let seen = {};
//   for (let char of str1) {
//     seen[char] = (seen[char] || 0) + 1;
//   }

//   for (let char of str2) {
//     if (!seen[char]) return false;
//     seen[char]--;
//   }

//   return true;
// }

// function findAnagramPairs(array) {
//   let result = [];

//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i].length !== array[j].length) continue;
//       if (isAnagram(array[i], array[j])) {
//         if (!result.includes(array[i])) {
//           result.push(array[i]);
//         }
//         if (!result.includes(array[j])) {
//           result.push(array[j]);
//         }
//       }
//     }
//   }
//   return result;
// }

// console.log(findAnagramPairs(["cat", "tac", "act", "dog"]));

// **********************************************************************************************************

// 6. Find the Longest Substring Without Repeating Characters (Sliding Window)

// function longestSubstring(string) {
//   let longestWord = "";

//   for (let i = 0; i < string.length; i++) {
//     let word = "";
//     let set = new Set();
//     for (let j = i; j < string.length; j++) {
//       if (!set.has(string[j])) {
//         set.add(string[j]);
//         word += string[j];
//       } else {
//         break;
//       }
//     }

//     if (longestWord.length < word.length) {
//       longestWord = word;
//     }
//   }

//   return longestWord;
// }

// console.log(longestSubstring("abcabghcbb"));
