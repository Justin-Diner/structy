import math
arr = [0, 1, 3, 6, 10, 12, 20, 22, 28, 29]

def binary_search(arr, target):
  if len(arr) == 0:
    return None
  
  mid = math.floor(len(arr) / 2)

  if arr[mid] == target:
    return mid
  elif target > arr[mid]:
    greater_arr = arr[mid+1:]
    result = binary_search(greater_arr, target)
    if result is not None: 
      return result + mid + 1
  else:
    less_arr = arr[0:mid]
    other_result = binary_search(less_arr, target)
    if other_result is not None: 
      return result
  
  return None

print(binary_search(arr, 13))

unsorted_arr = [4,6, 1, 2, 7, 9, 12]

def quick_sort(arr):
  if len(arr) <= 1:
    return arr
  pivot = arr.pop(0)
  left = [ele for ele in arr if ele <= pivot]
  right = [ele for ele in arr if ele > pivot]
  return quick_sort(left) + [pivot] + quick_sort(right)

print(quick_sort(unsorted_arr))
    
