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

# tree sum
def tree_sum(root):
  sum = 0 
  stack = [root]
  if root is None: return sum
  
  while stack:
    current = stack.pop()
    if current.right is not None: stack.append(current.right)
    if current.left is not None: stack.append(current.left)
    sum += current.val
  
  return sum

# tree sum breadth first 
def tree_sum(root):
  sum = 0 
  queue = [root]
  if root is None: return sum
  
  while queue:
    current = queue.pop(0)
    if current.left is not None: queue.append(current.left)
    if current.right is not None: queue.append(current.right)
    sum += current.val
  
  return sum
  
# tree includes (iterative)
def tree_includes(root, target):
  if root is None: return False
  
  stack = [root]
  while stack: 
    current = stack.pop()
    if current.right: stack.append(current.right)
    if current.left: stack.append(current.left)
    if current.val is target: 
      return True
  
  return False

# tree includes (rec)
def tree_includes(root, target):
  if root is None: return False
  if root.val is target: return True
  return tree_includes(root.left, target) or tree_includes(root.right, target)

# tree min value
def tree_min_value(root):
  min_val = root.val
  stack = [root]
  
  while stack:
    current = stack.pop()
    if current.right: stack.append(current.right)
    if current.left: stack.append(current.left)
    if current.val < min_val: min_val = current.val
  
  return min_val

# tree min value (rec)
def tree_min_value(root):
  if root is None: return float("inf")
  left = tree_min_value(root.left)
  right = tree_min_value(root.right)
  return min(root.val, left, right)

# max root to leaf path sum


# tree path finder
def path_finder(root, target):
  result = _path_finder(root, target)
  if result is None: 
    return None
  else: 
    return result[::-1]

def _path_finder(root, target):
  if root is None: return None
  if root.val is target: return [root.val]

  left = _path_finder(root.left, target)
  if left is not None: 
    left.append(root.val)
    return left
  
  right = _path_finder(root.right, target)
  if right is not None: 
    right.append(root.val)
    return right 

  return None


# all tree paths 
