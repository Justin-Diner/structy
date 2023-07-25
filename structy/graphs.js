const depthFirstPrint = (graph, source) => {
    const stack = [ source ];

    while (stack.length > 0) {
        const current = stack.pop();
        console.log(current);
        for (let neighbor of graph[current]) {
            stack.push(neighbor)
        }
    }
}

const depthFirstPrintRec = (graph, current) => {
    console.log(current)
    for (let neighbor of graph[current]) {
        depthFirstPrintRec(graph, neighbor)
    }
}

const breadthFirstPrint = (graph, start) => {
    const queue = [ start ];

    while (queue.length > 0) {
        const current = queue.shift()
        console.log(current)
        for (let neighbor of graph[current]) {
            queue.push(neighbor)
        }
    }
}

//depthFirstPrint(graph, 'a') // abdfce
//depthFirstPrintRec(graph, 'a')
//breadthFirstPrint(graph, "a")

// hasPath - My Solve (stack)
const hasPathMySolve = (graph, src, dst) => {
    const stack = [ src ]
    
    while (stack.length > 0) {
      const current = stack.pop()
      if (current === dst) return true

      for (let neighbor of graph[current]) {
        stack.push(neighbor)
      }
    }
    return false
  };

// My solve recurisve
const hasPathRec = (graph, src, dst) => {
    if (src === dst) return true
    
    for (let neighbor of graph[src]) {
      if (hasPath(graph, neighbor, dst) === true) {
        return true
      }
    }
    return false 
  };

// My solve queue
const hasPathBFS = (graph, src, dst) => {
    const queue = [ src ]
    
    while (queue.length > 0) {
      const current = queue.shift()
      if (current === dst) return true
      
      for (let neighbor of graph[current]) {
        queue.push(neighbor)
      }
    }
    return false
  };


// Undirected Path
const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges)
    const visited = {}
    return hasPath(graph, nodeA, nodeB, new Set())
  };
  
  const hasPath = (graph, src, dst, visited) => {
    if (src === dst) return true
    if (visited.has(src)) return false
    visited.add(src)
    
    for (let neighbor of graph[src]) {
      if (hasPath(graph, neighbor, dst, visited) === true) return true
    }
    return false
  } 
  
  const buildGraph = (edges) => {
    const graph = {}
    
    for (let edge of edges) {
        const [a, b] = edge
        if (!(graph[a])) graph[a] = []
        if (!(graph[b])) graph[b] = []
        graph[a].push(b)
        graph[b].push(a)
    }
    
    return graph
  }

// n = number of nodes 
// e = number of edges
// Time: O(e)
// Space: O(e)

// DFS Rec

const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

const graphDFSRecursive = (graph, current) => {
    console.log(current)
    for (let neighbor of graph[current]) {
        graphDFSRecursive(graph, neighbor)
    }
}

console.log(graphDFSRecursive(graph, "a"))

// Connected Components Count
const connectedComponentsCount = (graph) => {
    const visited = new Set()
    let count = 0; 
    
    for (let node in graph) {
      if (explore(graph, node, visited) === true) {
        count += 1
      }
    } 
    return count;
  }
  
  const explore = (graph, current, visited) => {
    if (visited.has(String(current))) return false; 
    
    visited.add(String(current));
    
    for (let neighbor of graph[current]) {
      explore(graph, neighbor, visited)
    }
    return true
  }

// Shortest Path 
const shortestPath = (edges, nodeA, nodeB) => {
    const graph = adjList(edges);
    const queue = [ [nodeA, 0] ];
    const visited = new Set()

    while (queue.length > 0) {
        const [node, level] = queue.shift();
        if (node === nodeB) return level; 

        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor)
                queue.push([neighbor, level + 1])
            }
        }
    } 
    return -1
  };

  const adjList = (edges) => {
    const final = {}
    
    for (let edge of edges) {
        const [node1, node2] = edge
        if (!(final[node1])) {
            final[node1] = []
        }
        if (!(final[node2])) {
            final[node2] = []
        }
        final[node1].push(node2)
        final[node2].push(node1)
    }    
    return final
  }
  
edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
]

console.log('Shortest Path: ' + shortestPath(edges, 'w', 'z'))

const islandCount = (grid) => {
    let islands = 0;
    const visited = new Set();

    for (let r = 0; r < grid.length; r += 1) {
        for (let c = 0; c < grid[0].length; c+= 1) {
            if (exploreIsl(grid, r, c, visited) === true) {
                islands += 1;
            }
        }
    }
return islands;
};
  
const exploreIsl = (grid, r, c, visited) => {
    const rowInbounds = 0 <= r && r < grid.length;
    const colInbounds = 0 <= c && c < grid[0].length; 

    if (!rowInbounds || !colInbounds) return false; 

    if (grid[r][c] === 'W') return false;

    const pos = r + ',' + c;
    if (visited.has(pos)) return false; 
    visited.add(pos);

    explore(grid, r-1, c, visited);
    explore(grid, r+1, c, visited);
    explore(grid, r, c-1, visited);
    explore(grid, r, c+1, visited);

    return true; 
}

const minimumIsland = (grid) => {
    let minimum = Infinity;
    const visited = new Set(); 

    for (let r = 0; r < grid.length; r+=1 ) {
        for (let c = 0; c < grid[0].length; c+=1) {
            const currentSize = findSize(grid, r, c, visited)
            if (currentSize > 0 && currentSize < minimum) {
                minimum = currentSize
            };
        }
    }
    return minimum;
}

const findSize = (grid, r, c, visited) => {
    const inRow = 0 <= r && r < grid.length; 
    const inCol = 0 <= c && c < grid[0].length;
    if (!inRow || !inCol) return 0; 
    
    if (grid[r][c] === 'W') return 0;

    const pos = r + ',' + c;
    if (visited.has(pos)) return 0; 
    visited.add(pos);

    let size = 1;
    size += findSize(grid, r-1, c, visited)
    size += findSize(grid, r+1, c, visited)
    size += findSize(grid, r, c-1, visited)
    size += findSize(grid, r, c+1, visited)
    return size; 
}

grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

console.log(minimumIsland(grid)) // 2

const closestCarrot = (grid, startRow, startCol) => {
    shortestPath = -1;
    let pos = [startRow, startCol]
    const queue = [ pos ]    
}
