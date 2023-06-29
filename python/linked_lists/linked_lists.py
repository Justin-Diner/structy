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