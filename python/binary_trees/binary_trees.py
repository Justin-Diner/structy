# depth first values
def depth_first_values(root):
  if root is None: return []

  stack = [root]
  current = None
  answer = []
  
  while stack:
    current = stack.pop()
    if current.right: stack.append(current.right)
    if current.left: stack.append(current.left)
    answer.append(current.val)
  
  return answer

# depth first values (rec)
def depth_first_values(root):
  if root is None: return []
  left = depth_first_values(root.left)
  right = depth_first_values(root.right)
  return [root.val, *left, *right]

# breadth first values 
def breadth_first_values(root):
  if root is None: return []

  queue = [root]
  answer = []
  
  while queue:
    current = queue.pop(0)
    if current.left: queue.append(current.left)
    if current.right: queue.append(current.right)
    answer.append(current.val)
  
  return answer