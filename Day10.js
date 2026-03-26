// ClassWork

// 1. Find the Maximum and Minimum Element

// function minMax(arr) {
//   let minimum = arr[0];
//   let maximum = arr[0];

//   for (el of arr) {
//     if (el > maximum) {
//       maximum = el;
//     }
//     if (el < minimum) {
//       minimum = el;
//     }
//   }

//   return `Minimum = ${minimum} Maximum = ${maximum}`;
// }

// console.log(minMax([10, 25, 30, 18]));

// **********************************************************************************************************

// 2.  Reverse an Array (Manual Method Only)

function reverseAnArray(arr) {
  let left = 0;
  let right = arr.length - 1;
  (1, 3);

  while (left < right) {
    let arrayLeft = arr[left];
    arr[left] = arr[right];
    arr[right] = arrayLeft;

    left++;
    right--;
  }

  return arr;
}

console.log(reverseAnArray([1, 2, 3, 4, 5]));
