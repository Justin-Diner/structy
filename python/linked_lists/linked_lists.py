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
  if head == None:
    return []
  
  return [head.val] + linked_list_values(head.next) 