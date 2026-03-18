// 1. Reverse a String (Manual Method Only)
// function reverseString(str) {
//   let reversedString = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedString += str[i];
//   }

//   return reversedString;
// }

// console.log(reverseString("abcd"));

// *********************************************************************************************

// 2. Check if a String is a Palindrome

// function isPalindrome(str) {
//   let leftIndex = 0;
//   let rightIndex = str.length - 1;

//   while (leftIndex < rightIndex) {
//     if (str[leftIndex] !== str[rightIndex]) return false;
//     leftIndex++;
//     rightIndex--;
//   }

//   return true;
// }

// console.log(isPalindrome("racecar"));

// *********************************************************************************************

// 3.  Count Frequency of Each Character

// function countFrequency(str) {
//   const frequency = {};

//   for (let i = 0; i < str.length; i++) {
//     frequency[str[i]] = (frequency[str[i]] || 0) + 1;
//   }

//   return frequency;
// }

// console.log(countFrequency("banana"));

// *********************************************************************************************

// 4. Find the Most Frequent Character in a String

// function maxFrequencyChar(str) {
//   const frequency = {};
//   let maxChar = "";
//   let maxCharCount = 0;

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     frequency[char] = (frequency[char] || 0) + 1;

//     if (maxCharCount < frequency[char]) {
//       maxCharCount = frequency[char];
//       maxChar = char;
//     }
//   }

//   return maxChar;
// }

// console.log(maxFrequencyChar("bannnnaaaaaaanna"));

// *********************************************************************************************

// 5. Check if Two Strings Are Anagrams (Without Sorting)

// function areAnagrams(str1, str2) {
//   if (str1.length !== str2.length) return false;
//   const frequency = {};

//   for (let i = 0; i < str1.length; i++) {
//     frequency[str1[i]] = (frequency[str1[i]] || 0) + 1;
//   }

//   for (let i = 0; i < str2.length; i++) {
//     const char = str2[i];
//     if (!frequency[char]) return false;
//     frequency[char]--;
//   }

//   return true;
// }

// console.log(areAnagrams("silent", "listen"));

// *********************************************************************************************

// 6. Find the First Non-Repeating Character

// function findFirstNonRepeatingChar(str) {
//   const frequency = {};

//   for (let i = 0; i < str.length; i++) {
//     frequency[str[i]] = (frequency[str[i]] || 0) + 1;
//   }

//   for (let i = 0; i < str.length; i++) {
//     if (frequency[str[i]] === 1) return str[i];
//   }

//   return null;
// }

// console.log(findFirstNonRepeatingChar("bajnainaj"));

// *********************************************************************************************

// HomeWork

// 1. Remove All Duplicate Characters (Keep First Occurrence)

function removeDuplicates(str) {
  const visited = new Set();
  let result = "";

  for (let ch of str) {
    if (!visited.has(ch)) {
      visited.add(ch);
      result += ch;
    }
  }

  return result;
}

console.log(removeDuplicates("programming"));
