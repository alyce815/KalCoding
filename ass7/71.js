/*
given a linked list we are finding the middle node if
there are even number of nodes, return the 2nd middle node
we are going to have two pointers in the linked list, 
one that runs twice as fast as the other, when the fast runner
hits the end of the linked list, the slow runner will
point to the middle node, and we just return that node.
*/
function middleNode(head){
	let slow = head;
	let fast = head;

	while(fast != null && fast.next != null){
		slow = slow.next;
		fast = fast.next.next;
	}
	return slow;
}// this runs in linear time with constant space requirements