to_sort = [3, 2, 1, 4, 5, 7, 6]

# Quick Sort   
# Invented by C.A.R. Hoare - The quick sort algorithm attempts to separate the list of elements into two parts and then sort each part recursively. It uses a divide and conquer strategy. In quick sort, the partition of the list is performed based on the pivot element. Here, the pivot is the first element in the list. 
# Best O(n log(n)) - Average O(n log(n)) - Worst - O(n^2)

def quick_sort(list):
    if len(list) <= 1: return list
    pivot = list.pop(0)
    left = quick_sort([item for item in list if item <= pivot])
    right = quick_sort([item for item in list if item > pivot])
    return left + [pivot] + right
    
    
#       [2, 1, 4, 5, 7, 6]
#p      3
#left [2, 1]
#right [4, 5, 7, 6]
# return [1, 2] + [3] + [4, 5 ,6, 7]

#left
#       [1]
# p 2
# left 1
#right []
# return [1, 2]

# left 
#   [1]
# return [1]

# right
#       [5, 7, 6]
# p 4
# left []
# right [5, 7, 6]
# return [] + [4] + [5, 6, 7]

# right [7, 6]
#pivot 5
# left []
#right [7, 6]
# return [] + [5] + [6, 7]

# right 
# pivot: 7
# left : [6]
# right: []
# return [6] + [7] + []

# left 
#return []6

# Bubble Sort
# Bubble Sort is a simple sorting algorithm that compares adjacent elements and swaps them if they are in the wrong order. This process continues until the list is sorted. Worst: O(n^2)
def bubble_sort(list):
    sorted = False
    while not sorted:
        sorted = True
        for i in range(0, len(list) - 1):
            if list[i] > list[i+1]:
                list[i], list[i+1] = list[i+1], list[i]
                sorted = False
    return list

#    [3, 2, 1, 4, 5, 7, 6]
# i   0
# i+1    1
#    [2, 3, 1, 4, 5, 7, 6]
# i      1
# i+1       2
#    [2, 1, 3, 4, 5, 7, 6]
# i         2
# i+1          3
#    [2, 1, 3, 4, 5, 7, 6]
# i            3
# i+1             4
#    [2, 1, 3, 4, 5, 7, 6]
# i               4
# i+1                5
#    [2, 1, 3, 4, 5, 6, 7]
# i                  5
# i+1                   6
#    [2, 1, 3, 4, 5, 6, 7]
# i   0               
# i+1   1
#    [1, 2, 3, 4, 5, 6, 7]
# i      1               
# i+1       2
#    [1, 2, 3, 4, 5, 6, 7]
# i         3               
# i+1          4
#    [1, 2, 3, 4, 5, 6, 7]
# i            4               
# i+1             5
#    [1, 2, 3, 4, 5, 6, 7]
# i               5               
# i+1                6
#    [1, 2, 3, 4, 5, 6, 7]
# i                  6               
# i+1                   7
#    [1, 2, 3, 4, 5, 6, 7]
# i   0                              
# i+1   1

# Merge Sort
# Merge Sort is a divide-and-conquer algorithm that recursively splits an unsorted list into smaller sublists, sorts them individually, and merges them back together. It achieves a time complexity of O(n log n) due to its ability to divide the problem in half at each recursion level. 
def merge_sort(list):
    if len(list) <= 1: return list
    
    mid = len(list) // 2
    left = merge_sort(list[0: mid])
    right = merge_sort(list[mid:])

    return merge(left, right)

def merge(left, right):
    merged = []
    
    while left and right: 
        if left[0] < right[0]: 
            merged.append(left.pop(0))
        else: 
            merged.append(right.pop(0))
    
    return merged + left + right



# Insertion Sort
# Insertion Sort is a simple sorting algorithm that iteratively builds a sorted portion of the list by repeatedly inserting the next element in its proper place. It has a time complexity of O(n^2). 
def insertion_sort(list):
    for i in range(1, len(list)):
        key = list[i]
        j = i-1
        while j >= 0 and key < list[j]:
            list[j+1] = list[j]
            j-=1
        list[j+1] = key
    
    return list

#    [3, 2, 1, 4, 5, 7, 6]
#key     2(1)
#i       1
#j    0

#    [2, 3, 1, 4, 5, 7, 6]
#key     2(1)
#i       i
#j  j

#    [2, 3, 1, 4, 5, 7, 6]
#key        1(2)
#i          2
#j       1

#    [2, 1, 3, 4, 5, 7, 6]
#key        1(2)
#i          2
#j    1

#    [1, 2, 3, 4, 5, 7, 6]
#key        1(2)
#i          2
#j  0

#    [1, 2, 3, 4, 5, 7, 6]
#key           4(3)
#i             3
#j         2

#    [1, 2, 3, 4, 5, 7, 6]
#key              5(4)
#i                4
#j             3

#    [1, 2, 3, 4, 5, 7, 6]
#key                 7(5)
#i                   5
#j                4

#    [1, 2, 3, 4, 5, 7, 6]
#key                    6(6)
#i                      6
#j                   5

#    [1, 2, 3, 4, 5, 6, 7]
#key                    6(6)
#i                      6
#j                5


# Selection Sort
# Selection sort divides the list into sorted and unsorted portions, repeatedly finding the smallest element in the unsorted portion and swapping it with the first unsorted element. It has a time complexity of O(n^2), making it inefficient for large lists, as it performs the same number of comparisons regardless of initial order. 
def selection_sort(list):
    for i in range(0, len(list) - 1):
        min_index_value = i
        
        for j in range(i + 1, len(list)):
            if list[j] < list[min_index_value]:
                min_index_value = j
        
        if min_index_value is not i:
            list[i], list[min_index_value] = list[min_index_value], list[i]
    
    return list

print(selection_sort(to_sort))

#     [1, 2, 3, 4, 5, 6, 7]
#i                          
#miv                                      
#j                                                                 

print(dir([1, 2, 3]))