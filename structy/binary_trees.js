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