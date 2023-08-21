export {}

class Node {
  val: string; 
  left: Node | null; 
  right: Node | null; 

  constructor(val: string) {
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

const depthFirstValues = (root: Node) => {
  if (root === null) return [];

  const answer: string[] = [];
  const stack: Node[] = [ root ]
  let current: Node | undefined; 

  while (stack.length) {
    current = stack.pop();

    if (current) {
      if (current.right) stack.push(current.right);
      if (current.left) stack.push(current.left);
      answer.push(current.val)
    }
  }
  return answer; 
}

const breadthFirstValues = (root: Node | null) => {
  if (root === null) return [];
  const answer: string[] = [];
  const queue: Node[] = [ root ]
  let current: Node | undefined = undefined; 

  while (queue.length > 0) {
    current = queue.shift(); 
    if (current) {
      if (current.left) queue.push(current.left)
      if (current.right) queue.push(current.right);
      answer.push(current.val)
    }
  }
  return answer; 
}

console.log(breadthFirstValues(a))

// TreeSum
const treeSum = (root: Node): number => {
  if (root === null) return 0; 
  // DFS
  const stack: Node[] = [ root ];
  let count: number = 0; 

  while (stack.length) {
    const current: Node | undefined = stack.pop(); 
    if (current) {
      count += Number(current.val);
      if (current.right) stack.push(current.right);
      if (current.left) stack.push(current.left);
    } 
  }
  return count;
}

// TreeIncludes 
const treeInlcudes = (root: Node | null, target: any) => {
  if (root === null) return false; 
  if (root.val === target) return true; 
  return treeIncludes(root.left, target) || treeInlcudes(root.right, target)
}