// ClassWork

// 1. Reverse a String (Manual Method Only)

// function reverseString(str) {
//   let reversed = "";

//   for (let i = 1; i <= str.length; i++) {
//     reversed += str[str.length - i];
//   }

//   return reversed;
// }

// console.log(reverseString("javascript"));

// function reverseString(str) {
//   let reversed = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }

//   return reversed;
// }

// console.log(reverseString("javascript"));

// *********************************************************************************************

// 2. Check if a String is a Palindrome

// function isPalindrome(str) {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }

//   return str === reversed ? "Yes Palindrome" : "Not a Palindrome";
// }

// console.log(isPalindrome("madam"));

// function isPalindrome(str) {
//   for (let i = 0; i < str.length / 2; i++) {
//     if (str[i] !== str[str.length - 1 - i]) {
//       return "No Palindrome";
//     }
//   }

//   return "Yes  Palindrome";
// }

// console.log(isPalindrome("redder"));

// function isPalindrome(str) {
//   let left = 0;
//   let right = str.length - 1;

//   while (left < right) {
//     if (str[left] !== str[right]) {
//       return "No Palindrome";
//     }
//     left++;
//     right--;
//   }

//   return "Is Palindrome";
// }

// console.log(isPalindrome("redder"));

// *********************************************************************************************

// 3.  Count Frequency of Each Character

// function countFrequency(str) {
//   let count = {};

//   for (let i = 0; i < str.length; i++) {
//     count[str[i]] = (count[str[i]] || 0) + 1;
//   }

//   return count;
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

// function mostFrequentCharacter(str) {
//   let count = {};

//   for (let i = 0; i < str.length; i++) {
//     count[str[i]] = (count[str[i]] || 0) + 1;
//   }

//   const pair = Object.entries(count);

//   let mostRepeated = [, 0];

//   pair.forEach(([key, value]) => {
//     if (value > mostRepeated[1]) {
//       mostRepeated = [key, value];
//     }
//   });

//   return `Most repeated = ${mostRepeated[0]} ( ${mostRepeated[1]} times)`;
// }

// console.log(mostFrequentCharacter("bbbanaaanaaacdda"));

// function mostFrequentCharacter(str) {
//   let frequencyCount = {};

//   for (let i = 0; i < str.length; i++) {
//     frequencyCount[str[i]] = (frequencyCount[str[i]] || 0) + 1;
//   }

//   let frequentCharacter = "";
//   let frequencyTimes = 0;

//   for (let key in frequencyCount) {
//     if (frequencyCount[key] > frequencyTimes) {
//       frequencyTimes = frequencyCount[key];
//       frequentCharacter = key;
//     }
//   }

//   return `Most Repeated = ${frequentCharacter} (${frequencyTimes} times)`;
// }

// console.log(mostFrequentCharacter("baaanasdasaav"));

// function mostFrequentCharacter(str) {
//   const frequencyCount = {};

//   let frequentCharacter = "";
//   let frequencyTimes = 0;

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     frequencyCount[char] = (frequencyCount[char] || 0) + 1;

//     if (frequencyCount[char] > frequencyTimes) {
//       frequencyTimes = frequencyCount[char];
//       frequentCharacter = char;
//     }
//   }
//   return `Most Repeated = ${frequentCharacter} (${frequencyTimes} times)`;
// }

// console.log(mostFrequentCharacter("Banannnnaaa"));

// *********************************************************************************************

// 5. Check if Two Strings Are Anagrams (Without Sorting)

// function areAnagrams(str1, str2) {
//   if (str1.length !== str2.length) return "Given strings are not Anagrams";

//   const frequency1 = {};
//   const frequency2 = {};

//   for (let i = 0; i < str1.length; i++) {
//     let char = str1[i];
//     frequency1[char] = (frequency1[char] || 0) + 1;
//   }

//   for (let i = 0; i < str2.length; i++) {
//     let char = str2[i];
//     frequency2[char] = (frequency2[char] || 0) + 1;
//   }

//   for (let key in frequency1) {
//     if (frequency1[key] !== frequency2[key])
//       return "Given strings are not Anagrams";
//   }

//   return "Given strings are  Anagrams";
// }

// console.log(areAnagrams("silent", "listen"));

// function areAnagrams(str1, str2) {
//   if (str1.length !== str2.length) return "Given strings are not Anagrams";

//   const frequency1 = {};
//   const frequency2 = {};

//   for (let i = 0; i < str1.length; i++) {
//     let char = str1[i];
//     frequency1[char] = (frequency1[char] || 0) + 1;
//   }

//   for (let i = 0; i < str2.length; i++) {
//     let char = str2[i];
//     frequency2[char] = (frequency2[char] || 0) + 1;
//   }

//   const keys = Object.keys(frequency1);

//   for (let i = 0; i < keys.length; i++) {
//     const key = keys[i];
//     if (frequency1[key] !== frequency2[key])
//       return "Given strings are not Anagrams";
//   }

//   return "Given strings are  Anagrams";
// }

// console.log(areAnagrams("silent", "listen"));

// function areAnagrams(str1, str2) {
//   if (str1.length !== str2.length) return "Given strings are not Anagrams";

//   const frequencyCount = {};

//   for (let i = 0; i < str1.length; i++) {
//     let char = str1[i];
//     frequencyCount[char] = (frequencyCount[char] || 0) + 1;
//   }

//   for (let i = 0; i < str2.length; i++) {
//     let char = str2[i];
//     if (!frequencyCount[char]) return "Given strings are not Anagrams";
//     frequencyCount[char]--;
//   }

//   return "Given strings are  Anagrams";
// }

// console.log(areAnagrams("silent", "listen"));

// *********************************************************************************************

// 6. Find the First Non-Repeating Character

// function findFirstNonRepeatingChar(str) {
//   const count = {};

//   for (let i = 0; i < str.length; i++) {
//     count[str[i]] = (count[str[i]] || 0) + 1;
//   }

//   for (let key in count) {
//     if (count[key] === 1) {
//       return key;
//     }
//   }

//   return null;
// }

// console.log(findFirstNonRepeatingChar("aabbccddeeff"));

// *********************************************************************************************

// HomeWork

// 1. Remove All Duplicate Characters (Keep First Occurrence)

// function removeDuplicates(str) {
//   const visited = new Set();
//   let result = "";

//   for (let ch of str) {
//     if (!visited.has(ch)) {
//       visited.add(ch);
//       result += ch;
//     }
//   }

//   return result;
// }

// console.log(removeDuplicates("programming"));

// *********************************************************************************************

// 2. Check if a String Contains Only Alphabets (No Regex)

// function isOnlyAlphabets(str) {
//   for (let ch of str) {
//     const code = ch.charCodeAt(0);

//     if (!(code >= 65 && code <= 90) && !(code >= 97 && code <= 122)) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(isOnlyAlphabets("HelloWorld123"));
// console.log(isOnlyAlphabets("HelloWorld"));

// *********************************************************************************************

// 3. Reverse Only the Words in a Sentence

// function reverseWords(str) {
//   return str.split(" ").reverse().join(" ");
// }

// console.log(reverseWords("I love coding"));

// *********************************************************************************************

// 4. Find the Longest Word in a Sentence
function longestWord(sentence) {
  let currentWord = "";
  let longest = "";

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      currentWord += sentence[i];
    } else {
      if (currentWord.length > longest.length) {
        longest = currentWord;
      }
      currentWord = "";
    }
  }

  if (currentWord.length > longest.length) {
    longest = currentWord;
  }

  return longest;
}

console.log(longestWord("coding is beautiful"));
