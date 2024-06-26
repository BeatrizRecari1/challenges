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

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

function isSubsequence(s, t) {
  let i = 0,
    j = 0;
  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }
  return i === s.length;
}

// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

function mergeTwoLists(list1, list2) {
  // Create a dummy node to serve as the head of the merged list
  const dummy = new ListNode(0);
  let current = dummy;

  // Loop through both input lists, comparing their values and adding the smallest node to the merged list
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  // Add any remaining nodes from list1 or list2 to the end of the merged list
  if (list1 !== null) {
    current.next = list1;
  }
  if (list2 !== null) {
    current.next = list2;
  }

  // Return the head of the merged list (ignoring the dummy node)
  return dummy.next;
}

// Given the head of a singly linked list, reverse the list, and return the reversed list.

function reverseList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.

function findMiddleNode(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

// Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.
// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.
// Do not modify the linked list.

function detectCycle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    // If there is a cycle, move two pointers at the same speed
    if (slow === fast) {
      // Reset slow to head and move both pointers at the same speed
      slow = head;
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      // The point at which both pointers meet is the start of the cycle
      return slow;
    }
  }

  // If we get here, there is no cycle
  return null;
}

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

function maxProfit(prices) {
  if (!prices || prices.length === 0) {
    return 0;
  }

  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }

  return maxProfit;
}

// // Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

function longestPalindrome(s) {
  if (!s || s.length === 0) {
    return 0;
  }

  let freq = new Map();
  let length = 0;
  let hasOdd = false;

  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i);
    freq.set(char, (freq.get(char) || 0) + 1);
  }

  for (let count of freq.values()) {
    if (count % 2 === 0) {
      length += count;
    } else {
      length += count - 1;
      hasOdd = true;
    }
  }

  return hasOdd ? length + 1 : length;
}

// Given the root of an n-ary tree, return the preorder traversal of its nodes' values.

// Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)

function preorder(root) {
  if (!root) {
    return [];
  }

  let result = [root.val];

  for (let child of root.children) {
    result = result.concat(preorder(child));
  }

  return result;
}

// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

function levelOrder(root) {
  if (!root) {
    return [];
  }

  let result = [];
  let queue = [root];

  while (queue.length > 0) {
    let level = [];
    let levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();
      level.push(node.val);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    result.push(level);
  }

  return result;
}

// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.
// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.
// You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

function firstBadVersion(n) {
  let left = 1;
  let right = n;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (isBadVersion(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

// Given the root of a binary tree, determine if it is a valid binary search tree (BST).
// A valid BST is defined as follows:
// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

function isValidBST(root) {
  function isValid(node, min, max) {
    if (!node) {
      return true; // an empty tree is a valid BST
    }
    if (
      (min !== null && node.val <= min) ||
      (max !== null && node.val >= max)
    ) {
      return false; // violates the BST property
    }
    return (
      isValid(node.left, min, node.val) && isValid(node.right, node.val, max)
    );
  }

  return isValid(root, null, null);
}

// Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.
// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

function lowestCommonAncestor(root, p, q) {
  if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  } else {
    return root;
  }
}

// An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.
// You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].
// To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.
// Return the modified image after performing the flood fill.

function floodFill(image, sr, sc, color) {
  const oldColor = image[sr][sc];

  // If the starting pixel is already of the target color, no need to fill
  if (oldColor === color) {
    return image;
  }

  const dfs = (r, c) => {
    // Check if current pixel is of oldColor
    if (image[r][c] === oldColor) {
      image[r][c] = color;

      // Recursively fill adjacent pixels
      if (r > 0) dfs(r - 1, c);
      if (c > 0) dfs(r, c - 1);
      if (r < image.length - 1) dfs(r + 1, c);
      if (c < image[0].length - 1) dfs(r, c + 1);
    }
  };

  // Start the flood fill from the starting pixel
  dfs(sr, sc);

  return image;
}

// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

function numIslands(grid) {
  const dfs = (i, j) => {
    if (
      i < 0 ||
      i >= grid.length ||
      j < 0 ||
      j >= grid[0].length ||
      grid[i][j] !== "1"
    ) {
      return;
    }
    grid[i][j] = "0"; // mark the current land as visited
    dfs(i + 1, j); // search down
    dfs(i - 1, j); // search up
    dfs(i, j + 1); // search right
    dfs(i, j - 1); // search left
  };

  let islandCount = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        // if current cell is land
        dfs(i, j); // search for adjacent lands
        islandCount++; // increment island count
      }
    }
  }

  return islandCount;
}

// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

const fib = (n, res = [0, 1]) =>
  n == 0 || n == 1 || res[n]
    ? res[n]
    : (res[n] = fib(n - 1, res) + fib(n - 2, res));

// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let arr = [1, 2];
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n - 1];
};

// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The test cases are generated so that the answer will be less than or equal to 2 * 109.

function uniquePaths(m, n) {
  const dp = new Array(m).fill().map(() => new Array(n).fill(1));

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
}

// You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

// You can either start from the step with index 0, or the step with index 1.

// Return the minimum cost to reach the top of the floor.

function minCostClimbingStairs(cost) {
  const n = cost.length;
  const dp = new Array(n);
  dp[0] = cost[0];
  dp[1] = cost[1];

  for (let i = 2; i < n; i++) {
    dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
  }

  return Math.min(dp[n - 1], dp[n - 2]);
}

// Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

function findAnagrams(s, p) {
  const result = [];
  const pCount = new Array(26).fill(0);
  const sCount = new Array(26).fill(0);

  // Calculate the frequency of each character in p
  for (let i = 0; i < p.length; i++) {
    pCount[p.charCodeAt(i) - 97]++;
  }

  // Slide a window of size p.length over s and check if each substring is an anagram of p
  for (let i = 0; i < s.length; i++) {
    sCount[s.charCodeAt(i) - 97]++;
    if (i >= p.length) {
      sCount[s.charCodeAt(i - p.length) - 97]--;
    }
    if (i >= p.length - 1 && compareArrays(pCount, sCount)) {
      result.push(i - p.length + 1);
    }
  }

  return result;
}

