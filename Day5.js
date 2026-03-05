// ClassWork

// 1. Print All Factors of a Number

// function allFactors(num) {
//   const factors = [];

//   for (let i = 1; i <= num; i++) {
//     if (num % i === 0) {
//       factors.push(i);
//     }
//   }

//   return factors;
// }

// console.log(allFactors(24));

// function allFactors(num) {
//   const factors = [num];

//   for (let i = 1; i <= num/2; i++) {
//     if (num % i === 0) {
//       factors.push(i);
//     }
//   }

//   return factors;
// }

// console.log(allFactors(24));

function getAllFactors(num) {
  const factors = [];

  let loopCount = 0;
  for (let i = 1; i <= Math.sqrt(num); i++) {
    loopCount++;
    if (num % i === 0) {
      factors.splice(factors.length / 2, 0, i);
      const otherPair = num / i;
      if (i !== otherPair) factors.splice(factors.length / 2 + 1, 0, otherPair);
    }
  }
  console.log({ num, loopCount });
  return factors;
}

console.log(getAllFactors(100));
