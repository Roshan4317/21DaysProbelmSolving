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

// function selectionSortAscending(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let minValue = arr[i];
//     let index = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < minValue) {
//         minValue = arr[j];
//         index = j;
//       }
//     }

//     if (index > i) {
//       arr[index] = arr[i];
//       arr[i] = minValue;
//     }
//   }

//   return arr;
// }
// console.log(selectionSortAscending([7, 2, 9, 4, 1, 0, -2, -7]));

// ***********************************************************************************************************

// 2.  Sort an Array in Descending Order
// function selectionSortDesc(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let maxValue = arr[i];
//     let index = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] > maxValue) {
//         maxValue = arr[j];
//         index = j;
//       }
//     }

//     arr[index] = arr[i];
//     arr[i] = maxValue;
//   }

//   return arr;
// }
// console.log(selectionSortDesc([3, 8, 5, 2, 9]));
// ***********************************************************************************************************

// 3. Find the Kth Smallest Element Using Selection Logic

// function findKthSmallest(arr, k) {
//   for (let i = 0; i < k; i++) {
//     let minValue = arr[i];
//     let index = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < minValue) {
//         minValue = arr[j];
//         index = j;
//       }
//     }

//     arr[index] = arr[i];
//     arr[i] = minValue;
//   }

//   return arr;
// }

// console.log(findKthSmallest([7, 2, 9, 4, 1, 0], 3));
// console.log(findKthSmallest([17, 20, 99, 4, 36, 31, 45], 4));

// ***********************************************************************************************************

// 4. Selection Sort but Track Index of Minimum for Each Pass

// function selectionSortTrackMinIndex(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let minValue = arr[i];
//     let index = i;

//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < minValue) {
//         minValue = arr[j];
//         index = j;
//       }
//     }

//     console.log(`Min index = ${index}`);

//     if (i !== index) {
//       arr[index] = arr[i];
//       arr[i] = minValue;
//     }
//   }

//   return arr;
// }

// console.log(selectionSortTrackMinIndex([4, 2, 5, 3, 1]));

// function selectionSortTrackMinIndex(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let minIndex = i;

//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }

//     let temp = arr[minIndex];
//     arr[minIndex] = arr[i];
//     arr[i] = temp;
//   }

//   return arr;
// }

// console.log(selectionSortTrackMinIndex([4, 2, 5, 3, 1, -8]));

// ***********************************************************************************************************

// 5. Sort an Array of Objects by Name

// function sortByName(arr) {
//   // arr.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
//   // arr.sort(
//   //   (a, b) =>
//   //     a.name.toLowerCase().charCodeAt() - b.name.toLowerCase().charCodeAt(),
//   // );

//   for (let i = 0; i < arr.length - 1; i++) {
//     let minIndex = i;

//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j].name.toLowerCase() < arr[minIndex].name.toLowerCase()) {
//         minIndex = j;
//       }
//     }

//     if (minIndex !== i) {
//       let temp = arr[i];
//       arr[i] = arr[minIndex];
//       arr[minIndex] = temp;
//     }
//   }

//   return arr;
// }

// console.log(
//   sortByName([
//     { name: "Charlie" },
//     { name: "Alice" },
//     { name: "Bob" },
//     { name: "bimal" },
//     { name: "aalic" },
//   ]),
// );

// ***********************************************************************************************************

// 6. Find the K Largest Elements Without Full Sorting

// function kLargestElements(arr, k) {
//   for (let i = 0; i < k; i++) {
//     let maxIndex = i;

//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] > arr[maxIndex]) {
//         maxIndex = j;
//       }
//     }

//     let temp = arr[i];
//     arr[i] = arr[maxIndex];
//     arr[maxIndex] = temp;
//   }

//   return arr.slice(0, k);
// }

// console.log(kLargestElements([5, 1, 9, 3, 7], 2));

// ***********************************************************************************************************

// HomeWork

// 1. Sort a 2D Array by Second Element in Each Subarray

// function bubbleSort2D(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let minValue = i;

//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j][1] < arr[minValue][1]) {
//         minValue = j;
//       }
//     }

//     let temp = arr[i];
//     arr[i] = arr[minValue];
//     arr[minValue] = temp;
//   }

//   return arr;
// }

// console.log(
//   bubbleSort2D([
//     [5, 2],
//     [8, 1],
//     [3, 7],
//   ]),
// );

// ***********************************************************************************************************

// 2. Sort an Array and Count How Many Times Minimum Changed

// function countMinChanges(arr) {
//   let min = arr[0];
//   let count = 1;

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countMinChanges([8, 3, 5, 2, 6]));

// ***********************************************************************************************************

// 3. Sort Only Elements at Even Indexes

// function sortEvenIndex(arr) {
//   let even = [];

//   for (let i = 0; i < arr.length; i += 2) {
//     even.push(arr[i]);
//   }

//   for (let i = 0; i < even.length - 1; i++) {
//     let minIndex = i;

//     for (let j = i + 1; j < even.length; j++) {
//       if (even[j] < even[minIndex]) {
//         minIndex = j;
//       }
//     }

//     let temp = even[i];
//     even[i] = even[minIndex];
//     even[minIndex] = temp;
//   }

//   let k = 0;

//   for (let i = 0; i < arr.length; i += 2) {
//     arr[i] = even[k++];
//   }

//   return arr;
// }

// console.log(sortEvenIndex([9, 4, 7, 6, 3, 2]));

// ***********************************************************************************************************

// 4. Sort an Array of Characters by ASCII Value

function sortChars(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j].charCodeAt(0) < arr[minIndex].charCodeAt(0)) {
        minIndex = j;
      }
    }

    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  return arr;
}

console.log(sortChars(["d", "A", "c", "B"]));
