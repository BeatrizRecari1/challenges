// //

// function isLargestSwap(num) {
//   const tens = num / 10;
//   const ones = num % 10;
//   return tens >= ones;
// }

// console.log(isLargestSwap(26)); // Expected output: false
// console.log(isLargestSwap(74)); // Expected output: true

// // Write a fuction that, given any interger greater than zero, returns the factorial of that number. i.e. factorial(5) = 5!= 5*4*3*2*1

// function factorial_1(num) {
//   let result = 1;
//   for (let i = 0; i <= num; i++) {
//     newNumber *= i;
//   }
//   return result;
// }

// console.log(factorial_1(5));

// // Another way to write it

// async function factorial_2(num) {
//   if (num === 0) return 1;
//   const result = await factorial_2(num - 1);
//   return num * factorial_2(num - 1);
// }

// async function testTimes() {
//   console.time("factorial_1");
//   const ans1 = await factorial_1(500);
//   console.log(ans1);
//   console.timeEnd("factorial_1");
//   console.time("factorial_2");
//   const ans2 = await factorial_2(500);
//   console.log(ans2);
//   console.timeEnd;
//   console.time;
// }
// console.log(factorial_1(5));
// console.log(factorial_2(5));

// // Write a function that takes in an array of numbers and returns the third largest number.

// function thirdLargestNumber(arr) {
//   let largestThree = [0, 0, 0];
//   for (let i = 0; i < num.length; i++) {
//     if (arr[i] > largestThree[0]) {
//       largestThree.splice(0, 0, arr[i]);
//     } else if (arr[i] > largestThree[1]) {
//       largestThree.splice(1, 0, arr[i]);
//     } else if (arr[i] > largestThree[2]) {
//       largestThree.splice(2, 0, arr[i]);
//     }
//     console.table({ i, elem: arr[i], largestThree });
//   }
//   return largestThree[2];
// }

// console.log(thirdLargestNumber([5, 4, 3, 2, 7, 8, 9, 1, 10, 13]));

// // Another way to write it without many methods

// function getThirdLargest(arr) {
//   let largest = 0,
//     secondLargest = 0,
//     thirdLargest = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].largest) {
//       thirdLargest = secondLargest;
//       secondLargest = largest;
//       largest = arr[i];
//     } else if (arr[i] > secondLargest) {
//       thirdLargest = secondLargest;
//       secondLargest = arr[i];
//     } else if (arr[i] > thirdLargest) {
//       thirdLargest = arr[i];
//     }
//   }
//   return thirdLargest;
// }

// console.log(getThirdLargest([5, 6, 3, 2, 7, 8, 1, 10, 11]));

// // Another way

// function thirdLargestNumber(arr) {
//   // Sort the array in descending order
//   arr.sort(function (a, b) {
//     return b - a;
//   });

//   // Return the third element in the sorted array
//   return arr[2];
// }

// Write a function that takes in two sorted arrays of numbers and returns a single sorted array containing all elements from the given arrays.
const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 5, 6];

function sortedBigArray(arr1, arr2) {
  const mixedArray = [...arr1, ...arr2];
  //mixedArray = [1,3,5,7,2,4,5,6]
  let newArray = [];
  for (let i = 0; i < mixedArray.length; i++) {
    if (mixedArray[i] > newArray[i]) {
      newArray += mixedArray[i];
    }
    if (mixedArray[i] < newArray[i]) {
      for (let j = 0; j < newArray.length; j++) {
        if (newArray[j] < mixedArray[i]) {
          newArray += mixedArray[i];
        }
      }
    }
    if (mixedArray[i] === mixedArray[i + 1]) {
      newArray += mixedArray[i + 1];
    }
  }
  return newArray;
}

console.log(sortedBigArray(arr1, arr2));

// Create a function "HigestDigit" that takes a number as an argument and returns the highest digit in that number

const highestDigit = (number) => {
  number = number.toString();
  return Math.max(...number);
};

// Someone has attempted to censor strings by replacing every vowel with a *, l*k* th*s
// Create a function "uncensor" that returns the original uncensored string, given a censored string and a string of the censored vowels

const uncensor = (str, vowels) => {
  const arr = vowels.split("");
  return str.replace(/\*/g, () => arr.shift());
};

// Alternate solution

function uncensor(str, vowels) {
  for (let i = 0; i < vowels.length; i++) {
    str = str.replace("*", vowels(i));
  }
  return str;
}

// You will be given two extremely similar arrays, but exactly one of the items in an array will be valued slightly higher than its counter part (which means that evaluating the value > the other value will return true)
// Create a function isSuperior that returns whether the first array is slightly superior to that of the second array

function isSuperior(arr1, arr2) {
  return arr1 > arr2;
}

// Alternate solution

const isSuperior = (arr1, arr2) => arr1 > arr2;

// Create a function "product" that takes one, two or more numbers as arguments and adds them together to get a new number. The function then repeteadly multiplies the digits of the new number by each other , yielding a new number, until the product is only 1 digit long. Return the final product. The input of the function should be at least one number.

