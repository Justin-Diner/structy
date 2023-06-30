# linked_list_values
#iterative
def linked_list_values(head):  
  values = []
  current = head
  while current is not None:
    values.append(current.val)
    current = current.next
  return values
  
# recursive 
def linked_list_values(head):  
  values = []
  fill_values(head, values)
  return values

def fill_values(head, values):
  if head is None:
    return
  values.append(head.val)
  fill_values(head.next, values)
  
# sum_list iterative
def sum_list(head):
  total_sum = 0
  current = head
  while current is not None:
    total_sum += current.val
    current = current.next
  return total_sum
  

# sum_list recursive
def sum_list(head):
  if head is None: 
    return 0
  return head.val + sum_list(head.next)
  
# linked list find (iterative)
def linked_list_find(head, target):
  current = head
  
  while current is not None:
    if current.val == target:
      return True 
    current = current.next
  
  return False

# linked list find (recursive)
def linked_list_find(head, target):
  if head is None:
    return False
  if head.val == target:
    return True
  return linked_list_find(head.next, target)

# get node value (iterative)
def get_node_value(head, index):
  count = 0
  current = head
  while current is not None:
    if count == index:
      return current.val
    
    current = current.next
    count += 1
    
  return None

# get node value(recursive)
def get_node_value(head, index):
  if head is None:
    return None
  if index == 0:
    return head.val
  return get_node_value(head.next, index - 1)

# reverse linked list (iterative)
def reverse_list(head):
  prev = None
  current = head
  
  while current is not None:
    next = current.next
    current.next = prev
    prev = current
    current = next
  
  return prev 

# reverse linked list (recursive)
def reverse_list(head, prev = None):
  if head is None:
    return prev
  next = head.next
  head.next = prev
  return reverse_list(next, head)

# zipper lists (iteratively)
def zipper_lists(head_1, head_2):
  tail = head_1
  current_1 = head_1.next
  current_2 = head_2
  count = 0 
  
  while current_1 is not None and current_2 is not None:
    if count % 2 == 0: 
      tail.next = current_2
      current_2 = current_2.next
    else:
      tail.next = current_1
      current_1 = current_1.next
    count += 1
    tail = tail.next
  
  if current_1 is not None:
    tail.next = current_1
  if current_2 is not None:
    tail.next = current_2
  
  return head_1

# zipper lists (recursively)
def zipper_lists(head_1, head_2):
  if head_1 is None and head_2 is None:
    return None
  if head_1 is None:
    return head_2
  if head_2 is None:
    return head_1
  
  next_1 = head_1.next
  head_1.next = zipper_lists(head_2, next_1)
  return head_1

# merge lists 
# My solve:
def merge_lists(head_1, head_2):
  tail = None 
  current_1 = None
  current_2 = None
  head = None

  if head_1.val < head_2.val:
    head = head_1
    tail = head_1
    current_1 = head_1.next
    current_2 = head_2
  else:
    head = head_2
    tail = head_2
    current_2 = head_2.next
    current_1 = head_1
    
  while current_1 is not None and current_2 is not None:
    if current_1.val >= current_2.val:
      tail.next = current_2
      current_2 = current_2.next
    else: 
      tail.next = current_1
      current_1 = current_1.next
    tail = tail.next
    
  if current_1 is not None:
    tail.next = current_1
  if current_2 is not None:
    tail.next = current_2
    
  return head

# merge lists - Recursion 
def merge_lists(head_1, head_2):
  if head_1 is None and head_2 is None:
    return None
  if head_1 is None: 
    return head_2
  if head_2 is None:
    return head_1
  if head_1.val < head_2.val:
    head_1.next = merge_lists(head_1.next, head_2)
    return head_1
  else:
    head_2.next = merge_lists(head_1, head_2.next)
    return head_2

# is univalue list 
def is_univalue_list(head):
  current = head
  val = head.val
  
  while current is not None: 
    if current.val != val:
      return False
    current = current.next
  
  return True

# is univalue recurisve 
def is_univalue_list(head, prev = None):
  if head is None: 
    return True
  if prev is None or head.val == prev:
    return is_univalue_list(head.next, head.val)
  else:
    return False 

# remove node 
def remove_node(head, target_val):
  if head.val == target_val and head.next is None: 
    return None
  if head.val == target_val:
    return head.next
  
  current = head
  
  while current is not None: 
    next = current.next
    if next.val is target_val and next is not None: 
      next_node = current.next.next
      current.next = next_node
      return head
    current = current.next