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

// ************************************************************************************************************************************

// 7. Print Squares of Numbers from 1 to N

const num = 10;

for (let i = 1; i <= num; i++) {
  console.log(Math.pow(i, 2));
}
