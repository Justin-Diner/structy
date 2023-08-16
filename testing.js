// Reversing a string with Two Pointers

const reverseString = (str) => {
  let strArr = str.split("");
  let i = 0; 
  let j = str.length - 1; 

  while (i < j) {
    [strArr[i], strArr[j]] = [strArr[j], strArr[i]];
    i += 1; 
    j -= 1; 
  } 
  return strArr.join("")
}

// Console.log(reverseString(Cesar Salad));

// Anagrams 

const anagrams = (str1, str2) => {
  const map1 = {};

  for (let letter of str1) {
    if (!(map1[letter])) {
      map1[letter] = 0
    }
    map1[letter] += 1
  }

  for (let letter of str2) {
    if (!(map1[letter])) {
      return false; 
    }
    map1[letter] -= 1;
  }

  for (letter in map1) {
    if (map1[letter] != 0) {
      return false; 
    }
  }
  return true; 
}
// console.log(anagrams("hello", "lllhe")) // false 
// console.log(anagrams("hello", "lllhe")) // false 

// Most Frequent Char 

const mostFrequentChar = (str) => {
  const letterCount = {};

  for (let letter of str) {
    if (!(letterCount[letter])) {
      letterCount[letter] = 0; 
    }
    letterCount[letter] += 1;
  }
  return Math.max(...Object.values(letterCount));
}

// console.log(mostFrequentChar("hhhhhhello")) // 6

const pairSum = (arr, target) => {
  const complements = {};

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i]; 
    if (complement in complements) {
     return [complements[complement], i]
    }
    complements[arr[i]] = i;
  }
  return false; 
}

// console.log(pairSum([4, 6, 8, 10], 18)) // [2, 3]

const fiveSort = (nums) => {
  i = 0; 
  j = nums.length - 1;
  
  while (i < j) {
    if (nums[j] === 5) {
      j -= 1; 
    }
    if (nums[i] != 5) {
      i += 1; 
    }
    if (nums[i] === 5 && nums[j] != 5) {
      [nums[i], nums[j]] = [nums[j], nums[i]]
      i += 1; 
      j -= 1;
    } 
  } 
  return nums;
}

// console.log(fiveSort([5, 3, 2, 5, 6, 7, 5])) // [7, 3, 2, 6, 5, 5, 5]

// Constructing a Binary Tree;

class Node {
  constructor(val) {
    this.val = val; 
    this.left = null; 
    this.right = null; 
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b; 
a.right = c; 
b.left = d; 
b.right = e; 
c.left = f; 

const dfs = (node) => {
  const stack = [ node ];

  while (stack.length > 0) {
    const current = stack.pop(); 
    console.log(current.val);
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
}

// console.log(dfs(a))

const bfs = (node) => {
  const queue = [ node ];

  while (queue.length > 0) {
    const current = queue.shift(); 
    console.log(current.val);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
}

// console.log(bfs(a));

const dfsValuesRec = (node) => {
  const values = [];
  fillValues(values, node);
  return values; 
}

const fillValues = (values, node) => {
  if (node.val) values.push(node.val);
  if (node.left) fillValues(values, node.left);
  if (node.right) fillValues(values, node.right);
}

// console.log(dfsValuesRec(a))
// Easy BFSValuesRec on Binary Tree
const easyBfsValuesRec = (node) => {
  if (node === null) return [];
  const leftValues = easyBfsValuesRec(node.left);
  const rightValues = easyBfsValuesRec(node.right);
  return [node.val, ...leftValues, ...rightValues];
}

// console.log(easyBfsValuesRec(a))

const bfsValues = (node) => {
  const values = [];
  const queue = [node]

  while (queue.length > 0) {
    const current = queue.shift(); 
    values.push(current.val);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return values; 
}

console.log(bfsValues(a))

console.log([1, 2, 4, 3].sort());