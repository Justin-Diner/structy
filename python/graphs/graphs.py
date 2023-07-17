from collections import deque

def depth_first_print(graph, start):
    stack = [ start ]
    
    while len(stack) > 0: 
        current = stack[-1]
        print(current)
        stack.pop()
        for neighbor in graph[current]:
            stack.append(neighbor)

def depth_first_print_rec(graph, current):
    print(current)
    for neighbor in graph[current]: 
        depth_first_print_rec(graph, neighbor)
        
def breadth_first_print(graph, start):
    queue = [ start ] 
    
    while queue: 
        current = queue.pop(0) 
        print(current) #
        for neighbor in graph[current]:
            queue.append(neighbor) 

def breadth_first_print_deque(graph, start):
    queue = deque([ start ])
    while queue:
        current = queue[0]
        print(current)
        queue.popleft()
        for neighbor in graph[current]:
            queue.append(neighbor)
    
graph = {
    "a": ["b", "c"], 
    "b": ["d"],
    "c": ["e"],
    "d": ["f"], 
    "e": [],
    "f": []
}

#print(depth_first_print_rec(graph, "a"))
#print(breadth_first_print(graph, "a"))
print(breadth_first_print_deque(graph, "a"))

# has_path(recursive)
def has_path_rec(graph, src, dst):
  if src == dst: return True
  for neighbor in graph[src]:
    if has_path_rec(graph, neighbor, dst):
      return True
  return False 

# has_path BFS 
def has_path_bfs(graph, src, dst):
  queue = deque([src])
  
  while queue:
    current = queue.popleft()
    if current == dst: return True
    for neighbor in graph[current]:
      queue.append(neighbor)
  
  return False 

# n = number of nodes
# e = number of edges
# Time: O(e)
# Space: O(n) 