// ClassWork

// 1.  Print Numbers from 1 to N

// const num = 10;

// for (let i = 1; i <= num; i++) {
//   console.log(i);
// }

// const num = parseInt(prompt("Enter a number"));

// for (let i = 1; i <= num; i++) {
//   console.log(i);
// }

// const input = document.querySelector("input");
// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   const num = parseInt(input.value);

//   for (let i = 1; i <= num; i++) {
//     console.log(i);
//   }
// });

// ************************************************************************************************************************************

// 2. Print Numbers from N to 1 without changing the loop condition of above question

// const num = 10;

// for (let i = num; i >= 1; i--) {
//   console.log(i);
// }

// const num = 10;

// for (let i = 1; i <= num; i++) {
//   console.log(num - i + 1);
// }

// ************************************************************************************************************************************

// 3.  Print All Even Numbers from 1 to N

// const num = 30;

// for (let i = 1; i <= num; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// const num = 30;

// for (let i = 2; i <= num; i += 2) {
//   console.log(i);
// }

// ************************************************************************************************************************************

// 4. Sum of First N Natural Numbers

// const num = 10;
// let result = 0;

// for (let i = 1; i <= num; i++) {
//   result += i;
// }

// console.log(result);

// const num = 10;

// const result = num * ((num + 1) / 2);

// console.log(result);

// ************************************************************************************************************************************

// 5. Product (Factorial) of N

// const num = 5;
// let product = 1;

// for (let i = 1; i <= num; i++) {
//   product *= i;
// }

// console.log(product);

// ************************************************************************************************************************************

// 6. Sum of All Even Numbers up to N

// const num = 10;
// let result = 0;

// for (let i = 1; i <= num; i++) {
//   if (i % 2 === 0) {
//     result += i;
//   }
// }

// console.log(result);

// const num = 10;
// let result = 0;

// for (let i = 0; i <= num; i += 2) {
//   result += i;
// }

// console.log(result);

// const num = 11;

//if num is positive
// const result = (num / 2) * (num / 2 + 1);
// console.log(result);

//if num is negative

// const result = Math.floor(num / 2) * (Math.floor(num / 2) + 1);
// console.log(result);

// ************************************************************************************************************************************

// 7. Print Squares of Numbers from 1 to N

// const num = 10;

// for (let i = 1; i <= num; i++) {
//   console.log(Math.pow(i, 2));
// }

// ************************************************************************************************************************************

// HomeWork

// 1. Print all numbers divisible by 3 and 5 up to N

// const num = 30;

// for (let i = 1; i <= num; i++) {
//   if ((i % 3 === 0) && (i % 5 === 0)) {
//     console.log(i);
//   }
// }

// const num = 30;

// for (let i = 1; i <= num; i++) {
//   if (i % 3 === 0) {
//     if (i % 5 === 0) {
//       console.log(i);
//     }
//   }
// }

// for (let i = 15; i <= num; i += 15) {
//   console.log(i);
// }

// ************************************************************************************************************************************

// 2. Find the sum of all odd numbers up to N

// const num = 10;
// let result = 0;

// for (let i = 1; i <= num; i++) {
//   if (i % 2 != 0) {
//     result += i;
//   }
// }

// console.log(result);

// const num = 30;
// let result = 0;

// for (let i = 1; i <= num; i += 2) {
//   result += i;
// }

// console.log(result);

// const num = 10;
// const result = ((num / 2) * num) / 2;
// console.log(result);

// const num = 11;
// const result = Math.ceil(num / 2) * Math.ceil(num / 2);
// console.log(result);

// ************************************************************************************************************************************

// 3. Print the cubes of numbers from 1 to N

// const num = 5;

// for (let i = 1; i <= num; i++) {
//   //   console.log(Math.pow(i, 3));
//   console.log(i ** 3);
// }

// ************************************************************************************************************************************

// 4. Print only the numbers that are both even and perfect squares

// const num = 100

// for (let i = 1; i <= num; i++) {
//   if (i % 2 === 0) {
//     if (Number.isInteger(Math.sqrt(i))) {
//       console.log(i);
//     }
//   }
// }

// for (let i = 1; i <= num; i++) {
//   if (i % 2 === 0 && Number.isInteger(Math.sqrt(i))) {
//     console.log(i);
//   }
// }

// for (let i = 1; i <= num; i++) {
//   if (i % 2 === 0 && Math.sqrt(i) % 2 === 0) {
//     console.log(i);
//   }
// }

// for (let i = 1; i * i <= num; i++) {
//   let square = i * i;

//   if (square % 2 === 0) {
//     console.log(square);
//   }
// }
