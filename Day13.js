// ClassWork

// 1.  Sort an Array in Ascending Order Using Selection Sort
// function selectionSortAscending(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let minValue = Infinity;
//     let index = 0;

//     for (let j = i; j < arr.length; j++) {
//       if (arr[j] < minValue) {
//         index = j;
//         minValue = arr[j];
//       }
//     }

//     arr[index] = arr[i];
//     arr[i] = minValue;
//   }

//   return arr;
// }

// console.log(selectionSortAscending([7, 2, 9, 4, 1, 0, -2, -7]));

// ***********************************************************************************************************

// 2.  Sort an Array in Descending Order
// function selectionSortDesc(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let maxIndex = i;

//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] > arr[maxIndex]) {
//         maxIndex = j;
//       }
//     }

//     if (maxIndex !== i) {
//       const temp = arr[i];
//       arr[i] = arr[maxIndex];
//       arr[maxIndex] = temp;
//     }
//   }

//   return arr;
// }

// console.log(selectionSortDesc([7, 2, 9, 4, 1]));
// console.log(selectionSortDesc([17, 20, 99, 4, 31]));

// ***********************************************************************************************************

// 3. Find the Kth Smallest Element Using Selection Logic
// function findKthSmallest(arr, k) {
//   for (let i = 0; i < k; i++) {
//     let maxIndex = i;

//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[maxIndex]) {
//         maxIndex = j;
//       }
//     }

//     if (maxIndex !== i) {
//       const temp = arr[i];
//       arr[i] = arr[maxIndex];
//       arr[maxIndex] = temp;
//     }
//   }

//   return arr[k - 1];
// }

// console.log(findKthSmallest([7, 2, 9, 4, 1], 3));
// console.log(findKthSmallest([17, 20, 99, 4, 31], 4));

// ***********************************************************************************************************

// 4. Selection Sort but Track Index of Minimum for Each Pass

// function selectionSortTrackMinIndex(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let minIndex = i;

//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }

//     console.log(`Pass ${i + 1} → min index = ${minIndex}`);

//     let temp = arr[i];
//     arr[i] = arr[minIndex];
//     arr[minIndex] = temp;
//   }
// }

// selectionSortTrackMinIndex([4, 2, 5, 3, 1]);

// ***********************************************************************************************************

// 5. Sort an Array of Objects by Name

const arr = [{ name: "Charlie" }, { name: "Alice" }, { name: "Bob" }];

arr.sort((a, b) => a.name.localeCompare(b.name));

console.log(arr);
