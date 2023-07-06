# Number of Good Pairs 
def numIdenticalPairs(self, nums: List[int]) -> int:
    checked = {}
    pairs = 0

    for num in nums: 
        if num in checked:
            pairs += checked[num]
            checked[num] += 1
        else: 
            checked[num] = 1

    return pairs

# Why this was cool? I originally got this wrong because my condition in the hash map was off. Here, understanding how a pair works is critical. The amount of pairs is correlated to the amount of elements in the list. 
# [1, 1, 1]
# {1: 3}
# p: 3

class Solution:
    def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:
        temp = sorted(nums)
        mapping = {}
        result = []

        for i in range(len(temp)):
            if temp[i] not in mapping:
                mapping[temp[i]] = i

        for i in range(len(nums)):
            result.append(mapping[nums[i]])
        return result

# Why is this solve cool?  This solve is cool because it first sorts the array. This would take O(nlogn) time. This is slower than O(n). Then we iterate over the temp and store each item according to its index (because its minus 1 (showing the amount of elements smaller than it). 
# Then we iterate over the original array O(n) and create the result.    

# Design an ordered stream
