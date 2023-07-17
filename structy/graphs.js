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

const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

//depthFirstPrint(graph, 'a') // abdfce
//depthFirstPrintRec(graph, 'a')
//breadthFirstPrint(graph, "a")

// hasPath - My Solve (stack)
const hasPath = (graph, src, dst) => {
    const stack = [ src ]
    
    while (stack.length > 0) {
      const current = stack.pop()
      if (current === dst) {
        return true
      }
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
      if (current === dst) {
        return true
      }
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
  