// Helper function to compare two arrays of integers
function compareArrays(a, b) {
  for (let i = 0; i < 26; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}

// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

function characterReplacement(s, k) {
  const count = new Array(26).fill(0);
  let maxCount = 0;
  let maxLength = 0;
  let start = 0;

  // Slide a window over s and keep track of the count of each character in the window
  for (let end = 0; end < s.length; end++) {
    const charIndex = s.charCodeAt(end) - 65;
    count[charIndex]++;
    maxCount = Math.max(maxCount, count[charIndex]);

    // If the number of characters that need to be changed exceeds k, move the window's start position
    while (end - start + 1 - maxCount > k) {
      const startCharIndex = s.charCodeAt(start) - 65;
      count[startCharIndex]--;
      start++;
      maxCount = Math.max(...count);
    }

    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

function isHappy(n) {
  let seen = new Set(); // to keep track of previously seen numbers
  while (n !== 1 && !seen.has(n)) {
    // continue until number becomes 1 or we encounter a previously seen number
    seen.add(n); // add current number to the set of seen numbers
    let sum = 0;
    while (n > 0) {
      // calculate the sum of squares of digits
      const digit = n % 10;
      sum += digit * digit;
      n = Math.floor(n / 10);
    }
    n = sum; // set n to the calculated sum
  }
  return n === 1; // if n is 1, it's a happy number; otherwise, it's not
}

// Given an m x n matrix, return all elements of the matrix in spiral order.

function spiralOrder(matrix) {
  const result = [];
  let rowStart = 0;
  let rowEnd = matrix.length - 1;
  let colStart = 0;
  let colEnd = matrix[0].length - 1;

  while (rowStart <= rowEnd && colStart <= colEnd) {
    // Traverse right
    for (let i = colStart; i <= colEnd; i++) {
      result.push(matrix[rowStart][i]);
    }
    rowStart++;

    // Traverse down
    for (let i = rowStart; i <= rowEnd; i++) {
      result.push(matrix[i][colEnd]);
    }
    colEnd--;

    // Traverse left
    if (rowStart <= rowEnd) {
      for (let i = colEnd; i >= colStart; i--) {
        result.push(matrix[rowEnd][i]);
      }
      rowEnd--;
    }

    // Traverse up
    if (colStart <= colEnd) {
      for (let i = rowEnd; i >= rowStart; i--) {
        result.push(matrix[i][colStart]);
      }
      colStart++;
    }
  }

  return result;
}

// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

function paperwork(n, m) {
  if (n < 0 || m < 0) {
    return 0;
  } else {
    return n * m;
  }
}

// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

function greet(name, owner) {
  // Add code here
  if (name === owner) {
    return "Hello boss";
  } else {
    return "Hello guest";
  }
}

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

function newString(n, s) {
  let str = "";
  for (let i = 0; i < n; i++) {
    str += s;
  }
  return str;
}

// Write a function to split a string and convert it into an array of words.

function splitString(string) {
  return string.split(" ");
}

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareNumber(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const squaredNumber = numbers[i] * numbers[i];
    sum += squaredNumber;
  }
  return sum;
}

// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

function getGrade(s1, s2, s3) {
  const average = (s1 + s2 + s3) / 3;

  if (average >= 90) {
    return "A";
  } else if (average >= 80) {
    return "B";
  } else if (average >= 70) {
    return "C";
  } else if (average >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord(bool) {
  if (bool === true) {
    return "Yes";
  } else {
    return "No";
  }
}

// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

function smashWordsIntoSentence(words) {
  if (!Array.isArray(words)) {
    return "Input is not an array.";
  }

  return words.join(" ");
}

// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

function greet(name) {
  //your code here
  return `Hello, ${name} how are you doing today?`;
}

// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

function cockroachSpeed(s) {
  const speedCmPs = (s * 100000) / 3600;

  const roundedSpeed = Math.floor(speedCmPs);

  return roundedSpeed;
}

// Write a function which converts the input string to uppercase.

function convertToUpperCase(str) {
  const newStr = str.toUpperCase();
  return newStr;
}

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMars(s) {
  const newArr = s.replace(/!/g, "");
  return newArr;
}

// Write a function greet that returns the string "Hello World!"
function greet() {
  return "Hello World!";
}

// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function inLove(flower1, flower2) {
  if (flower1 % 2 === 0 && flower2 % 2 === 1) {
    return true;
  } else if (flower1 % 2 !== 0 && flower2 === 0) {
    return true;
  } else {
    return false;
  }
}

// Let's play! You have to return which player won! In case of a draw return Draw!. Rock-Paper-Scissors

const rps = (p1, p2) => {
  if (p1 === "scissors" && p2 === "paper") {
    return "Player 1 won!";
  } else if (p1 === "rock" && p2 === "scissors") {
    return "Player 1 won!";
  } else if (p1 === "paper" && p2 === "rock") {
    return "Player 1 won!";
  } else if (p1 === "scissors" && p2 === "rock") {
    return "Player 2 won!";
  } else if (p1 === "paper" && p2 === "scissors") {
    return "Player 2 won!";
  } else if (p1 === "rock" && p2 === "paper") {
    return "Player 2 won!";
  } else {
    return "Draw!";
  }
};

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
  return Array.from(String(n), Number).reverse();
}

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() == "x") sum++;
    if (str[i].toLowerCase() == "o") sum--;
  }
  return sum == 0;
}

// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s) {
  let timeInMiliseconds = h * 3600000 + (m * 60000)(s * 1000);
  return timeInMiliseconds;
}

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

function betterThanAverage(classPoints, yourPoints) {
  let averagePoints = 0;
  for (let i = 0; i < classPoints.length; i++) {
    averagePoints += classPoints[i];
  }
  averagePoints = averagePoints / classPoints.length;
  return yourPoints > averagePoints;
}

// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

function printerError(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] > "m") {
      count++;
    }
  }
  return count + "/" + s.length;
}

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

function squareDigits(num) {
  let string = num.toString();
  let results = [];
  for (let i = 0; i < string.length; i++) {
    results[i] = string[i] * string[i];
  }
  return Number(results.join(""));
}

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str) {
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++)
    for (let j = i + 1; j < str.length; j++)
      if (str[i] === str[j]) return false;
  return true;
}

// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

function nbYear(p0, percent, aug, p) {
  for (var years = 0; p0 < p; years++) {
    p0 = Math.floor(p0 + (p0 * percent) / 100 + aug);
  }
  return years;
}

// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

function findTheNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}

// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

function sumArray(array) {
  if (array == null || array.length <= 2) {
    return 0;
  }

  var max = Math.max.apply(Math, array);
  var min = Math.min.apply(Math, array);
  var sum = 0;

  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum - max - min;
}

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
  // your code here
  var newArr = [];
  var positiveNumber = 0;
  var negativeNumber = 0;

  // Validate Input
  if (input === null || input.length === 0) return newArr;

  // Loop through array of Numbers
  for (var i = 0; i < input.length; i++) {
    if (input[i] == 0) continue;
    // Count positives
    else if (input[i] > 0) positiveNumber++;
    // Sum negatives
    else if (input[i] < 0) negativeNumber += input[i];
  }

  // Prepare Output
  newArr.push(positiveNumber);
  newArr.push(negativeNumber);

  return newArr;
}

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

function solution(str, ending) {
  return str.endsWith(ending);
}

// Code as fast as you can, double the integer and return it

function doubleInteger(integer) {
  return integer * 2;
}

// Implement a function which convert the given boolean value into its string representation.

function booleanToString(b) {
  return b.toString();
}

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

function arrayWithValue(a, x) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === x) {
      return true;
    }
  }
  return false;
}

// Alternative solution

function arrayWithValue(a, x) {
  return a.includes(x);
}

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}

// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

var isSquare = function (n) {
  return Number.isInteger(Math.sqrt(n));
};

// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

function removeSmallest(numbers) {
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  var vowelsCount = 0;
  var vowels = ["a", "e", "i", "o", "u"];
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        vowelsCount++;
      }
    }
  }

  return vowelsCount;
}

// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

function addBinary(a, b) {
  const sum = a + b;
  return sum.toString(2);
}

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(arrayOfSheep) {
  let sum = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      sum += arrayOfSheep[i];
    }
  }
  return sum;
}

// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

var min = function (list) {
  var min = list[0];
  for (var i = 0; i < list.length; i++) {
    var cur = list[i];
    if (cur < min) min = cur;
  }
  return min;
};

