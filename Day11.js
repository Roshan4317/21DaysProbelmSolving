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
