// ClassWork

// 1.  Sort an Array in Ascending Order Using Selection Sort
// function selectionSortAsc(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let minIndex = i;

//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }

//     if (minIndex !== i) {
//       const temp = arr[i];
//       arr[i] = arr[minIndex];
//       arr[minIndex] = temp;
//     }
//   }

//   return arr;
// }

// console.log(selectionSortAsc([7, 2, 9, 4, 1]));
// console.log(selectionSortAsc([17, 20, 99, 4, 31]));

// ***********************************************************************************************************

// 2.  Sort an Array in Descending Order
function selectionSortDesc(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let maxIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[maxIndex]) {
        maxIndex = j;
      }
    }

    if (maxIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[maxIndex];
      arr[maxIndex] = temp;
    }
  }

  return arr;
}

console.log(selectionSortDesc([7, 2, 9, 4, 1]));
console.log(selectionSortDesc([17, 20, 99, 4, 31]));
