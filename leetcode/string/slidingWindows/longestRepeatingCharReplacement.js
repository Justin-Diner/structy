function characterReplacement(s, k) {
  let max = 0; 
  let i = 0; 
  let free = k; 

  for (let j = k; j < s.length; j++) {
      const currentChar = s[j];
      if (currentChar != s[i]) {
          if (free != 0) {
              free -= 1;
          } else {
              while (currentChar != s[i]) {
                  i++;
                  if (free != k) {
                      free += 1;
                  }
                  if (s[i - 1] != s[i]) {
                      free -= 1
                  }
              }
          }
      }
      max = Math.max(j - i + 1, max)
  }
  return max
};