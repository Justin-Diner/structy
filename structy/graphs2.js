//const shortestPath = (edges, nodeA, nodeB) => {
//  const graph = buildGraph(edges);
//  const visited = new Set(nodeA)
//  const queue = [ [nodeA, 0] ];

//  while (queue.length > 0) {
//    const [ current, level ] = queue.shift(); 
//    if (current === nodeB) return level; 

//    for (let neighbor of graph[current]) {
//      if (!visited.has(neighbor)) {
//        visited.add(neighbor);
//        queue.push([neighbor, level +1])
//      }
//    }
//  }
//  return -1; 
//}

//const buildGraph = (edges) => {
//  const adjList = {};

//  for (let edge of edges) {
//    const [a, b] = edge; 

//    if (!(adjList[a])) adjList[a] = [];
//    if (!(adjList[b])) adjList[b] = [];
//    adjList[a].push(b);
//    adjList[b].push(a);
//  }
//  return adjList
//}

//const edges = [
//  ['w', 'x'],
//  ['x', 'y'],
//  ['z', 'y'],
//  ['z', 'v'],
//  ['w', 'v']
//];

//console.log(shortestPath(edges, 'w', 'z')); // -> 2


const islandCount = (grid) => {
  const visited = new Set(); 
  let count = 0; 

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c< grid[0].length; c++) {
      if (explore(grid, r, c, visited)) {
        count += 1;
      }
    }
  }
  return count; 
}

const explore = (grid, r, c, visited) => {
  const rowInbounds = 0 <= r && r < grid.length; 
  const colInbounds = 0 <= 0 && c < grid[0].length; 
  if (!rowInbounds || !colInbounds) return false; 

  if (grid[r][c] === "W") return false; 

  const pos = r + ',' + c;
  if (visited.has(pos)) return false; 
  visited.add(pos);

  explore(grid, r - 1, c, visited);
  explore(grid, r + 1, c, visited);
  explore(grid, r, c-1, visited);
  explore(grid, r, c+1, visited);
  return true; 
}

const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

islandCount(grid); // -> 3