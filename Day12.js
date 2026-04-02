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

function descendingArray(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }

  return arr;
}

console.log(descendingArray([7, 1, 5, 3, 2, 12]));
