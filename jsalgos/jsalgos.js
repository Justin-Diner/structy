// Binary Search
const binarySearch = (arr, target) => {
  if (arr.length < 1) return null;
  const mid = Math.floor(arr.length / 2); 
  
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    const result = binarySearch(arr.slice(mid + 1), target) + mid + 1;
    if (result != null) {
      return result; 
    }
  } else {
    const result = binarySearch(arr.slice(0, mid), target);
    if (result != null) {
      return result; 
    }
  } 
  return -1
}
console.log(binarySearch([1, 3, 5, 6, 8, 10], 14)) // 5