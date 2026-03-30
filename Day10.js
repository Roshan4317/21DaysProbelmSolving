// ClassWork

// 1. Find the Maximum and Minimum Element

// function minMax(arr) {
//   let minimum = arr[0];
//   let maximum = arr[0];

//   for (el of arr) {
//     if (el > maximum) {
//       maximum = el;
//     }
//     if (el < minimum) {
//       minimum = el;
//     }
//   }

//   return `Minimum = ${minimum} Maximum = ${maximum}`;
// }

// console.log(minMax([10, 25, 30, 18]));

// **********************************************************************************************************

// 2.  Reverse an Array (Manual Method Only)

// function reverseAnArray(arr) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     let arrayLeft = arr[left];
//     arr[left] = arr[right];
//     arr[right] = arrayLeft;

//     left++;
//     right--;
//   }

//   return arr;
// }

// console.log(reverseAnArray([1, 2, 3, 4, 5]));

// function reverseString(str) {
//   const splittedString = str.split("");

//   let leftIndex = 0;
//   let rightIndex = splittedString.length - 1;

//   while (leftIndex < rightIndex) {
//     let temp = splittedString[leftIndex];
//     splittedString[leftIndex] = splittedString[rightIndex];
//     splittedString[rightIndex] = temp;

//     leftIndex++;
//     rightIndex--;
//   }

//   return splittedString.join("");
// }

// console.log(reverseString("Procoder"));

// **********************************************************************************************************

// 3. Check if an Array is Sorted (Ascending)

// function checkIfSorted(arr) {
//   const originalArray = [...arr];

//   const result = arr.sort((a, b) => a - b);

//   for (let i = 0; i < arr.length; i++) {
//     if (originalArray[i] !== result[i]) {
//       return "Not Sorted";
//     }
//   }

//   return "Sorted";
// }

// console.log(checkIfSorted([1, 2, 3, 4, 5]));

// function checkIfSorted(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] > arr[i + 1]) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(checkIfSorted([1, 2, 3, 4, 5]));

// function checkIfSorted(array) {
//   let ascending = true;
//   let descending = true;

//   for (let i = 1; i < array.length; i++) {
//     if (array[i] < array[i - 1]) {
//       ascending = false;
//     } else if (array[i] > array[i - 1]) {
//       descending = false;
//     }

//     if (!ascending && !descending) {
//       return "UnSorted";
//     }
//   }

//   if (ascending) {
//     return "Ascending";
//   } else {
//     return "Descending";
//   }
// }

// console.log(checkIfSorted([1, 12, 14, 1]));

// **********************************************************************************************************

// 4. Remove All Duplicates From an Array (Use filter method)

// function removeDuplicates(array) {
//   const finalArray = [];
//   array.forEach((el) => {
//     if (!finalArray.includes(el)) {
//       finalArray.push(el);
//     }
//   });

//   return finalArray;
// }

// console.log(removeDuplicates([1, 2, 2, 3, 3, 4]));

// function removeDuplicates(array) {
//   const result = array.filter((element, index, arr) => {
//     return arr.indexOf(element) === index;
//   });

//   return result;
// }

// console.log(removeDuplicates([1, 2, 2, 3, 3, 4]));
// **********************************************************************************************************

// 5.  Merge Two Arrays Without Using concat or spread

// function mergeArrays(arr1, arr2) {
//   let newArray = [];

//   for (let i = 0; i < arr1.length; i++) {
//     newArray.push(arr1[i]);
//   }

//   for (let i = 0; i < arr2.length; i++) {
//
//       newArray.push(arr2[i]);
//   }

//   return newArray;
// }

// console.log(mergeArrays([1, 1, 2, 3], [4, 2, 5]));

// **********************************************************************************************************

// 6. Rotate an Array by k Positions (Manual Method)

// function rotateAnArray(arr, position) {
//   const newArray = [];

//   for (let i = arr.length - 1; i >= arr.length - position; i--) {
//     newArray.unshift(arr[i]);
//   }

//   for (let i = 0; i < arr.length - position; i++) {
//     newArray.push(arr[i]);
//   }

//   return newArray;
// }

