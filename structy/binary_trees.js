// Depth First Traversal 

// Breadth First Traversal 

// Tress contain many nodes. These nodes can point to some other nodes. 
// Nodes have edges. Edges connect the nodes. 
// Use these terms: 
// 		parent
//    child 
// 		root - The node with no parent. Typically only one root. 
//    leaf - Nodes that have no children. (They have no outgoing arrows). Can have many leafs.

// Binary Trees - Every node has at most two children. 
// Can be the case that a node has less than two children, but it would still be a binary tree. 
// 1. Binary Trees have exactly 1 root. There should only be a single node that has no parent. This would be the top most node. 
// 2. Exactly 1 path btween root and any node. 
// 3. At most, 2 children. 

// Edge Cases 
// Tree with no nodes is a binary tree. 
// Trees with many ways to reach each node are not binary trees. 

// Each node is likely going to be an object. The properties stores in the node will be the current value and the children. node.left, node.right. 

class Node {
	constructor(val) {
		this.val = val; 
		this.left = null; 
		this.right = null; 
	}
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b; 
a.right = c; 
b.left = d; 
b.right = e; 
c.right = f; 

//        a
//       /  \  
//			b    c   
//     / \    \
//    d   e    f

// Depth first search. Must go deeper until we cannot do more. Then go across. 
// Depth first Search uses a stack - Stack is a sequential data structure where we can only add or remove from the top of the stack. 

// Take root node and store it on the stack. Check if the stack is empty, if it is not, pop the stack item. 
// Once it is removed, it is being visited (current). 
// We can now look at that nodes children (b and c). From there we push  its children to the stack. [b, c]. Push the right child first. This means that the left child is going to be evaluated next (since it would be at the top of the stack.)
// Then ask, is stack empty? No, check b (as current). Then push B's children on the stack (d and e).
// Make d as current. 
// Check d's children. It has none. 
// Then make c the current. 
// Add its children (f). 
// Make f the child. 
// Check for its children. It has none. 
// Important check if children exist before adding them to the stack. 
// Once the stack is empty, you know you must have travelled through the entire binary tree. 
// Remember to add values to the list whenever something LEAVES the stack.
// Time complexity is O(n). We are guaranteed to just run O(n). Space complexity is O(n). THe stack is a linear data structure and we will only store the number of nodes in the stack. 

const depthFirstValues = (root) => {
  if (root === null) return [];
  
  const answer = []; 
  const stack = [root]; 
  let current; 
  
  while (stack.length) {
    current = stack.pop(); 
    
    if (current.right) {
      stack.push(current.right);
    }
    
    if (current.left) {
      stack.push(current.left);
    }
    
    answer.push(current.val);
  }
  return answer; 
};

// Recursive
const depthFirstValues = (root) => {
	if (root === null) return [];
	const leftValues = depthFirstValues(root.left);
	const rightValues = depthFirstValues(root.right);
	return [root.val, ...leftValues, ...rightValues ]
}

// Breadth First Values
const breadthFirstValues = (root) => {
  if (root === null) return [];
  const answer = [];
  const queue = [root];
  let current = null; 
  
  while (queue.length) {
    current = queue.shift(); 
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
    answer.push(current.val);
  }
  return answer; 
};

// TreeSum

const treeSum = (root) => {
  if (root === null) return 0; 
  // Breadth First
  let current = null;
  const stack = [root];
  let count = 0; 
  
  while (stack.length) {
    current = stack.pop();
    count += current.val; 
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return count; 
};

const treeSumRec = (root) => {
  if (root === null) return 0;
  return root.val + treeSum(root.left) + treeSum(root.right)
};

// Time complexity is O(n) which is the amount of nodes in the tree. 
// Space complexity is also O(n) because of the call stack. 
// Always consider if the root is null. That should be your initial edge case. 

// Breadth First Search
const treeSumBFS = (root) => {
  if (root === null) return 0; 
  const queue = [root];
  let current = null;
  let count = 0; 
  
  while (queue.length) {
    current = queue.shift(); 
    count += current.val; 
    if (current.right) queue.push(current.right);
    if (current.left) queue.push(current.left);
  }
  return count; 
};

// Tree Inlcudes
const treeIncludes = (root, target) => {
  if (root === null) return false; 
  
  const stack = [root];
  let current = null; 
  
  while (stack.length) {
    current = stack.pop();
    if (current.val === target) return true; 
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return false; 
};

// BFS
const treeIncludes = (root, target) => {
  if (root === null) return false; 
  const queue = [root];
  let current = null;
  
  while (queue.length) {
    current = queue.shift(); 
    if (current.val === target) return true; 
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right)
  }
  return false; 
};

const treeIncludes = (root, target) => {
  if (root === null) return false; 
  if (root.val === target) return true; 
  return treeIncludes(root.left, target) || treeIncludes(root.right, target); 
};

// Tree Min Value
const treeMinValue = (root) => {
  const stack = [ root ];
  let current = null;
  let minimum = root.val; 
  
  while (stack.length) {
    current = stack.pop(); 
    if (current.val < minimum) {
      minimum = current.val; 
    }
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return minimum;
};

const treeMinValue = (root) => {
  if (root === null ) return Infinity
  const minLeft = treeMinValue(root.left);
  const minRight = treeMinValue(root.right);
  return Math.min(root.val, minLeft, minRight)
};

const treeMinValue = (root) => {
  const queue = [root];

  let smallest = Infinity;
  while (queue.length) {
    const current = queue.shift();
    if (current.val < smallest) smallest = current.val;

    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }
  return smallest;
};
//Note: this solution should really be considered O(n^2) runtime because the JavaScript shift() methods runs in O(n). JavaScript does not have a native queue data structure that is maximally efficient.

// max root to leaf path sum
const maxPathSum = (root) => {
  if (root === null) return -Infinity;
  if (root.left === null && root.right === null) return root.val; 
  const maxChild = Math.max(maxPathSum(root.left), maxPathSum(root.right))
  return root.val + maxChild
}

// pathFinder 
const pathFinder = (root, target) => {
  if (root === null) return null;
  if (root.val === target) return [ root.val ];

  const leftSearch = pathFinder(root.left, target);
  const rightSearch = pathFinder(root.right, target);
  
  if (leftSearch != null) {
    return [ root.val,...leftSearch];
  }
  
  if (rightSearch != null) {
    return [ root.val, ...rightSearch ]
  }
  
  return null; 
};

// This is the long way to solve it. If it is a large input, our code is going to get slow. We make a single call for each node of the tree. 
// We need to be aware of any array functions we do. The spread operator (...) iterates over the array. 
// The javascript array.concat method also does this. 
// To get efficient, instead of copying over, just push your value to the existing array. 
// Remember though, inserting at the front of an array in JS is O(n). 
// This has O(n squared) run time due to creating an array every time. 

const pathFinder = (root, target) => {
  const result = pathFinderHelper(root, target);
  if (result === null) {
    return null; 
  } else {
    return result.reverse(); 
  }
}

const pathFinderHelper = (root, target) => {
  if (root === null) return null;
  if (root.val === target) return [ root.val ];

  const leftSearch = pathFinderHelper(root.left, target);  
  if (leftSearch != null) {
    leftSearch.push(root.val)
    return leftSearch
  }
  
  const rightSearch = pathFinderHelper(root.right, target);
  if (rightSearch != null) {
    rightSearch.push(root.val);
    return rightSearch;
  }
  
  return null; 
};

// This has O(n) run time. You aren't creating a new array every time. 

// tree value count 
const treeValueCount = (root, target) => {
  if (root === null) return 0; 
  const stack = [ root ];
  let current;
  let count = 0; 
  
  while (stack.length) {
    current = stack.pop(); 
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
    if (current.val === target) count += 1;
  }
  return count; 
};

// Tree Value Count Recurisve 

const treeValueCount = (root, target) => {
  if (root === null) return 0; 
  if (root.val === target) {
    return 1 + treeValueCount(root.left, target) + treeValueCount(root.right, target); 
  } else {
  return treeValueCount(root.left, target) + treeValueCount(root.right, target); 
  }
};

// Alvin Recursive. 
const treeValueCount = (root, target) => {
  if (root === null) return 0; 
	const result = root.val === target ? 1 : 0;
	return result + treeValueCount(root.left, target) + treeValueCount(root.right, target); 
};

// These answers are the same. One thing to do when you something that should be one or the other. Here 1 or 0. Is just use the ternary. 
// That is what Alvin did and it makes code just a bit more clear. 

// Breadth First Search
const treeValueCount = (root, target) => {
  if (root === null) return 0; 
  const queue = [root];
  let count = 0;
  
  while (queue.length) {
    const current = queue.shift(); 
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
    if (current.val === target) count += 1;
  }
  return count; 
};

// This has an O(n) time complexity because you must traverse the entire binary tree. It also has an O(n) space complexity. 
// Bottom Right Value
const bottomRightValue = (root) => {
  const queue = [ root ];
  let current;
  
  while (queue.length) {
    current = queue.shift(); 
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return current.val; 
};

// all Tree Paths 
const allTreePaths = (root) => {
    if (root === null) return []
    
    if (root.left === null && root.right === null) return [[root.val]]
    
    const answer = []
    
    const left = allTreePaths(root.left)
    for (let path of left) {
      answer.push([root.val, ...path])
    }
    const right = allTreePaths(root.right)
    for (let path of right) {
      answer.push([root.val, ...path])
    }
    return answer
  };

// Tree Levels 
const treeLevels = (root) => {
    if (root === null) {
      return []
    }
    
    const levels = []
    const stack = [[root, 0]]
    
    while (stack.length > 0) {
      const [node, node_level] = stack.pop()
      
      if (levels.length === node_level) {
        levels.push([node.val])
      } else {
        levels[node_level].push(node.val)
      }
      
      if (node.right) {
        stack.push([node.right, node_level + 1])
      }
      if (node.left) {
        stack.push([node.left, node_level + 1])
      }
    }
    
    return levels
  };

// Level Averages
const levelAverages = (root) => {
    if (root === null) return []
    
    const averages = []
    const levels = []
    const queue = [[root, 0]]
    
    while (queue.length) {
      const [node, node_level] = queue.shift()
      if (levels.length === node_level) {
        levels.push([node.val])
      } else {
        levels[node_level].push(node.val)
      }
      if (node.left) {
        queue.push([node.left, node_level + 1])
      }
      if (node.right) {
        queue.push([node.right, node_level + 1])
      }
    }
  
    let total = 0
    let average = 0
  
    for (level of levels) {
      for (ele of level) {
        total += ele
      }
      average = total / level.length
      averages.push(average)
      total = 0
    }
    return averages
    
  };
  