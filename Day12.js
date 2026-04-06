// ClassWork

// 1. Sort an Array in Ascending Order Using Bubble Sort

// function ascendingArray(arr) {
//   let count = 0;

//   for (let j = 1; j < arr.length; j++) {
//     for (let i = 1; i < arr.length - count; i++) {
//       if (arr[i] < arr[i - 1]) {
//         let temp = arr[i - 1];
//         arr[i - 1] = arr[i];
//         arr[i] = temp;
//       }
//     }
//     count++;
//   }

//   return arr;
// }

// console.log(ascendingArray([5, 4, 13, 2, 1]));

// function ascendingArray(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let swap = false;
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//         swap = true;
//       }
//     }

//     if (!swap) {
//       break;
//     }
//   }

//   return arr;
// }

// console.log(ascendingArray([5, 4, 13, 2, 1]));

// ***********************************************************************************************************

// 2. Sort an Array in Descending Order Using Bubble Sort

// function descendingArray(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let swapped = false;
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] < arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//         swapped = true;
//       }
//     }
//     if (!swapped) break;
//   }

//   return arr;
// }

// console.log(descendingArray([7, 1, 5, 3, 2, 12]));

// ***********************************************************************************************************

// 3. Sort a String Alphabetically Using Bubble Sort Logic

// function ascendingArray(str) {
//   const arr = str.split("");

//   for (let i = 0; i < arr.length - 1; i++) {
//     let swap = false;
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//         swap = true;
//       }
//     }

//     if (!swap) {
//       break;
//     }
//   }

//   return arr.join("");
// }

// console.log(ascendingArray("javascript"));

// ***********************************************************************************************************

// 4. Sort an Array and Count the Number of Swaps Performed

// let arr = [4, 3, 2, 1];
// let swaps = 0;

// for (let i = 0; i < arr.length - 1; i++) {
//   for (let j = 0; j < arr.length - i - 1; j++) {
//     if (arr[j] > arr[j + 1]) {
//       [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       swaps++;
//     }
//   }
// }

// console.log("Sorted:", arr);
// console.log("Swaps:", swaps);

// ***********************************************************************************************************

// 5. Sort an Array of Objects by Age (Ascending)

// let people = [
//   { name: "A", age: 25 },
//   { name: "B", age: 20 },
//   { name: "C", age: 30 },
// ];

// people.sort((a, b) => a.age - b.age);

// console.log(people);

// ***********************************************************************************************************

// 6.  Sort an Array but Keep Zeros at the End (Zeros Fixed)

// let arr = [3, 0, 5, 0, 2, 1];

// let nonZero = arr.filter((num) => num !== 0).sort((a, b) => a - b);
// let zeros = arr.filter((num) => num === 0);
// let result = [...nonZero, ...zeros];

// console.log(result);

// ***********************************************************************************************************

// HomeWork

// 1.  Sort an Array and Track How Many Comparisons Were Made

// function sortAndCountComparisons(arr) {
//   let comparisons = 0;
//   let n = arr.length;
//   let a = [...arr];

//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//       comparisons++;
//       if (a[j] > a[j + 1]) {
//         let temp = a[j];
//         a[j] = a[j + 1];
//         a[j + 1] = temp;
//       }
//     }
//   }

//   return { sortedArray: a, comparisons };
// }

// const result = sortAndCountComparisons([5, 1, 4, 2, 8]);
// console.log(result.sortedArray);
// console.log(result.comparisons);

// ***********************************************************************************************************

// 2. Sort an Array of Characters Case-Insensitive

// function sortCharsCaseInsensitive(arr) {
//   return arr.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
// }

// const result = sortCharsCaseInsensitive(["b", "A", "d", "C"]);
// console.log(result);

// ***********************************************************************************************************

// 3.  Sort a 2D Array by the First Element of Each Subarray

function sort2DArray(arr) {
  return arr.sort((a, b) => a[0] - b[0]);
}

const result = sort2DArray([
  [3, "c"],
  [1, "a"],
  [2, "b"],
]);
console.log(result);
