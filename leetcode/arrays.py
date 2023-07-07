# Max Conseecutive Ones 
class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        if not nums: return 0
        
        maxCount = 0
        count = 0
        
        for i in nums:
            if i == 1:
                count += 1
            else: 
                count = 0

            if count > maxCount:
                maxCount = count

        return maxCount
    
# Find Numbers with Even Number of Digits
    def findNumbers(self, nums: List[int]) -> int:
        even_nums = 0
        
        for num in nums: 
            if len(str(num)) % 2 == 0:
                even_nums += 1 
        
        return even_nums

# Squares of a Sorted Array 

    def sortedSquares(self, nums: List[int]) -> List[int]:
        for i in range(len(nums)):
            nums[i] = nums[i] * nums[i]
            
        return sorted(nums)

# Next I'm going to look at several other operations: 
#   1. Insert
#   2. Delete
#   3. Search 

# Insert - Duplicate Zeroes 
    for i in range(len(arr) -2, -1, -1):
        if arr[i] == 0:
            arr.pop()
            arr.insert(i+1, 0)