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