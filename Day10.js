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

function mergeArrays(arr1, arr2) {
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i]);
  }

  for (let i = 0; i < arr2.length; i++) {
    result.push(arr2[i]);
  }

  return result;
}

console.log(mergeArrays([1, 2, 3], [4, 5]));
