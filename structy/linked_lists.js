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
	const values = [];
	fillValues(head, values);
	return values;
}

const fillValues = (head, values) => {
	if (head === null) return;
	values.push(head.val);
	fillValues(head.next, values);
}
  
// Time complexity is O(n) iterating through each value ones. 
// Space complexity is O(n), because the output array is the number of nodes. 
// Arrays are passed by reference in JavaScript, this means that within the fillValues recursive function,
// when you use values.push, you are actually pushing into the values array. It is not just for local scope. 
// Strings are immutable in JavaScript, so it would be a copy if you made any adjustments to the string recursively. 

// Sum List

const sumList = (head) => {
	let current = head;
	let sum = 0;

	while (current != null) {
		sum += current.val;
		current = current.next;
	}
	return sum;
};

// const sumList = (head) => {
// 	if (head === null) return 0;
// 	return head.val + sumList(head.next);
// };

// When we analyze recursive functions, we have to include the call stack so this would be O(n)
// Both have the same O(n) runtime. In recursion you have O(n) calls. In recusion you have O(n) in the loop. But you have O(n) space. 
// Because you have n calls in the call stack. 

// const linkedListFind = (head, target) => {
// 	let current = head;

// 	while (current != null) {
// 		if (current.val === target) return true;
// 		current = current.next;
// 	}
// 	return false;
// };

// O(n) time complexity. Due to traversing all of the nodes in the linked list. 
// O(1) space complexity because you are deadling witha  constant number of variables. 

const linkedListFind = (head, target) => {
	if (head === null) return false;
	if (head.val === target) return true;
	return linkedListFind(head.next, target)
};

// O(n) time complexity. O(n) space complexity because you need to store each call on the call stack. 