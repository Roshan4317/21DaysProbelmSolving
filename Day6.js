// ClassWork

// 1. Check if a number is Prime or not

function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

console.log(isPrime(7));
console.log(isPrime(10));
