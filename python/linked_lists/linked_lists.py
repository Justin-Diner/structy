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
  