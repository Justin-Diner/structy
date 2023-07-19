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

# undirected path
def undirected_path(edges, node_A, node_B):
    graph = build_graph(edges)
    return has_path(graph, node_A, node_B, set())
  
def has_path(graph, src, dst, visited):
  if src == dst: return True

  if src in visited: 
    return False
  
  visited.add(src)

  for neighbor in graph[src]:
    if has_path(graph, neighbor, dst, visited) == True:
      return True
  
  return False 
  
def build_graph(edges):
  graph = {}
  
  for edge in edges: 
    a, b = edge
    if a not in graph: 
      graph[a] = []
    if b not in graph: 
      graph[b] = []
      
    graph[a].append(b)
    graph[b].append(a)
  
  return graph

# Connected Components Count 
def connectedComponentsCount(graph):
    count = 0
    visited = set()
    
    for node in graph:
        if explore(graph, node, visited) == True:
            count += 1
    
    return count

def explore(graph, current, visited):
    if current in visited:
        return False
    
    visited.add(current)
    
    for neighbor in graph[current]:
        explore(graph, neighbor, visited)
    
    return True

print(connectedComponentsCount(graph))