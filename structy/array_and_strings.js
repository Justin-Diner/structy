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

// Hash Map

// Hash Set