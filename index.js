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
