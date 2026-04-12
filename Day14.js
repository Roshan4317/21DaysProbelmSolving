// ClassWork

// 1. Sort an Array in Ascending Order Using Insertion Sort

function insertionSortAsc(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }

  return arr;
}

console.log(insertionSortAsc([9, 5, 1, 4, 3]));