var max = function (list) {
  var max = list[0];
  for (var i = 0; i < list.length; i++) {
    var cur = list[i];
    if (cur > max) max = cur;
  }
  return max;
};

// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

var number = function (array) {
  return array.map(function (line, index) {
    return index + 1 + ": " + line;
  });
};

// have the function LetterCapitalize(str) take the str parameter and capitalize the first letter of each word

function LetterCapitalize(str) {
  // Split the string into an array of words
  let words = str.split(" ");

  // Iterate over each word in the array
  for (let i = 0; i < words.length; i++) {
    // Capitalize the first letter of each word
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  // Join the modified words back into a single string
  let capitalizedStr = words.join(" ");

  return capitalizedStr;
}

// have the function FirstFactorial(num) take the num parameter passed to it and return the factorial in javascript

function FirstFactorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    let factorial = 1;
    for (let i = 2; i <= num; i++) {
      factorial *= i;
    }
    return factorial;
  }
}

// Have the function CheckNums(num1,num2) take both parameters being passed and return the string true if num2 is greater than num1, otherwise return the string false. If the parameter values are equal to each other then return the string -1.

function CheckNums(num1, num2) {
  // code goes here
  if (num1 > num2) {
    return "false";
  } else if (num1 < num2) {
    return "true";
  } else {
    return "-1";
  }
  return num1;
}

// Have the function SimpleAdding(num) add up all the numbers from 1 to num. For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10. For the test cases, the parameter num will be any number from 1 to 1000.

function SimpleAdding(num) {
  // code goes here
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

// Have the function SimpleEvens(num) check whether every single number in the passed in parameter is even. If so, return the string true, otherwise return the string false. For example: if num is 4602225 your program should return the string false because 5 is not an even number.

function SimpleEvens(num) {
  let numArr = num.toString().split("");

  for (let i = 0; i < numArr.length; i++) {
    if (parseInt(numArr[i]) % 2 !== 0) {
      return false;
    }
  }
  return true;
}

// Have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str. For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

function dashInsert(str) {
  let result = str[0];

  for (let i = 1; i < srt.length; i++) {
    if (str[i - 1] % 2 !== 0 && str[i] % 2 !== 0) {
      result += "-" + str[i];
    } else {
      result += str[i];
    }
  }
  return result;
}

// Have the function OneDecremented(str) count how many times a digit appears that is exactly one less than the previous digit. For example: if str is "5655984" then your program should return 2 because 5 appears directly after 6 and 8 appears directly after 9. The input will always contain at least 1 digit.

function oneDecremented(str) {
  let result = 0;

  for (let i = 1; i < str.length; i++) {
    const previousNum = parseInt(str[i - 1]);
    const currentNum = parseInt(str[i]);

    if (currentNum === previousNum - 1) {
      result++;
    }
  }
  return result;
}

// Have the function Superincreasing(arr) take the array of numbers stored in arr and determine if the array forms a superincreasing sequence where each element in the array is greater than the sum of all previous elements. The array will only consist of positive integers. For example: if arr is [1, 3, 6, 13, 54] then your program should return the string "true" because it forms a superincreasing sequence. If a superincreasing sequence isn't formed, then your program should return the string "false"

function superIncreasing(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= sum) {
      return "false";
    }
    sum += arr[i];
  }
  return "true";
}

// Have the function ChangingSequence(arr) take the array of numbers stored in arr and return the index at which the numbers stop increasing and begin decreasing or stop decreasing and begin increasing. For example: if arr is [1, 2, 4, 6, 4, 3, 1] then your program should return 3 because 6 is the last point in the array where the numbers were increasing and the next number begins a decreasing sequence. The array will contain at least 3 numbers and it may contains only a single sequence, increasing or decreasing. If there is only a single sequence in the array, then your program should return -1. Indexing should begin with 0.

function changingSequence(arr) {
  let increasing = arr[0] < arr[1];

  for (let i = 1; i < arr.length; i++) {
    if (
      (increasing && arr[i] < arr[i - 1]) ||
      (!increasing && arr[i] > arr[i - 1])
    ) {
      return i - 1;
    }
  }
  return -1;
}

// Have the function BitwiseOne(strArr) take the array of strings stored in strArr, which will only contain two strings of equal length that represent binary numbers, and return a final binary string that performed the bitwise OR operation on both strings. A bitwise OR operation places a 0 in the new string where there are zeroes in both binary strings, otherwise it places a 1 in that spot. For example: if strArr is ["1001", "0100"] then your program should return the string "1101"
function BitWiseOne(strArr) {
  const binaryOne = strArr[0];
  const binaryTwo = strArr[1];
  let result = "";

  for (let i = 0; i < binaryOne.length; i++) {
    if (binaryOne[i] === "1" || binaryTwo[i] === "1") {
      result += "1";
    } else {
      result += "0";
    }
  }
  return result;
}
// Have the function WordCount(str) take the str string parameter being passed and return the number of words the string contains (e.g. "Never eat shredded wheat or cake" would return 6). Words will be separated by single spaces.

function WordCount(str) {
  const stringSplit = str.split(" ");

  return stringSplit.length;
}

// Have the function VowelCount(str) take the str string parameter being passed and return the number of vowels the string contains (ie. "All cows eat grass and moo" would return 8). Do not count y as a vowel for this challenge.

function VoweCount(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let sum = 0;

  const strToLowerCase = str.toLowerCase();

  for (let i = 0; i < strToLowerCase.length; i++) {
    if (vowels.includes(strToLowerCase[i])) {
      sum++;
    }
  }
  return sum;
}

// Have the function SwapCase(str) take the str parameter and swap the case of each character. For example: if str is "Hello World" the output should be hELLO wORLD. Let numbers and symbols stay the way they are.

function SwapCase(str) {
  let swapped = "";

  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (char === char.toLowerCase()) {
      swapped += char.toUpperCase();
    } else {
      swapped += char.toLowerCase();
    }
  }
  return swapped;
}

// Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.

function FindIntersection(strArr) {
  // Split the two input strings into arrays of numbers
  const arr1 = strArr[0].split(",");
  const arr2 = strArr[1].split(",");

  // Initialize an empty array to store the intersection
  const intersection = [];

  // Initialize two pointers to traverse the arrays
  let i = 0;
  let j = 0;

  // Find the intersection of the two arrays
  while (i < arr1.length && j < arr2.length) {
    const num1 = parseInt(arr1[i]);
    const num2 = parseInt(arr2[j]);

    if (num1 === num2) {
      intersection.push(num1);
      i++;
      j++;
    } else if (num1 < num2) {
      i++;
    } else {
      j++;
    }
  }

  // If there is no intersection, return false
  if (intersection.length === 0) {
    return "false";
  }

  // Convert the intersection array to a comma-separated string
  const result = intersection.join(",");
  return result;
}

// Have the function RemoveBrackets(str) take the str parameter being passed, which will contain only the characters "(" and ")", and determine the minimum number of brackets that need to be removed to create a string of correctly matched brackets. For example: if str is "(()))" then your program should return the number 1. The answer could potentially be 0, and there will always be at least one set of matching brackets in the string.

function RemoveBrackets(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      count++;
    } else if (str[i] === ")" && count === 0) {
      count++;
    } else {
      count--;
    }
  }
  return count;
}

// Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be between 1 and 18 and the input will always be an integer.

function FirstFactorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    let factorial = 1;
    for (let i = 2; i <= num; i++) {
      factorial *= i;
    }
  }
  return factorial;
}

// Have the function DistinctCharacters(str) take the str parameter being passed and determine if it contains at least 10 distinct characters, if so, then your program should return the string true, otherwise it should return the string false. For example: if str is "abc123kkmmmm?" then your program should return the string false because this string contains only 9 distinct characters: a, b, c, 1, 2, 3, k, m, ? adds up to 9.

function DistinctCharacters(str) {
  let newArray = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (!newArray.includes(char)) {
      newArray.push(char);
    }
    if (newArray.length >= 10) {
      return "true";
    }
  }
  return "false";
}

// Have the function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon.

function timeConvert(num) {
  const hours = Math.floor(num / 60);
  const minutes = num % 60;

  return hours + ":" + minutes;
}

// Have the function CountingMinutesI(str) take the str parameter being passed which will be two times (each properly formatted with a colon and am or pm) separated by a hyphen and return the total number of minutes between the two times. The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the output should be 1320.

function CountingMinutesI(str) {
  // code goes here
  var times = str.split("-");
  var startTime = times[0];
  var endTime = times[1];

  // Function to convert a time to minutes in 24-hour format
  function convertToMinutes(time) {
    var parts = time.split(":");
    var hours = parseInt(parts[0]);
    var minutes = parseInt(parts[1].slice(0, 2));
    var period = parts[1].slice(2);

    if (period === "pm" && hours !== 12) {
      hours += 12;
    } else if (period === "am" && hours === 12) {
      hours = 0;
    }

    return hours * 60 + minutes;
  }

  // Convert start and end times to minutes
  var startMinutes = convertToMinutes(startTime);
  var endMinutes = convertToMinutes(endTime);

  // Calculate the total minutes between the times
  var totalMinutes;
  if (endMinutes > startMinutes) {
    totalMinutes = endMinutes - startMinutes;
  } else if (endMinutes < startMinutes) {
    totalMinutes = 24 * 60 - startMinutes + endMinutes;
  } else {
    totalMinutes = 0;
  }

  return totalMinutes;
}

// Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.

function LetterChanges(str) {
  var modifiedStr = "";

  for (var i = 0; i < str.length; i++) {
    var char = str[i];

    // Check if the character is a letter
    if (char.match(/[a-z]/i)) {
      // Convert the letter to the next letter in the alphabet
      var nextChar = String.fromCharCode(char.charCodeAt(0) + 1);

      // Handle wrapping around from 'z' to 'a'
      if (nextChar === "{") {
        nextChar = "a";
      }

      // Capitalize the vowel letters
      if (nextChar.match(/[aeiou]/i)) {
        nextChar = nextChar.toUpperCase();
      }

      modifiedStr += nextChar;
    } else {
      modifiedStr += char;
    }
  }

  return modifiedStr;
}

// Example usage:
console.log(LetterChanges("hello")); // Output: "Ifmmp"
console.log(LetterChanges("fun times!")); // Output: "gvO Ujnft!"

// Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space.

function LetterCapitalize(str) {
  let words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    words[i] = word.charAt(0).toUpperCase() + word.slice(1);
  }

  const capitalizedStr = words.join(" ");

  return capitalizedStr;
}

// Have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several characters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter.

function SimpleSymbols(str) {
  // Check the first and last characters
  if (str[0] !== "+" || str[str.length - 1] !== "+") {
    return "false";
  }

  // Iterate through each character starting from the second position
  for (let i = 1; i < str.length - 1; i++) {
    if (/^[a-zA-Z]$/.test(str[i])) {
      // If a letter is found
      if (str[i - 1] !== "+" || str[i + 1] !== "+") {
        // Check if it's not surrounded by '+'
        return "false";
      }
    }
  }

  return "true";
}

// Example usage:
console.log(SimpleSymbols("++d+===+c++==a")); // false
console.log(SimpleSymbols("+a+b+c+")); // true

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

const totalAmount = (d) => d * 40 - (d > 6 ? 50 : d > 2 ? 20 : 0);

// Have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string.

function AlphabetSoup(str) {
  const charArray = str.split("");

  const sortedArray = charArray.sort();

  const sortedString = sortedArray.join("");

  return sortedString;
}

// Create a method to see whether the string is ALL CAPS.

String.prototype.toUpperCase = function () {
  return !/[a-z]/.test(this);
};

// Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
const languages = {
  english: "Welcome",
  czech: "Vitejte",
  danish: "Velkomst",
  dutch: "Welkom",
  estonian: "Tere tulemast",
  finnish: "Tervetuloa",
  flemish: "Welgekomen",
  french: "Bienvenue",
  german: "Willkommen",
  irish: "Failte",
  italian: "Benvenuto",
  latvian: "Gaidits",
  lithuanian: "Laukiamas",
  polish: "Witamy",
  spanish: "Bienvenido",
  swedish: "Valkommen",
  welsh: "Croeso",
};
function Greeting(language) {
  return languages[language] || "Welcome";
}

// function isPalindrome

function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedStr = cleanStr.split("").reverse().join("");
  return reversedStr === cleanStr;
}

// Have the function NonrepeatingCharacter(str) take the str parameter being passed, which will contain only alphabetic characters and spaces, and return the first non-repeating character. For example: if str is "agettkgaeee" then your program should return k. The string will always contain at least one character and there will always be at least one non-repeating character.

function NonrepeatingCharacter(str) {
  // Remove spaces from the string
  str = str.replace(/\s/g, "");

  // Create a map to store character frequencies
  const charMap = {};

  // Iterate through each character in the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // If the character already exists in the map, increment its frequency
    if (charMap[char]) {
      charMap[char]++;
    } else {
      // Otherwise, initialize the character's frequency to 1
      charMap[char] = 1;
    }
  }

  // Find the first non-repeating character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // If the character's frequency is 1, return it
    if (charMap[char] === 1) {
      return char;
    }
  }
}

// Example usage
console.log(NonrepeatingCharacter("agettkgaeee")); // Output: k

// Create a function with two arguments that will return an array of the first n multiples of x

function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(x * i);
    return z;
  }
}

// Create a function reverseArr that takes a number and returns an array with the digits of the number in reverse order

function reversedArr(number) {
  // Convert the number to a string
  var numStr = String(number);

  // Convert the string to an array of characters, reverse it, and convert it back to a string
  var reversedStr = numStr.split("").reverse().join("");

  // Convert each character back to an integer and return the array
  var reversedDigits = Array.from(reversedStr, Number);

  return reversedDigits;
}

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "False";
  }
}

// Messi is a scorer in all three major soccer leagues. Create a function that returns the sum of all his goals in all three leagues.

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

function removeEveryOther(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i += 2) {
    newArray.push(arr[i]);
  }
  return newArray;
}

// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
function gimme(a) {
  return a.indexOf(
    a.concat().sort(function (a, b) {
      return a - b;
    })[1]
  );
}

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

var isAnagram = function (test, original) {
  var t = test.toLowerCase().split("").sort().join("");
  var o = original.toLowerCase().split("").sort().join("");
  return t == o ? true : false;
};

// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

function shortCut(string) {
  let result = string.replace(/[aeiou]g/, "");
  return result;
}

// Write a function that returns both the minimum and maximum number of the given list/array.

function minMax(arr) {
  var max = arr[0],
    min = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }
  return [min, max];
}

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

function GetSum(a, b) {
  var result = 0;
  var bigger = a > b ? a : b;
  var smaller = a > b ? b : a;
  for (var i = smaller; i <= bigger; i++) {
    result += i;
  }
  return result;
}

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filterList(l) {
  return l.filter((element) => typeof element === "number");
}

// Use variables to find the sum of the goals Messi scored in 3 competitions

var laLigaGoals = 43;
var championsLeagueGoals = 10;
var copaDelReyGoals = 5;

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;

// When provided with a number between 0-9, return it in words.

function switchItUp(number) {
  //Write your own Code!
  switch (number) {
    case 1:
      1;
      return "One";
      break;
    case 2:
      2;
      return "Two";
      break;
    case 3:
      3;
      return "Three";
      break;
    case 4:
      4;
      return "Four";
      break;
    case 5:
      5;
      return "Five";
      break;
    case 6:
      6;
      return "Six";
      break;
    case 7:
      7;
      return "Seven";
      break;
    case 8:
      8;
      return "Eight";
      break;
    case 9:
      9;
      return "Nine";
      break;
    case 0:
      0;
      return "Zero";
      break;
  }
}

// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

function move(position, roll) {
  // return the new position
  return position + roll * 2;
}

// Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.
// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

function calculateYears(principal, interest, tax, desired) {
  // your code
  var years = 0;
  while (principal < desired) {
    principal += principal * interest * (1 - tax);
    years++;
  }
  return years;
}

// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.
// Square all numbers k (0 <= k <= n) between 0 and n.
// Count the numbers of digits d used in the writing of all the k**2.
// Implement the function taking n and d as parameters and returning this count.

function nbDig(n, d) {
  var res = 0;
  for (var g = 0; g <= n; g++) {
    var square = (g * g + "").split("");
    square.forEach((s) => (s == d ? res++ : null));
  }
  return res;
}

//ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.

function validatePIN(pin) {
  //return true or false
  var n = pin.length;
  if (n != 4 && n != 6) return false;
  for (var i in pin) if (pin[i] > "9" || pin[i] < "0") return false;
  return true;
}

// Have the function ABCheck(str) take the str parameter being passed and return the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result in true because there is exactly three characters between a and b). Otherwise return the string false.

function ABCheck(str) {
  // convert the whole string to lowercase letters
  var str = str.toLowerCase();

  // loop through the string
  for (var i = 0; i < str.length; i++) {
    // check for "a...b"
    if (str[i] === "a" && str[i + 4] === "b") {
      return true;
    }

    // check for "b...a"
    if (str[i] === "b" && str[i + 4] === "a") {
      return true;
    }

    // NOTE: in JavaScript we don't have to worry about out-of-bounds errors
    // because it just returns undefined and the program keeps running
  }

  // if none of above were encountered
  // then return false by default
  return false;
}

// Have the function ExOh(str) take the str parameter being passed and return the string true if there is an equal number of x's and o's, otherwise return the string false. Only these two letters will be entered in the string, no punctuation or numbers. For example: if str is "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's.
function ExOh(str) {
  str = str.toLowerCase();
  var x = 0,
    o = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] == "x") x++;
    else if (str[i] == "o") o++;
  }

  // code goes here
  return x == o;
}

// Have the function SnakeCase(str) take the str parameter being passed and return it in proper snake case format where each word is lowercased and separated from adjacent words via an underscore. The string will only contain letters and some combination of delimiter punctuation characters separating each word.

function SnakeCase(str) {
  str = str.toLowerCase();

  return str.replace(/\W/g, "_");
}

// Have the function SumMultiplier(arr) take the array of numbers stored in arr and return the string true if any two numbers can be multiplied so that the answer is greater than double the sum of all the elements in the array. If not, return the string false. For example: if arr is [2, 5, 6, -6, 16, 2, 3, 6, 5, 3] then the sum of all these elements is 42 and doubling it is 84. There are two elements in the array, 16 * 6 = 96 and 96 is greater than 84, so your program should return the string true.

function SumMultiplier(arr) {
  var total =
    arr.reduce(function (x, y) {
      return x + y;
    }) * 2;

  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] * arr[j] > total) {
        return "true";
      }
    }
  }
  return false;
}

// Have the function CountingMinutesI(str) take the str parameter being passed which will be two times (each properly formatted with a colon and am or pm) separated by a hyphen and return the total number of minutes between the two times. The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the output should be 1320.

function CountingMinutesI(str) {
  var split = str.split("-");

  function toMinutes(time) {
    var hour = parseInt(time.split(":")[0]);
    var minutes = parseInt(time.slice(0, time.length - 2).split(":")[1]);
    var totalMin = hour * 60 + minutes;

    if (time[time.length - 2] === "p")
      if (hour !== 12) return totalMin + 720;
      else return totalMin;
    else if (hour === 12) return totalMin + 720;
    else return totalMin;
  }

  var time1 = toMinutes(split[0]);
  var time2 = toMinutes(split[1]);

  if (time1 > time2) return 1440 - time1 + time2;
  else return time2 - time1;
}

// Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"

function LongestWord(sen) {
  sen = sen.trim();
  sen = sen.replace(/[^a-zA-Z0-9 ]/g, "");

  let longest = "";

  var arr = sen.split(" ").forEach((word) => {
    if (word.length > longest.length) longest = word;
  });

  return longest;
}

// program to find the factorial of a number using recursion`
function factorial(x) {
  // if number is 0
  if (x == 0) {
    return 1;
  }

  // if number is positive
  else {
    return x * factorial(x - 1);
  }
}

// Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.

function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  return base * power(base, exponent - 1);
}

// Write a function that returns the factorial of a number. As a quick refresher, a factorial of a number is the result of that number multiplied by the number before it, and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1.

function factorial(num) {
  if (num === 1) return 1;

  return num * factorial(num - 1);
}

// Now you have to write a function that takes an argument and returns the square of it.

function numSquare(num) {
  return num * num;
}

// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

function findCapitals(word) {
  let newArray = [];

  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      newArray.push(i);
    }
  }
  return newArray;
}

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
  let newString = "";

  for (let i = 0; i < str.length; i++) {
    newString = newString + str[i] + str[i];
  }
  return newString;
}

// Create a function mean that takes an array of numbers and returns the average of those numbers

function mean(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  return result / arr.length;
}

// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

function smallEnough(a, limit) {
  let result = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] <= limit) {
      result++;
    }
  }
  if (result === a.length) {
    return true;
  } else {
    return false;
  }
}

// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.
// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).
// If the score < 0, return 0

function checkExam(array1, array2) {
  // good luck
  let result = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      result += 4;
    } else if (array2[i] == "") {
      result += 0;
    } else {
      result -= 1;
    }
  }
  if (result < 0) {
    return 0;
  }
  return result;
}

// Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str) {
  return str.substring(1, str.length - 1);
}

// You need to write a function that reverses the words in a given string. A word can also fit an empty string

