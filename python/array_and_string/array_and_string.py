# uncompress 
# Python strings are immutable. You must create new copies. Python string concatonation is linear. 
# Lists (Arrays) in python are mutable. 
# Pushing into lists is constant time. Then ''.join(result) will concatonate together. This is outside of the loop which is linear. Simplifies to still linear time. 

def uncompress(s):
  i = 0
  j = 0 
  nums = '1234567890'
  uncompressed = []
  
  while j < len(s):
    if s[j] in nums: 
      j += 1
    else: 
      num = int(s[i:j])
      uncompressed.append(s[j] * num)
      j += 1 
      i = j
      
  return ''.join(uncompressed)

# O(n * m) time complexity, O(n * m) space complexity
# n is the number of groups in our string. 
# m is the max number associated with any particular group. 

# Compress
def compress(s):
  s += '!'
  i = 0 
  j = 0 
  result = []
  
  while j < len(s):
    if s[i] == s[j]:
      j += 1
    else: 
      num = j - i
      if num == 1:
        result.append(s[i])
      else:
        result.append(str(num))
        result.append(s[i])
      i = j 
  
  return "".join(result)
    
  
# input: uncompressed string
# output: compressed string 

# "ppopppp!" = '2po5p' 8
#j   2
#i 0
# O(n) space complexity, O(n) time complexity. 

# Anagrams 
# Use the Python Dictionary

def anagrams(s1, s2):
  s1Table = {}
  
  for char in s1: 
    if char not in s1Table:
      s1Table[char] = 1
    else: 
      s1Table[char] += 1
  
  for char in s2:
    if char not in s1Table:
      return False
    else: 
      s1Table[char] -= 1
    
  for key in s1Table: 
    if s1Table[key] != 0: 
      return False
  
  return True

def anagrams(s1, s2):
  return char_count(s1) == char_count(s2)
  
def char_count(s):
  count = {}
  
  for char in s:
    if char not in count:
      count[char] = 0
    count[char] += 1
  return count

# Dictionaries in Python compare whether the dictionary has the same keys. 
# O(n + m) and same space complexity. 
"""
from collections import Counter

def anagrams(s1, s2):
    return Counter(s1) == Counter(s2)
This also works. Just need to import counter. 
"""

# Most Frequent Char
def most_frequent_char(s):
  count = {}
  
  for char in s:
    if char not in count:
      count[char] = 0
    count[char] += 1
  
  best = None
  
  for char in s: 
    if best == None or count[char] > count[best]:
      best = char
  
  return best

# Pair Sum 
def pair_sum(numbers, target_sum):
  complements = {}
  
  for index, num in enumerate(numbers):
    complement = target_sum - num
    
    if complement in complements:
      return (complements[complement], index)
    
    complements[num] = index
    
    
# Pair Product
def pair_product(numbers, target_product):
  complements = {}
  
  for i, num in enumerate(numbers):
    complement = target_product / num
    
    if complement in complements:
      return (complements[complement], i)
    
    complements[num] = i
  
# Intersection
def intersection(a, b):
  items = set(a)
  
  return [ele for ele in b if ele in items]

# Five Sort
def five_sort(nums):
  i = 0 
  j = len(nums) - 1 
  
  while i <= j:
    if nums[j] == 5:
      j -= 1
    elif nums[i] == 5:
      nums[i], nums[j] = nums[j], nums[i]
      i += 1
    else:
      i += 1
  
  return nums

