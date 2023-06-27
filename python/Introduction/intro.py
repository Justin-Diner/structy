from math import sqrt, floor
# Write a function, max_value, that takes in list of numbers as an argument. The function should return the largest number in the list.
# Solve this without using any built-in list methods.

# My solve:
def max_value(nums):
  max = nums[0]
  
  for value in nums:
    if value > max:
      max = value
      
  return max

# Structy Solve
def max_value(nums):
  maximum = float('-inf')
  
  for num in nums:
    if num > maximum:
      maximum = num
      
  return maximum

# You can use -infinity with float('-inf')

"""
is Prime

Write a function, is_prime, that takes in a number as an argument. The function should return a boolean indicating whether or not the given number is prime.

A prime number is a number that is only divisible by two distinct numbers: 1 and itself.

For example, 7 is a prime because it is only divisible by 1 and 7. For example, 6 is not a prime because it is divisible by 1, 2, 3, and 6.

You can assume that the input number is a positive integer.
"""
def is_prime(n):
  if n < 2:
    return False
  
  for i in range(2, floor(sqrt(n)) + 1):
    if n % i == 0:
      return False
  
  return True

# Things to note, this uses O(sqrt(n)) time complexity, Space is O(1)
# You may not get a perfect number here. So you need to Math.floor. You could have gotten 4.721
## O(sqrt(n)) run time. O(1) constant space.  