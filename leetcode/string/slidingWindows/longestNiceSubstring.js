function longestNiceSubString(s) {
  if (s.length < 2) return ""; 

  const set = new Set(s);

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!set.has(char.toLowerCase()) || !set.has(char.toUpperCase())) {
      const left = longestNiceSubString(s.slice(0, i));
      const right = longestNiceSubString(s.slice(i+1));
      return left.length > right.length ? left : right
    }
  }
  return s; 
}

console.log(longestNiceSubString("YazaAay")) // aAa
console.log(longestNiceSubString("Bb")) //Bb
console.log("c") // ""