function reverse(string) {
  return string.split(" ").reverse().join(" ");
}

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number.
function stray(numbers) {
  let sortedArray = numbers.sort();

  if (sortedArray[0] !== sortedArray[1]) {
    return sortedArray[0];
  }
  return sortedArray[sortedArray.length - 1];
}

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
  // your code........
  if (number % 2 === 0) {
    return number * 8;
  } else if (number % 2 !== 0) {
    return number * 9;
  }
}

// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
// For example, when the input is green, output should be yellow.

function updateLight(current) {
  if (current === "green") {
    return "yellow";
  } else if (current === "yellow") {
    return "red";
  } else {
    return "green";
  }
}

// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

function sum(numbers) {
  "use strict";
  if (numbers === 0) {
    return 0;
  }

  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

// Write a function that removes the spaces from the string, then return the resultant string.

function noSpace(x) {
  return x.split(" ").join("");
}

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x) {
  return x
    .split("")
    .map((n) => (n < 5 ? 0 : 1))
    .join("");
}

// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// Given a year, return the century it is in.

function century(year) {
  // Finish this :)
  if (year % 100 === 0) {
    return parseInt(year / 100);
  } else {
    return parseInt(year / 100) + 1;
  }
}

// Your function takes two arguments: 1. current father's age (years), 2. current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

function twiceAsOld(a, b) {
  return Math.abs(a - 2 * b);
}

// Make a function that receive age, and return what they drink.

const peopleWithAgeDrink = (age) =>
  age < 14
    ? "drink toddy"
    : age < 18
    ? "drink coke"
    : age < 21
    ? "drink beer"
    : "drink whisky";

// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

function isTriangle(a, b, c) {
  if (a + b > c && a + c > b && c + b > a) {
    return true;
  }
  return false;
}

// Simple, given a string of words, return the length of the shortest word(s).

function findShort(s) {
  let newString = s.split(" ");
  let shortestLength = Infinity;

  for (const word of newString) {
    if (word.length < shortestLength) {
      shortestLength = word.length;
    }
  }
  return shortestLength;
}

// Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide.

function mouthSize(animal) {
  return animal.toLowerCase() == "alligator" ? "small" : "wide";
}

// Write a function to calculate factorial for a given input

function factorial(n) {
  if (n < 0 || n > 12) throw new RangeError();
  return n <= 1 ? 1 : n * factorial(n - 1);
}

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

function openOrSenior(data) {
  // ...
  let result = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] > 7) {
      result.push("Senior");
    } else {
      result.push("Open");
    }
  }
  return result;
}

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

function basicOp(operation, value1, value2) {
  // Code
  if (operation === "+") {
    return value1 + value2;
  } else if (operation === "-") {
    return value1 - value2;
  } else if (operation === "*") {
    return value1 * value2;
  } else {
    return value1 / value2;
  }
}

// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
// The returned value must be a string, and have "***" between each of its letters.

function toSort(s) {
  return s.sort()[0].split("").join("***");
}

// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

function replace(s) {
  return s.replace(/[aeoiu]/gi, "!");
}

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.

function arrayDiff(a, b) {
  return a.filter((e) => !b.includes(e));
}

// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p
// we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.

function digPow(n, p) {
  // ...
  var num1 = n.toString();
  var num2 = p.toString();
  var sum = 0;

  for (var i = 0; i < num1.length; i++) {
    sum = sum + Math.pow(parseInt(num1.charAt(i)), p);
    p++;
    if (sum % n == 0) {
      return sum / n;
    }
  }
  return -1;
}

// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

function sortOddNumbers(arr) {
  // Create an array containing only the odd numbers from the input array
  const oddNumbers = arr.filter((num) => num % 2 !== 0);

  // Sort the odd numbers in ascending order
  oddNumbers.sort((a, b) => a - b);

  // Replace the odd numbers in the original array with the sorted odd numbers
  let oddIndex = 0;
  const resultArray = arr.map((num) => {
    if (num % 2 !== 0) {
      const sortedOdd = oddNumbers[oddIndex];
      oddIndex++;
      return sortedOdd;
    }
    return num;
  });

  return resultArray;
}

// I have a cat and a dog.
// I got them at the same time as kitten/puppy. That was humanYears years ago.
// Return their respective ages now as [humanYears,catYears,dogYears]

var humanYearsCatYearsDogYears = function (humanYears) {
  // Your code here!
  let catYears = 0;
  let dogYears = 0;

  if (humanYears === 1) {
    catYears = 15;
    dogYears = 15;
  } else if (humanYears === 2) {
    catYears = 24;
    dogYears = 24;
  } else if (humanYears >= 3) {
    catYears = 24 + (humanYears - 2) * 4;
    dogYears = 24 + (humanYears - 2) * 5;
  }

  return [humanYears, catYears, dogYears];
};

// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

function countSheep(num) {
  let result = "";
  for (let i = 0; i <= num; i++) {
    result += i + " sheep...";
  }
  return result;
}

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

function likes(names) {
  names = names || [];
  switch (names.length) {
    case 0:
      return "no one likes this";
      break;
    case 1:
      return names[0] + " likes this";
      break;
    case 2:
      return names[0] + " and " + names[1] + " like this";
      break;
    case 3:
      return names[0] + ", " + names[1] + " and " + names[2] + " like this";
      break;
    default:
      return (
        names[0] +
        ", " +
        names[1] +
        " and " +
        (names.length - 2) +
        " others like this"
      );
  }
}

// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

function findEvenIndex(arr) {
  let left = 0;
  let right = arr.reduce((s, n) => s + n, 0);
  for (let i = 0; i < arr.length; i++) {
    right -= arr[i];
    if (left === right) return i;
    left += arr[i];
  }
  return -1;
}

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

function sumMix(x) {
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    sum += parseFloat(x[i]);
  }
  return sum;
}

// Given a list of integers, determine whether the sum of its elements is odd or even.

function oddOrEven(array) {
  //enter code here
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  if (sum % 2 === 0) {
    return "even";
  } else if (sum === [0]) {
    return "even";
  } else {
    return "odd";
  }
}

// We need a function that can transform a string into a number. What ways of achieving this do you know?

function stringToNumber(str) {
  return Number(str);
}

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

function alphabetPosition(text) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const normalizedText = text.toLowerCase();
  let result = "";

  for (let i = 0; i < normalizedText.length; i++) {
    const char = normalizedText[i];
    const charIndex = alphabet.indexOf(char);

    if (charIndex !== -1) {
      result += charIndex + 1 + " ";
    }
  }

  return result.trim();
}

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

function reverseWords(str) {
  // Go for it
  const words = str.split(" ");

  // Reverse each word in the array
  const reversedWords = words.map((word) => {
    return word.split("").reverse().join("");
  });

  // Join the reversed words array back into a string
  const reversedString = reversedWords.join(" ");

  return reversedString;
}

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
const duplicateCount = (string) => {
  // makes an array all lowercase and sorts the array in alpha order for easy comparrison
  let newString = string.toLowerCase().split("").sort();

  // this array will house the duplicated values so we can
  // get the length of it (or the number of duplicated characters).
  let newArray = [];

  // set a loop for the array
  for (i = 0; i < newString.length; i++) {
    // if the current element equals the following element the push it to the new array AND
    // ONLY if the new array doesn't already include the current element
    if (newString[i] === newString[i + 1] && !newArray.includes(newString[i])) {
      // push elements to new array
      newArray.push(newString[i]);
    }
  }
  // return the number of elements in the array to represent the number characters that were duplicated
  return newArray.length;
};