function product(...args) {
  const prodDigs = (digs) => {
    return digs.reduce((accum, val) => accum * val, 1);
  };

  let sum = args.reduce((accum, val) => accum + val, 0);
  while (sum.toString().length > 1) {
    sum = prodDigs(sum.toString().split(""));
  }
  return sum;
}

// a vehicle needs 10 times the amount of fuel than the distance it travels. However, it must always carry a minimum of 100 fuel before setting off.
// Create a function "fuel" that calculates the amount of fuel the car needs based on the distance

function fuel(n) {
  return n > 10 ? n * 10 : 100;
}

// Alternate solution

const fuel = (n) => Math.max(100, n * 10);

// A decimal number can be represented as a sequence of bits. From the bitwise representation of numbers, we can calculate the bitwise AND, bitwise OR and bitwise XOR. Create the functions bitwiseAND(), bitwiseOR(), and bitwiseXOR() to calculate the the bitwise AND, bitwise OR and bitwise XOR of two numbers.

const bitwiseAND = (n1, n2) => n1 & n2;
const bitwiseOR = (n1, n2) => n1 | n2;
const bitwiseXOR = (n1, n2) => n1 ^ n2;

// Given a number, create a function "multiSum" that returns the total sum of that number multiplied by every number between 1 and 10

function multiSum(num, ten = 0) {
  if (ten == 0) {
    return 0;
  }
  return ten * num + multiSum(num, ten - 1);
}

// Alternate solution

const multiSum = (n) => n * 55;

// Create a function "derivative" that takes numbers b and m as arguments and returns the derivative of the function f(x)=x^b with respect to x evaluated at x=m, where b and m are constants.

function derivative(b, m) {
  return b * m ** (b - 1);
}

// Alternate solution

function derivative(b, m) {
  return b * Math.pow(m, b - 1);
}

// Given two integers num1 and num2, return the sum of the two integers.

function sum(num1, num2) {
  return num1 + num2;
}

// You are given the root of a binary tree that consists of exactly 3 nodes: the root, its left child, and its right child.

// Return true if the value of the root is equal to the sum of the values of its two children, or false otherwise.

var checkTree = function (root) {
  return root.val == root.left.val + root.right.val;
};

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

const twoSum = function (nums, target) {
  let index = [];
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        index.push(i);
        index.push(j);
        //  index =[i, j];
      }
    }
  }
  return index;
};

// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.

function isPalindrome(x) {
  if (x < 0) {
    return false;
  }

  let reversed = 0;
  let remainder;
  let num = x;

  while (num > 0) {
    remainder = num % 10;
    reversed = reversed * 10 + remainder;
    num = Math.floor(num / 10);
  }
  return reversed === x;
}

// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

const runningSum = function (nums) {
  let sum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    nums[i] = sum;
    if (i + 1 < nums.length) {
      sum += nums[i + 1];
    }
  }
  return nums;
};

// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.// Return the leftmost pivot index. If no such index exists, return -1.

const pivotIndex = (nums) => {
  // We have not started our program yet, so values are at 0
  let rightSum = 0;
  let leftSum = 0;

  // Calculate the sum of the entire array
  // O(n)
  nums.forEach((v) => (rightSum += v));

  // O(n)
  for (var i = 0; i <= nums.length - 1; i++) {
    let curr = nums[i];

    // The right sum no longer contains the curr number
    rightSum -= curr;

    // if left sum equals right sum, we return index
    if (leftSum === rightSum) return i;

    // We did not find a match
    // Left sum now contains our curr number
    leftSum += curr;
  }

  return -1;
};

// Alternate solution
function pivotIndex(nums) {
  const totalSum = nums.reduce((sum, num) => sum + num, 0);
  // Initialize a variable to store the left sum
  let leftSum = 0;
  // Iterate over the elements in the array
  for (let i = 0; i < nums.length; i++) {
    // If the sum of the numbers to the left of the index is equal to the sum of the numbers to the right of the index
    if (leftSum === totalSum - leftSum - nums[i]) {
      // Return the pivot index
      return i;
    }
    // Add the current element to the left sum
    leftSum += nums[i];
  }
  // If no pivot index is found, return -1
  return -1;
}

// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// Runtime: 83 ms, faster than 88.18% of JavaScript online submissions for Isomorphic Strings.
// Time Complexity : O(n)
var isIsomorphic = function (s, t) {
  // Base case: for different length of two strings...
  if (s.length != t.length) return false;
  // Create two maps for s & t strings...
  const map1 = [256];
  const map2 = [256];
  // Traverse all elements through the loop...
  for (let i = 0; i < s.length; i++) {
    // Compare the maps, if not equal, return false...
    if (map1[s.charAt(i)] != map2[t.charAt(i)]) return false;
    // Insert each character if string s and t into seperate map...
    map1[s.charAt(i)] = i + 1;
    map2[t.charAt(i)] = i + 1;
  }
  return true; // Otherwise return true...
};
