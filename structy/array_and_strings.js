// Two Pointer
	// Two variables that track some indices. 
	// Use i and j to be the pointers. 
	
	// Uncompress
	// Need to remember that strings are immutable. 
	const uncompress = (s) => {
		let i = 0; 
		let j = 0; 
		const numbers = "0123456789";
		let answer = [];
		
		while (j < s.length) {
			if (numbers.includes(s[j])) {
				j += 1;
			} else {
				const num = Number(s.slice(i, j));
				for (let count = 0; count < num; count++) {
					answer.push(s[j]);
				}
				j += 1; 
				i = j;
			}
		}
		return answer.join(''); 
	};
	// Worst case is n * m. When you do a string concatenation that is O(n) runtime. Strings are immutable. You are actually creating a new string and so you run in a linear run time based on size of string. So instead you need to use an array. Pushing an element to the end of an array runs in constant time. 
	// The above answer has n * m run time. 

	// Compress
	const compress = (s) => {
		let i = 0;
		let j = 0; 
		let compressed = [];
		
		while (j <= s.length) {
			if (s[j] === s[i]) {
				j += 1;
			} else {
				const num = j - i; 
				if (num === 1) {
					compressed.push(s[i])
				} else {
				compressed.push(num);
				compressed.push(s[i]);
				}
				i = j; 
			}
		}
		return compressed.join("");
	};

// concatonation is linear. 
// This is a linear O(n) time complexity solution. 
// Things to remember:
// 1. If statement needs to be if (s[i] === s[j]) You got this wrong on the second run through. 


// Hash Map
	// Anagrams

	const anagrams = (s1, s2) => {
		let count = {};
		
		for (let letter of s1) {
			if (!count[letter]) {
				count[letter] = 0
			}
			count[letter] += 1;
		}
		
		// O(n)
		
		for (let letter of s2) {
			if (!(letter in count)) {
				return false; 
			} else {
				count[letter] -= 1; 
			}
		}
		
		// O(m)
		
		for (let letter in count) {
			if (count[letter] != 0) {
				return false; 
			} 
		}
		  // O(n)
			return true; 
};

// Linear or Multilinear. O(n+m). Create HashMaps of each;
// Cannot use equality because you are checking if they are the same reference in memory. Not whether they contain the same values. 
// O (n + m + n) / O(n + m) - multilinear. 
// Space: O(n) - we are only creating a single object. 
// I got this correct on the second review. However, I did not anticipate the early return in the second loop. Make sure you understand what happens if there is an edge case. In that case, it would be what to do when 

	// Most Frequent Char

	//const mostFrequentChar = (s) => {
	//	let count = {};
	//	let largest = 0;
	//	let leader;
		
	//	for (let letter of s) {
	//		if (!(count[letter])) {
	//			count[letter] = 0
	//		}
	//		count[letter] += 1;
	//	}
		
	//	// O(n);
		
	//	for (let letter in count) {
	//		if (count[letter] > largest ) {
	//			largest = count[letter];
	//			leader = letter; 
	//		}
	//	}
	//	return leader; 
	//};

	// Strucy Solution
	const mostFrequentChar = (s) => {
		const count = {};
		
		for (let char of s) {
			if (!(char in count)) {
				count[char] = 0;
			}
			count[char] += 1
		}
		
		let best = null;
		for (let char of s) {
			if (best === null || count[char] > count[best]) {
				best = char;
			}
		}
		return best;
	};

	// 2nd Attempt: Something to remember. In yours you did not set best to anything. Here you set it to null. It did not matter in the end but you may want to intentionally set it to null. 

	// Pair Sum

	const pairSum = (numbers, targetSum) => {
		const previousNums = {};
		for (let i = 0; i < numbers.length; i++) {
			const num = numbers[i];
			const complement = targetSum - num; 
			if (complement in previousNums) return [i, previousNums[complement]];
			previousNums[num] = i; 
		}
	 
	};

	// Second attempt: My logic was correct here. I messed up populating the hashmap. Make sure that your key is what it is. In my version, I did not create a variable for num. Instead, I just put in numbers[i]. This was a mistake and resulted in an error. 
	
	// Hashmaps give O(1) lookup. 
	// When you are searching for a pair, look for a complement. 
	// Using a hashmap gives you a better time complexity. But a larger Space complexity than the brute force nsquared solution. This is normally accepted. 
	// Checking for existence is constant. 

	// Paid Product
	const pairProduct = (numbers, targetProduct) => {
		// Create a 'searched' hashmap. 
		
		// loop through numbers, keeping track of element and index within searched. 
		// declare a complement variable of the current element. 
		// If searched contains the complement, return an array of i and the complement index. 
		const searched = {};
		
		for (let i = 0; i < numbers.length; i++) {
			const current = numbers[i]
			const complement = targetProduct / current; 
			if (complement in searched) return [searched[complement], i]
			searched[current] = i;
		}
	};
	
	// Complexity is O(n) run time. All other operations are constant time. Inserting into a hashmap is constant. And the lookup into the hashmap is constant. 
	// Space Complexity - linear because we have to store that hashmap. 

		// fiveSort

	const fiveSort = (nums) => {
		let i = 0; 
		let j = nums.length - 1;
		
		while (i < j) {
			if (nums[j] === 5) {
				j-= 1;
			} else if (nums[i] != 5) {
				i += 1;
			} else {
				[nums[i], nums[j]] = [nums[j], nums[i]]
				i += 1;
			}
		}
		
		return nums; 
	};
		
		// swapping elements in an array is constant O(1);
		// Time complexity is O(n);
		// Space complexity is O(1)
// Make sure you are keeping track of nums[i] or just i. You messed that up on the second time around. Take your time and know what element you are evaluating. 