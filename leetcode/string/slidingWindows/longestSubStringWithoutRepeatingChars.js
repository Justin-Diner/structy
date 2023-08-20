function lengthOfLongestSubstring(s) {
  if (s === "") return 0; 
  let longest = 0; 
  let i = 0; 
  const stringSet = new Set()

  for (let j = 0; j < s.length; j++) {
      const sChar = s[j];  // w
      if (!stringSet.has(sChar)) {
          stringSet.add(sChar);
      } else {
          while (s[i] !== sChar) {
              stringSet.delete(s[i])
              i +=1
          }
          i +=1
      }
      longest = Math.max(j - i + 1, longest);
  }
  return longest;
};