// Alternative solution

function duplicateCount(text) {
  return (
    text
      .toLowerCase()
      .split("")
      .sort()
      .join("")
      .match(/([^])\1+/g) || []
  ).length;
}

// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

function towerBuilder(nFloors) {
  // build here
  let space,
    star,
    tower = [];
  for (i = 1; i <= nFloors; i++) {
    space = " ".repeat(nFloors - i);
    star = "*".repeat(2 * i - 1);
    tower.push(`${space}${star}${space}`);
  }
  return tower;
}

// You will be given a number and you will need to return it as a string in Expanded Form

function expandedForm(num) {
  const numStr = num.toString(); // Convert the number to a string.
  let result = ""; // Initialize an empty string to store the expanded form.

  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] !== "0") {
      // Check if the current digit is not zero.
      if (result !== "") {
        result += " + "; // Add a "+" separator if there are already digits in the result.
      }
      result += numStr[i] + "0".repeat(numStr.length - i - 1); // Add the current digit followed by appropriate number of zeros.
    }
  }

  return result; // Return the expanded form as a string.
}

// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

function paperwork(n, m) {
  if (n < 0 || m < 0) {
    return 0;
  }
  return n * m;
}

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

function findUniq(arr) {
  // do magic
  let firstElement = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (firstElement !== arr[1] && firstElement !== arr[2]) {
      return firstElement;
    } else if (firstElement !== arr[i]) {
      return arr[i];
    }
  }
}

// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

function points(games) {
  // totalPoints will store the accumulated points
  let totalPoints = 0;

  // loop through the games array to get the scores
  for (i = 0; i < games.length; i++) {
    // assign the scores, since games is an array of strings, we must use Number() to turn the string scores into numbers
    let xScore = Number(games[i].charAt(0));
    let yScore = Number(games[i].charAt(2));

    // Add points depending on the values of xScore compared to yScore
    if (xScore > yScore) {
      totalPoints += 3;
    }
    if (xScore < yScore) {
      totalPoints += 0;
    }
    if (xScore === yScore) {
      totalPoints += 1;
    }
  }

  return totalPoints;
}

// Complete the solution so that it reverses the string passed into it.

function solution(str) {
  return str.split("").reverse().join("");
}

// Exercise from Codewars: 10 minute walk where you must come back to the origin

function returnToOrigin(walk) {
  let dx = 0;
  let dy = 0;
  let dt = walk.length;

  for (let i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case "n":
        dx--;
        break;
      case "s":
        dx++;
        break;
      case "e":
        dy--;
        break;
      case "w":
        dy++;
        break;
    }
  }

  return dt === 0 && dx === 0 && dy === 0;
}

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

function twoSmallestNumbers(numbers) {
  numbers = numbers.sort(function (a, b) {
    return a - b;
  });

  return numbers[0] + numbers[1];
}

// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

function queueTime(customers, n) {
  var w = new Array(n).fill(0);
  for (let t of customers) {
    let idx = w.indexOf(Math.min(...w));
    w[idx] += t;
  }
  return Math.max(...w);
}

// Complete the solution so that the function will break up camel casing, using a space between words.

function solution(string) {
  string = string.split("");
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      string[i] = " " + string[i];
    }
  }
  return string.join("");
}

// Solution to the bouncing ball with a window of 1.5 challenge from codewars

function bouncingBall(h, bounce, window) {
  var rebounds = -1;
  if (bounce > 0 && bounce < 1)
    while (h > window) (rebounds += 2), (h *= bounce);
  return rebounds;
}

// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

const areaOrPerimeter = function (l, w) {
  // Return your answer

  if (l === w) {
    return l ** 2;
  } else if (l !== w) {
    return l + l + (w + w);
  }
};

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

const quarterOf = (month) => {
  if (month <= 3) {
    return 1;
  } else if (month <= 6) {
    return 2;
  } else if (month <= 9) {
    return 3;
  } else if (month <= 12) {
    return 4;
  }
};

// Alternative solution to the previous challenge

const quarterOfYear = (month) => Math.ceil(month / 3);

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

function reverseNumber(n) {
  return Number(n.toString().split("").sort().reverse().join(""));
}

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

function summation(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
}

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers) {
  var arr = numbers.split(" ").sort(function (a, b) {
    return a - b;
  });
  return arr[arr.length - 1] + " " + arr[0];
}

// Alternative solution to the previous challenge

function highAndLow(numbers) {
  numbers = numbers.split(" ");
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

function order(words) {
  var array = words.split(" ");
  var sortedArray = [];
  for (i = 0; i <= array.length; i++) {
    for (j = 0; j < array.length; j++) {
      if (array[j].indexOf(i) >= 0) {
        sortedArray.push(array[j]);
      }
    }
  }
  return sortedArray.join(" ");
}

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function negativeNumber(num) {
  if (num < 0) {
    return num;
  } else {
    return -num;
  }
}

// I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number. Can you help me fix that?

function addFive(num) {
  var total = num + 5;
  return total;
}

// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

function strCount(str, letter) {
  //code here
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  return count;
}

// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
function deleteNth(arr, x) {
  var cache = {};
  return arr.filter(function (n) {
    cache[n] = (cache[n] || 0) + 1;
    return cache[n] <= x;
  });
}

// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

function longest(s1, s2) {
  // your code
  // Combine the two strings and remove duplicates
  const combined = Array.from(new Set(s1 + s2));

  // Sort the combined string
  const sorted = combined.sort().join("");

  return sorted;
}

// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

function removeUrlAnchor(url) {
  const parts = url.split("#");
  return parts[0];
}

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

function count(string) {
  var count = {};
  string.split("").forEach(function (s) {
    count[s] ? count[s]++ : (count[s] = 1);
  });
  return count;
}

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
  return "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .every((x) => string.toLowerCase().includes(x));
}

// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

function twoSum(numbers, target) {
  for (var i = 0; i < numbers.length - 1; i++) {
    for (var j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) return [i, j];
    }
  }
}

// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

function sumDigits(number) {
  return Math.abs(number)
    .toString()
    .split("")
    .reduce(function (a, b) {
      return +a + +b;
    }, 0);
}

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

var uniqueInOrder = function (iterable) {
  //your code here - remember iterable can be a string or an array
  let newArray = [];
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i + 1]) {
      newArray.push(iterable[i]);
    }
  }
  return newArray;
};

// Count the number of divisors of a positive integer n.

function getDivisorsCnt(n) {
  var num = 0;
  if (n == 1) return 1;
  if (n % Math.sqrt(n) == 0) num++;
  for (var i = 1; i < Math.sqrt(n); i++) {
    if (n % i == 0) {
      num += 2;
    }
  }
  return num;
}

// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

function problem(x) {
  //your code here
  if (typeof x === "string") {
    return "Error";
  }
  return x * 50 + 6;
}

// Create a function that produces this sequence: accum("abcd") -> "A-Bb-Ccc-Dddd"

function accum(s) {
  return s
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
}

// In this kata you will create a function that takes in a list and returns a list with the reverse order.

