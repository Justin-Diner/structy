export{}
// Two Pointer
  // Two variables that track some indices
  // Use i and j as the pointers. 

// Uncompress
// Remember that strings are immutable. Use an array then join together at the end. 
function uncompress(s: string): string {
  let i: number = 0; 
  let j: number = 0; 
  const numbers: string = "0123456789";

  const answer: string[] = []; 

  while (j < s.length) {
    if (numbers.includes(s[j])) {
      j += 1;
    } else {
      const num: number = Number(s.slice(i, j));
      for (let count = 0; count < num; count++) {
        answer.push(s[j]);
      }
      j += 1;
      i = j;
    }
  }
  return answer.join('')
}

console.log(uncompress("2c3a1t"))

const compress = (s: string): string => {
  let i = 0; 
  let j = 0; 
  let answer: any[] = [];

  while (j <= s.length) {
    if (s[i] === s[j]) {
      j += 1;
    } else {
      const num: number = s.slice(i, j).length;
      if (num === 1) {
        answer.push(s[i]);
      } else {
        answer.push(num);
        answer.push(s[i]);
      }
      i = j;
    }
  }
  return answer.join("");
}

console.log(compress('ccaaatsss'))

const anagrams = (s1: string, s2: string): boolean => {
  let count = {};

  for (let letter of s1) {
    if (!count[letter]) {
      count[letter] = 0; 
    }
    count[letter] += 1;
  }

  for (let letter of s2) {
    if (!(letter in count)) {
      return false; 
    } else {
      count[letter] -= 1
    }
  }

  for (let letter in count) {
    if (count[letter] != 0) {
      return false;
    }
  }
  return true; 
}

const mostFrequenctChar = (s: string): string | null => {
  let count: { [char: string]: number} = {};

  for (let char of s) {
    if (!(char in count)) {
      count[char] = 0;
    }
    count[char] += 1;
  }

  let best: string | null = null 
  for (let char of s) {
    if (best === null || count[char] > count[best]) {
      best = char; 
    }
  }
  return best; 
}

const pairSum = (numbers: number[], targetSum: number) => {
  const previousNums = {};

  for (let i = 0; i < numbers.length; i ++) {
    const num = numbers[i];
    const complement = targetSum - num; 
    if (complement in previousNums) return [i, previousNums[complement]];
    previousNums[num] = i; 
  }
}


const fiveSort = (nums: number[]) => {
  let i = 0; 
  let j = nums.length - 1; 

  while (i < j) {
    if (nums[j] === 5) {
      j -= 1
    } else if (nums[i] === 5) {
      [ nums[i], nums[j] ] = [ nums[j], nums[i] ];
      i += 1;
    } else {
      i += 1;
    }
  }
  return nums; 
}