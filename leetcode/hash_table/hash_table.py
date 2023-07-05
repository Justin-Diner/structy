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