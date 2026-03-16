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

function countFrequency(str) {
  const frequency = {};

  for (let i = 0; i < str.length; i++) {
    frequency[str[i]] = (frequency[str[i]] || 0) + 1;
  }

  return frequency;
}

console.log(countFrequency("banana"));
