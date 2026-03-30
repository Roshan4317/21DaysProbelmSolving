// ClassWork
// 1. Find Missing Number from Range 1 to N

// function findMissingNumber(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (!arr.includes(i + 1)) {
//       return i + 1;
//     }
//   }
// }

// console.log(findMissingNumber([1, 5, 2, 4]));

// function findMissingNumber(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== i + 1) {
//       return i + 1;
//     }
//   }
// }

// console.log(findMissingNumber([1, 2, 3, 4, 5, 7]));

// function findMissingNumber(arr) {
//   const lastNumber = Math.max(...arr);

//   const expectedSum = (lastNumber * (lastNumber + 1)) / 2;

//   const totalSum = arr.reduce((acc, curr) => {
//     return (acc += curr);
//   }, 0);

//   return expectedSum - totalSum;
// }

// console.log(findMissingNumber([1, 3, 4, 2, 6]));

// **********************************************************************************************************

// 2. Move All Zeroes to End (Stable, O(n))

// function moveAllZeros(arr) {
//   let newArray = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       newArray.push(arr[i]);
//     }
//   }

//   let numberOfZeros = arr.length - newArray.length;

//   for (let i = 0; i < numberOfZeros; i++) {
//     newArray.push(0);
//   }

//   return newArray;
// }

// console.log(moveAllZeros([0, 1, 0, 3, 12, 0, 3, 5]));

// function moveAllZeros(arr) {
//   let position = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       arr[position] = arr[i];
//       position++;
//     }
//   }

//   for (let i = position; i < arr.length; i++) {
//     arr[i] = 0;
//   }

//   return arr;
// }

// console.log(moveAllZeros([0, 1, 0, 3, 12, 0, 5]));

// **********************************************************************************************************

// 3. Find the First Repeating Element in an Array

// function firstRepeatingElement(arr) {
//   let seen = new Set();

//   for (let i = 0; i < arr.length; i++) {
//     if (!seen.has(arr[i])) {
//       seen.add(arr[i]);
//     } else {
//       return `First Repeating is  ${arr[i]}`;
//     }
//   }

//   return "No repeating Element";
// }

// console.log(firstRepeatingElement([10, 5, 3, 5, 3, 5, 6]));

function firstRepeatingElement(arr) {
  let seen = {};

  for (let el of arr) {
    if (!seen[el]) {
      seen[el] = 1;
    } else {
      return `First Repeating is  ${el}`;
    }
  }
  return "No repeating Element";
}

console.log(firstRepeatingElement([10, 5, 3, 5, 3, 5, 6]));
