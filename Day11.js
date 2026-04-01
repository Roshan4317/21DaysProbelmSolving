// ClassWork
// 1. Find Missing Number from Range 1 to N

// function findMissingNumber(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (!arr.includes(i + 1)) {
//       return i + 1;
//     }
//   }
// }

// console.log(findMissingNumber([1, 5, 2, 4]));

// function findMissingNumber(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== i + 1) {
//       return i + 1;
//     }
//   }
// }

// console.log(findMissingNumber([1, 2, 3, 4, 5, 7]));

// function findMissingNumber(arr) {
//   const lastNumber = Math.max(...arr);

//   const expectedSum = (lastNumber * (lastNumber + 1)) / 2;

//   const totalSum = arr.reduce((acc, curr) => {
//     return (acc += curr);
//   }, 0);

//   return expectedSum - totalSum;
// }

// console.log(findMissingNumber([1, 3, 4, 2, 6]));

// **********************************************************************************************************

// 2. Move All Zeroes to End (Stable, O(n))

// function moveAllZeros(arr) {
//   let newArray = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       newArray.push(arr[i]);
//     }
//   }

//   let numberOfZeros = arr.length - newArray.length;

//   for (let i = 0; i < numberOfZeros; i++) {
//     newArray.push(0);
//   }

//   return newArray;
// }

// console.log(moveAllZeros([0, 1, 0, 3, 12, 0, 3, 5]));

// function moveAllZeros(arr) {
//   let position = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       arr[position] = arr[i];
//       position++;
//     }
//   }

//   for (let i = position; i < arr.length; i++) {
//     arr[i] = 0;
//   }

//   return arr;
// }

// console.log(moveAllZeros([0, 1, 0, 3, 12, 0, 5]));

// **********************************************************************************************************

// 3. Find the First Repeating Element in an Array

// function firstRepeatingElement(arr) {
//   let seen = new Set();

//   for (let i = 0; i < arr.length; i++) {
//     if (!seen.has(arr[i])) {
//       seen.add(arr[i]);
//     } else {
//       return `First Repeating is  ${arr[i]}`;
//     }
//   }

//   return "No repeating Element";
// }

// console.log(firstRepeatingElement([10, 5, 3, 5, 3, 5, 6]));

// function firstRepeatingElement(arr) {
//   let seen = {};

//   for (let el of arr) {
//     if (!seen[el]) {
//       seen[el] = 1;
//     } else {
//       return `First Repeating is  ${el}`;
//     }
//   }
//   return "No repeating Element";
// }

// console.log(firstRepeatingElement([10, 5, 3, 5, 3, 5, 6]));

// **********************************************************************************************************

// 4.  Maximum Subarray Sum (Kadane’s Algorithm – O(n))

// function subArray(arr) {
//   const newSubArray = [];
//   let maximumSubArraySum = -Infinity;

//   function totalSum(arr) {
//     const result = arr.reduce((acc, el, curr) => {
//       return (acc += el);
//     }, 0);

//     return result;
//   }

//   for (let i = 0; i < arr.length; i++) {
//     const singleSubArray = [];
//     for (let j = i; j < arr.length; j++) {
//       singleSubArray.push(arr[j]);
//       newSubArray.push([...singleSubArray]);
//     }
//   }

//   for (let k = 0; k < newSubArray.length; k++) {
//     let check = totalSum(newSubArray[k]);

//     if (check > maximumSubArraySum) {
//       maximumSubArraySum = check;
//     }
//   }

//   return maximumSubArraySum;
// }

// console.log(subArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// function maximumSubArraySum(arr) {
//   let currentSum = 0;
//   let maxSum = -Infinity;

//   for (let el of arr) {
//     currentSum += el;

//     if (currentSum > maxSum) {
//       maxSum = currentSum;
//     }

//     if (currentSum < 0) {
//       currentSum = 0;
//     }
//   }

//   return maxSum;
// }

// console.log(maximumSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// function maximumSubArraySum(arr) {
//   let maxValue = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     let currValue = 0;
//     for (let j = i; j < arr.length; j++) {
//       currValue += arr[j];
//       if (currValue > maxValue) {
//         maxValue = currValue;
//       }
//     }
//   }

//   return maxValue;
// }
// console.log(maximumSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// **********************************************************************************************************

// HomeWork

// 1.  Find the Longest Subarray with Sum = K (Optimized)

// function longestSubArrayWithSum(arr, sum) {
//   let currentSum = 0;
//   let maxSum = -Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     currentSum += arr[i];

//     if (currentSum > maxSum) {
//       maxSum = currentSum;
//     }

//     if (currentSum < 0) {
//       currentSum = 0;
//     }
//   }

//   return maxSum;
// }

// console.log(longestSubArrayWithSum([2 - 3 - 4, 8, 0, 10], 9));

// function longestSubArrayWithSum(arr, sum) {
//   const totalSubArray = [];

//   for (let i = 0; i < arr.length; i++) {
//     const singleSubArray = [];
//     for (let j = i; j < arr.length; j++) {
//       singleSubArray.push(arr[j]);
//       totalSubArray.push([...singleSubArray]);
//     }
//   }

//   for (let k = 0; k < totalSubArray.length; k++) {
//     const totalSum = totalSubArray[k].reduce((acc, el) => {
//       return (acc += el);
//     }, 0);

//     if (totalSum === sum) {
//       return totalSubArray[k];
//     }
//   }
// }

// console.log(longestSubArrayWithSum([1, 2, 3, 4, 5], 3));

// **********************************************************************************************************

// 2.  Find the Length of the Longest Subarray with No Repeating Elements

// function lengthOfLongestUniqueSubarray(arr) {
//   let set = new Set();
//   let left = 0,
//     maxLength = 0;

//   for (let right = 0; right < arr.length; right++) {
//     while (set.has(arr[right])) {
//       set.delete(arr[left]);
//       left++;
//     }
//     set.add(arr[right]);
//     maxLength = Math.max(maxLength, right - left + 1);
//   }

//   return maxLength;
// }

// const arr = [1, 2, 3, 1, 2, 3, 4];
// console.log(lengthOfLongestUniqueSubarray(arr)); // Output: 4

// **********************************************************************************************************

// 3.  Maximum Subarray (Kadane’s Algorithm – O(n))

function maxSubArray(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];

  let start = 0;
  let end = 0;
  let tempStart = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > currentSum + nums[i]) {
      currentSum = nums[i];
      tempStart = i;
    } else {
      currentSum += nums[i];
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
      start = tempStart;
      end = i;
    }
  }

  return nums.slice(start, end + 1);
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