// console.log(rotateAnArray([1, 2, 3, 4, 5], 2));

// function rotateAnArray(array, position) {
//   position = position % array.length;

//   let left = 0;
//   let right = array.length - 1;

//   while (left < right) {
//     let temp = array[left];
//     array[left] = array[right];
//     array[right] = temp;

//     left++;
//     right--;
//   }

//   let leftElement = 0;
//   let rightElement = position - 1;

//   while (leftElement < rightElement) {
//     let temp = array[leftElement];
//     array[leftElement] = array[rightElement];
//     array[rightElement] = temp;

//     leftElement++;
//     rightElement--;
//   }

//   let lastLeft = position;
//   let lastRight = array.length - 1;

//   while (lastLeft < lastRight) {
//     let temp = array[lastLeft];
//     array[lastLeft] = array[lastRight];
//     array[lastRight] = temp;

//     lastLeft++;
//     lastRight--;
//   }

//   return array;
// }

// console.log(rotateAnArray([1, 2, 3, 4, 5], 8));

// function rotateAnArray(array, position) {
//   position = position % array.length;

//   function rotate(array, start, end) {
//     while (start < end) {
//       let temp = array[start];
//       array[start] = array[end];
//       array[end] = temp;
//       start++;
//       end--;
//     }
//   }

//   rotate(array, 0, array.length - 1);
//   rotate(array, 0, position - 1);
//   rotate(array, position, array.length - 1);

//   return array;
// }

// console.log(rotateAnArray([1, 2, 3, 4, 5], 2));

// **********************************************************************************************************

// HomeWork

// 1. Find the Second Largest Element

// function findSecondLargest(arr) {
//   let firstLargest = -Infinity;
//   let secondLargest = -Infinity;

//   for (let el of arr) {
//     if (el > firstLargest) {
//       secondLargest = firstLargest;
//       firstLargest = el;
//     } else if ((el > secondLargest) & (el !== firstLargest)) {
//       secondLargest = el;
//     }
//   }

//   return secondLargest;
// }

// console.log(findSecondLargest([10, 20, 4, 45, 99, 56]));

// **********************************************************************************************************

// 2. Check if Two Arrays Are Equal (Same Order)

// function areArraysEqual(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return "Length of an array is Equal";
//   }

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return "Order is Not Same";
//     }
//   }

//   return " Equal";
// }

// console.log(areArraysEqual([1, 3, 3], [1, 2, 3]));

// **********************************************************************************************************

// 3. Count Even and Odd Numbers in an Array

// function countEvenOdd(arr) {
//   let odd = 0;
//   let even = 0;

//   for (let el of arr) {
//     if (el > 0 && el % 2 == 0) {
//       even++;
//     } else if (el > 0 && el % 2 !== 0) {
//       odd++;
//     }
//   }

//   return { odd, even };
// }

// console.log(countEvenOdd([2, 5, 7, 8, 10]));

// **********************************************************************************************************

// 4.  Find All Unique Pairs Whose Sum Equals a Target

// function findPairs(arr, target) {
//   let result = [];

//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         result.push(`(${arr[i]}, ${arr[j]})`);
//       }
//     }
//   }

//   return result.join(", ");
// }

// console.log(findPairs([1, 2, 3, 4, 5], 6));

// **********************************************************************************************************

// 5. Left Shift an Array by  Position

// function leftShift(arr, position) {
//   position = position % arr.length;

//   function reverse(start, end) {
//     while (start < end) {
//       let temp = arr[start];
//       arr[start] = arr[end];
//       arr[end] = temp;
//       start++;
//       end--;
//     }
//   }

//   reverse(0, arr.length - 1);
//   reverse(0, arr.length - position - 1);
//   reverse(arr.length - position, arr.length - 1);

//   return arr;
// }

// console.log(leftShift([1, 2, 3, 4, 5], 1));

// **********************************************************************************************************

// 6. Count How Many Times an Element Appears in an Array

// function countOccurrences(arr, element) {
//   let count = 0;
//   for (let el of arr) {
//     if (el === element) {
//       count++;
//     }
//   }

//   return { count };
// }

// console.log(countOccurrences([1, 4, 4, 4, 2], 2));
