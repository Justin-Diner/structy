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

// n = number of nodes. 
// O(n) time complexity. Due to traversing all of the nodes in the linked list. 
// O(1) space complexity because you are deadling witha  constant number of variables. 

const linkedListFind = (head, target) => {
	if (head === null) return false; 
	if (head.val === target) return true; 
	return linkedListFind(head.next, target);
};

// O(n) time complexity. O(n) space complexity because you need to store each call on the call stack. 

const getNodeValue = (head, index) => {
  let current = head; 
  let indexTrack = 0; 
  
  while (current != null) {
    if (indexTrack === index) return current.val; 
    current = current.next;
    indexTrack += 1;
  }
  return null; 
};

// n = number of nodes. 
// Time complexit is O(n) because you must go through the linked list. 
// Space complexity is O(1) because your amount of variables is constant. 

//const getNodeValue = (head, index) => {
//  if (head === null) return null; 
//  if (index === 0) return head.val;
//  return getNodeValue(head.next, index -=1)
//};

// For recursive 
// n = number of nodes. 
// Time complexity is O(n) because you must go through the linkedlist. 
// Space complexity is also O(n) because you must make n recursive calls on the call stack. 

const reverseList = (head) => {
  let current = head; 
  let prev = null; 
  
  while (current != null) {
    const next = current.next; 
    current.next = prev; 
    prev = current; 
    current = next; 
  }
  return prev; 
};

// n = number of nodes in linked list 
// Time Complexity is O(n) because you must traverse the linkedlist. 
// Space complexity is O(1) because you have a constant number of variables that doesn't scale with n. 

const reverseListRec = (head, prev = null) => {
  if (head === null) return prev; 
  const next = head.next; 
  head.next = prev; 
  return reverseList(next, head)
};

// Recursive 
// n = number of nodes in linked list n
// Time Complexity is O(n) because you must traverse the linkedlist. 
// Space complexity is O(n) because you have to count the amount of calls on the call stack. 

const zipperLists = (head1, head2) => {
  const head = head1; 
  let tail = head; 
  let current1 = head1.next; 
  let current2 = head2; 
  let count = 0; 
  
  while (current1 != null && current2 != null) {
    if (count % 2 === 0) {
      tail.next = current2; 
      current2 = current2.next; 
    } else {
      tail.next = current1; 
      current1 = current1.next; 
    }
    tail = tail.next; 
    count +=1 ;
  }
  if (current1 != null) tail.next = current1; 
  if (current2 != null) tail.next = current2; 
  
  return head; 
};

// O(min(n, m)) time complexity because once you traverse n or m you just append the the other to end. 
// O(1) space complexity. Constant amount of variables that do not scale with the size of n or m. 

const zipperListss = (head1, head2) => {
  if (head1 === null && head2 === null) return null; 
  if (head1 === null) return head2; 
  if (head2 === null) return head1; 
  
  const next1 = head1.next; 
  const next2 = head2.next; 
  head1.next = head2; 
  head2.next = zipperLists(next1, next2)
  
  return head1; 
};

// O(min(n, m)) time complexity because once you traverse n or m you just append the the other to end. 
// O(min(n, m)) space complexity. Due to amount of calls on the callstack. 

const mergeLists = (head1, head2) => {
  let dummyHead = new Node(null); 
  let tail = dummyHead; 
  let current1 = head1; 
  let current2 = head2; 
  
  while (current1 != null && current2 != null) {
    if (current1.val < current2.val) {
      tail.next = current1
      current1 = current1.next; 
    } else {
      tail.next = current2;
      current2 = current2.next; 
    }
    tail = tail.next; 
  }
  
  if (current1 != null) tail.next = current1; 
  if (current2 != null) tail.next = current2; 
  
  return dummyHead.next; 
};