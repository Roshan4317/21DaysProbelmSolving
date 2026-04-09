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

// function ascendingArray(arr) {
//   for (let j = 0; j < arr.length - 1; j++) {
//     let sorted = true;

//     for (let i = 1; i < arr.length - j; i++) {
//       if (arr[i] < arr[i - 1]) {
//         sorted = false;
//         let temp = arr[i];
//         arr[i] = arr[i - 1];
//         arr[i - 1] = temp;
//       }
//     }
//     if (sorted) break;
//   }

//   return arr;
// }

// console.log(ascendingArray([5, 3, 8, 4, 2]));
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

// function descendingArray(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let swap = false;
//     for (let j = 0; j < arr.length - 1; j++) {
//       if (arr[j + 1] > arr[j]) {
//         swap = true;
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//     if (!swap) break;
//   }

//   return arr;
// }

// console.log(descendingArray([7, 12, 5, 3, 2, 100, 43, 15, 13]));

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

// function shortStringAlphabetically(str) {
//   const splitted = str.split("");

//   for (let i = 0; i < splitted.length - 1; i++) {
//     for (let j = 0; j < splitted.length - 1 - i; j++) {
//       if (splitted[j] > splitted[j + 1]) {
//         let temp = splitted[j];
//         splitted[j] = splitted[j + 1];
//         splitted[j + 1] = temp;
//       }
//     }
//   }

//   return splitted.join("");
// }

// console.log(shortStringAlphabetically("javascript"));

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

// function sortAndCountComparisons(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length - 1; i++) {
//     let swap = false;
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         swap = true;
//         count++;
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//     if (!swap) break;
//   }

//   return { arr, count };
// }

// console.log(sortAndCountComparisons([4, 3, 2, 1]));

// ***********************************************************************************************************

// 5. Sort an Array of Objects by Age (Ascending)

// function shortByAge(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let swap = false;
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j].age > arr[j + 1].age) {
//         swap = true;
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }

//     if (!swap) break;
//   }
//   return arr;
// }

// console.log(
//   shortByAge([
//     { name: "A", age: 25 },
//     { name: "B", age: 20 },
//     { name: "C", age: 30 },
//     { name: "FF", age: 50 },
//     { name: "DD", age: 10 },
//   ]),
// );

// ***********************************************************************************************************

// 6.  Sort an Array but Keep Zeros at the End (Zeros Fixed)

// function zerosAtLast(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       arr.splice(i, 1);
//       count++;
//     }
//   }

//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }

//   for (let i = 0; i < count; i++) {
//     arr.push(0);
//   }
//   return arr;
// }

// console.log(zerosAtLast([3, 0, 5, 0, 2, 1]));

// function zerosAtLast(arr) {
//   const nonZeros = arr.filter((el) => el !== 0).sort((a, b) => a - b);
//   const zeros = arr.filter((el) => el == 0);

//   return [...nonZeros, ...zeros];
// }

// console.log(zerosAtLast([3, 0, 5, 0, 2, 1]));

// ***********************************************************************************************************

// HomeWork

// 1.  Sort an Array and Track How Many Comparisons Were Made

// function sortAndCountComparisons(arr) {
//   let count = 0;

//   for (let i = 0; i < arr.length - 1; i++) {
//     let swap = false;
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       count++;
//       if (arr[j] > arr[j + 1]) {
//         swap = true;
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }

//     if (!swap) break;
//   }

//   return { arr, count: `${count} times Comparison` };
// }

// console.log(sortAndCountComparisons([5, 1, 4, 2, 8]));
// ***********************************************************************************************************

//2. Sort an Array of Characters Case-Insensitive

// function sortCharsCaseInsensitive(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let swap = false;
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j].toLowerCase() > arr[j + 1].toLowerCase()) {
//         swap = true;
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }

//     if (!swap) break;
//   }

//   return arr;
// }

// console.log(sortCharsCaseInsensitive(["b", "A", "d", "C", "Z", "z", "B"]));
// ***********************************************************************************************************

// 3.  Sort a 2D Array by the First Element of Each Subarray

// function sort2DArray(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let swap = false;

//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j][0] > arr[j + 1][0]) {
//         swap = true;
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//         arr;
//       }
//     }

//     if (!swap) break;
//   }

//   return arr;
// }

// console.log(
//   sort2DArray([
//     [3, "c"],
//     [1, "a"],
//     [2, "b"],
//     [0, "e"],
//   ]),
// );

// function sort2DArray(arr) {
//   arr.sort((a, b) => a[0] - b[0]);
//   return arr;
// }

// console.log(
//   sort2DArray([
//     [3, "c"],
//     [1, "a"],
//     [2, "b"],
//     [0, "e"],
//   ]),
// );

// ***********************************************************************************************************

// 4. Sort an Array in Ascending Order but Stop After K Passes

// function stopAfterKPasses(arr, k) {
//   for (let i = 0; i < k; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }

//   return arr;
// }

// console.log(stopAfterKPasses([34, 1, 7, 0, 5, 2], 2));

// ***********************************************************************************************************

// 5. Sort Only the Even Numbers in an Array (Odd Numbers Stay in Place)

// function sortEvenOnly(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] % 2 == 0 && arr[j + 1] % 2 == 0 && arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//         console.log("hi");
//       }
//     }
//   }
//   return arr;
// }

// console.log(sortEvenOnly([9, 4, 2, 7, 6, 5, 18, 10]));

// ***********************************************************************************************************

// 6.  Sort an Array of Strings by Length (Shortest to Longest)

// function sortByLength(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let swap = false;
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j].length > arr[j + 1].length) {
//         swap = true;
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//     if (!swap) break;
//   }

//   return arr;
// }

// console.log(
//   sortByLength(["hi", "javascript", "is", "fun", "learn", "code", "practice"]),
// );
