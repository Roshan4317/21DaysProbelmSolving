// ClassWork

// 1. Sort an Array in Ascending Order Using Insertion Sort

// function insertionSortAsc(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let current = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > current) {
//       arr[j + 1] = arr[j];
//       j--;
//     }

//     arr[j + 1] = current;
//   }

//   return arr;
// }

// console.log(insertionSortAsc([9, 5, 1, 4, 3]));

// function insertionSortAsc(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let current = arr[i];

//     for (let j = i - 1; j >= 0; j--) {
//       // 0
//       if (current < arr[j]) {
//         arr[j + 1] = arr[j];
//       } else {
//         break;
//       }
//       arr[j] = current;
//     }
//   }

//   return arr;
// }

// console.log(insertionSortAsc([1, 4, 5, 9, 3]));

// function insertionSortAsc(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let current = arr[i];
//     let j = i - 1;

//     while (j >= 0 && current < arr[j]) {
//       arr[j + 1] = arr[j];
//       j--;
//     }

//   }
// }

// console.log(insertionSortAsc([5, 9, 1, 4, 3]));
// ***********************************************************************************************************

// 2. Sort an Array in Descending Order

// function insertionSortDesc(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let current = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] < current) {
//       arr[j + 1] = arr[j];
//       j--;
//     }

//     arr[j + 1] = current;
//   }

//   return arr;
// }

// console.log(insertionSortDesc([9, 5, 1, 4, 3]));

//  ***********************************************************************************************************

// 3. Insert a New Element into an Already Sorted Array (Using Insertion Logic)

// function insertAtCorrectPlace(arr, value) {
//   arr.push(value);
//   let j = arr.length - 2;

//   while (j >= 0 && arr[j] > value) {
//     arr[j + 1] = arr[j];
//     j--;
//   }

//   arr[j + 1] = value;
//   return arr;
// }

// console.log(insertAtCorrectPlace([1, 3, 5, 6], 4));

//  ***********************************************************************************************************

// HomeWork

// 1. Sort an Array but Keep Odd Numbers Fixed

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

function sortEvenKeepOdd(arr) {
  let evens = arr.filter((x) => x % 2 === 0);

  insertionSort(evens);

  let index = 0;

  return arr.map((x) => {
    if (x % 2 === 0) {
      return evens[index++];
    }
    return x;
  });
}

console.log(sortEvenKeepOdd([9, 4, 7, 6, 3, 2]));
