// Intro to Linked Lists
// Type of Data Structure 
// Made up of many nodes. 
// Node is a container for some data. 
// A's next is b. 
// Last node points to null. 
// First node is the head. 
// Last node is the tail. 
// Linked lists are an ordered data structure. 
// Head has a position of 0. B has a position 1. Etc. 
// Linked Lists have positions. Array's have indexs. 
// Arrays have O(n) insertion time. 
// Linked list has O(1) insertion time.

// Core LinkedList algorithm is just traversing the linked list. 
// All you need is the head node of the linked list. You will then have access to the full linkedlist. All we need is a current reference. That way we can look at current.next. Then set current to current.next. Assign current to current.next, then curent.next will eventually be null. If current === null, we stop. 

class Node {
	constructor(val) {
		this.val = val; 
		this.next = null; 
	}
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

a.next = b; 
b.next = c; 
c.next = d; 

// 		A => B => C => D => null; 
// 		cur	 cur  cur  cur	cur(STOP)

const printLinkedList = (head) => {
	let current = head; 

	while (current != null) {
		console.log(current.val);
		current = current.next; 
	}
}

printLinkedList(a); 

// Try not to do premature checking. Go to that node and check. 

// Recursive Call
const printLInkedListRec = (head) => {
	if (head === null) return; 
	console.log(head.val);
	printLInkedListRec(head.next);
}

printLInkedListRec(a);

//const linkedListValues = (head) => {
//  let current = head;
//  let answer = [];
  
//  while (current != null) {
//    answer.push(current.val);
//    current = current.next;
//  }
//  return answer; 
//};

const linkedListValues = (head) => {
  const listValues = [];
  fillValues(head, listValues);
  return listValues; 
};

const fillValues = (head, listValues) => {
  if (head === null) return; 
  listValues.push(head.val)
  fillValues(head.next, listValues);
}
  
// Time complexity is O(n) iterating through each value ones. 
// Space complexity is O(n), because the output array is the number of nodes. 