function reverseList(list) {
  return list.reverse();
}

// Write a function that returns true only if one of the two arguments are true.
function xor(a, b) {
  if ((a === true && b === false) || (a === false && b === true)) {
    return true;
  } else {
    return false;
  }
}

// Create a function that returns the name of the winner in a fight between two fighters.

function declareWinner(fighter1, fighter2, firstAttacker) {
  var fac1 = Math.ceil(fighter1.health / fighter2.damagePerAttack);
  var fac2 = Math.ceil(fighter2.health / fighter1.damagePerAttack);
  if (fac1 < fac2) {
    return fighter2.name;
  } else if (fac2 < fac1) {
    return fighter1.name;
  } else {
    return firstAttacker;
  }
}

// Given an array of integers your solution should find the smallest integer.
class SmallestIntegerFinder {
  findSmallestInt(args) {
    let smallestInt = args[0];
    for (let i = 0; i < args.length; i++) {
      if (args[i] < smallestInt) {
        smallestInt = args[i];
      }
    }
    return smallestInt;
  }
}

// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

function between(a, b) {
  // your code here
  let result = [];

  for (let i = a; i <= b; i++) {
    result.push(i);
  }

  return result;
}

// When provided with a letter, return its position in the alphabet.

function position(letter) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return "Position of alphabet: " + (alphabet.indexOf(letter) + 1);
}

// The number 89 = 8 + 9^2

function sumDigPow(a, b) {
  var arr = [];
  for (var i = a; i <= b; i++) {
    var sum = 0;
    for (var j = 0; j <= String(i).length; j++) {
      sum += Math.pow(parseInt(String(i)[j]), j + 1);
      if (sum == i) arr.push(i);
    }
  }
  return arr;
}

// Write my first function

function helloWorld() {
  let str = "Hello World!";
  console.log(str);
}

// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.

function saleHotdogs(n) {
  return n * (n < 5 ? 100 : n < 10 ? 95 : 90);
}

// Another challenge from codewars

function titleCase(title, minorWords) {
  var minorWords =
    typeof minorWords !== "undefined"
      ? minorWords.toLowerCase().split(" ")
      : [];
  return title
    .toLowerCase()
    .split(" ")
    .map(function (v, i) {
      if (v != "" && (minorWords.indexOf(v) === -1 || i == 0)) {
        v = v.split("");
        v[0] = v[0].toUpperCase();
        v = v.join("");
      }
      return v;
    })
    .join(" ");
}

// We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

function plural(n) {
  // ...
  if (n === 1) {
    return false;
  } else {
    return true;
  }
}

// Daily challenge from Codewars

function stockList(listOfArt, listOfCat) {
  if (!listOfArt.length || !listOfCat.length) return "";
  return listOfCat
    .map((w) => {
      const s = listOfArt.reduce(
        (a, b) => a + (b.charAt(0) === w ? +b.split(" ")[1] : 0),
        0
      );
      return `(${w} : ${s})`;
    })
    .join(" - ");
}

// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of

function findNb(m) {
  let n = 1;
  let sum = 0;

  while (sum < m) {
    sum += Math.pow(n, 3);
    n++;
  }

  return sum === m ? n - 1 : -1;
}

// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

function take(arr, n) {
  // Your code here

  return arr.slice(0, n);
}

// Write a function that returns a string in which firstname is swapped with last name.

function nameShuffler(str) {
  //Shuffle It
  return str.split(" ").reverse().join(" ");
}

// Code challenge from Codewars

function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) return -1;
  let l1 = a1.map((str) => str.length);
  let l2 = a2.map((str) => str.length);
  return Math.max(
    Math.max(...l1) - Math.min(...l2),
    Math.max(...l2) - Math.min(...l1)
  );
}

// Your task, is to create N×N multiplication table, of size provided in parameter.

multiplicationTable = function (size) {
  var result = [];

  for (var i = 0; i < size; i++) {
    result[i] = [];
    for (var j = 0; j < size; j++) {
      result[i][j] = (i + 1) * (j + 1);
    }
  }

  return result;
};

// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  return (
    enteredCode === correctCode &&
    Date.parse(expirationDate) >= Date.parse(currentDate)
  );
}

// Complete daily code challenge from Codewars

let v1 = 50,
  v2 = 100,
  v3 = 150,
  v4 = 200,
  v5 = 2,
  v6 = 250;

function equal1() {
  let a = v1,
    b = v1;
  return a + b;
}

//Please refer to the example above to complete the following functions
function equal2() {
  let a = v3, //set number value to a
    b = v1; //set number value to b
  return a - b;
}

function equal3() {
  let a = v1, //set number value to a
    b = v5; //set number value to b
  return a * b;
}

function equal4() {
  let a = v4, //set number value to a
    b = v5; //set number value to b
  return a / b;
}

function equal5() {
  let a = v6, //set number value to a
    b = v3; //set number value to b
  return a % b;
}

// Code challenge of the day

function diamond(n) {
  if (n <= 0 || n % 2 === 0) return null;
  str = "";
  for (let i = 0; i < n; i++) {
    let len = Math.abs((n - 2 * i - 1) / 2);
    str += " ".repeat(len);
    str += "*".repeat(n - 2 * len);
    str += "\n";
  }
  return str;
}

// Write a function which takes a number and returns the corresponding ASCII char for that value.

function getChar(c) {
  // ...
  return String.fromCharCode(c);
}

// Code challenge from Codewars

function revrot(str, sz) {
  if (sz <= 0 || !str || sz > str.length) return "";

  const sumCubes = (chunk) =>
    chunk.split("").reduce((sum, digit) => (sum += digit ** 3), 0);
  const reverse = (chunk) => chunk.split("").reverse().join("");
  const rotate = (chunk) => chunk.slice(1) + chunk.slice(0, 1);

  const chunks = [];

  for (let i = 0; i < str.length; i += sz) {
    let chunk = str.slice(i, i + sz);

    if (chunk.length < sz) continue;

    chunk = sumCubes(chunk) % 2 ? rotate(chunk) : reverse(chunk);

    chunks.push(chunk);
  }

  return chunks.join("");
}

// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

function comp(array1, array2) {
  if (array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);
  return array1.map((v) => v * v).every((v, i) => v == array2[i]);
}

// Daily code challenge

function tribonacci(signature, n) {
  for (var i = 0; i < n - 3; i++) {
    // iterate n times
    signature.push(signature[i] + signature[i + 1] + signature[i + 2]); // add last 3 array items and push to trib
  }
  return signature.slice(0, n); //return trib - length of n
}

// Daily code challenge convert minutes into seconds function

function convert(minutes) {
  return minutes * 60;
}

// Daily code challenge create a function that returns true if the string is empty and false if not

function isEmpty(s) {
  if (s === "" || s === "") {
    return true;
  }
  return false;
}

// Daily code from edabit

function comp(str1, str2) {
  if (str1.length === str2.length) {
    return true;
  }
  return false;
}

// Daily code challenge from edabit

function concatName(firstName, lastName) {
  return lastName + ", " + firstName;
}


// Working on designing a Twitter button with CSS

button {

  color: #0f1419;
  border: 1px solid #cfd9de;
  border-radius: 20px;
  background: white;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  font-weight: bold;
}