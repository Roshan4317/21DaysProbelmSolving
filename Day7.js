// ClassWork

// 1. Find the Prime Factorization (Return as an Array)

function primeFactorization(num) {
  const primeFactors = [];

  while (num % 2 === 0) {
    primeFactors.push(2);
    num = num / 2;
  }

  let factor = 3;
  while (factor <= Math.sqrt(num)) {
    while (num % factor === 0) {
      primeFactors.push(factor);
      num = num / factor;
    }
    factor += 2;
  }

  if (num > 2) primeFactors.push(num);
  return primeFactors;
}

console.log(primeFactorization(120));
