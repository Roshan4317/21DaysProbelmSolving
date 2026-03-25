// ClassWork

// 1. Find the Maximum and Minimum Element

function minMax(arr) {
  let minimum = arr[0];
  let maximum = arr[0];

  for (el of arr) {
    if (el > maximum) {
      maximum = el;
    }
    if (el < minimum) {
      minimum = el;
    }
  }

  return `Minimum = ${minimum} Maximum = ${maximum}`;
}

console.log(minMax([10, 25, 30, 18]));
