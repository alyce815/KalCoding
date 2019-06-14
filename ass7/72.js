/*
Given a singly linked list, rotate the linked list
counter-clockwise by k nodes. Where k is a given positive
integer smaller than or equal to length of the linked list. 
e.g. if the given linked list is 10->20->30->40->50->60 and 
k is 4, the list should be modified to 50->60->10->20->30->40.
*/
function rotateListByK(head, k){
	let i = head;
	while(k > 1){
		i = i.next
		k--;
	}
	let current = i.next; // with k = 4, current = 50, head = 10
	i.next = null; // 40.next = null
	newHead = current;
	while (current.next != null){
		current = current.next;
	} //goes to end of input linked list, current = 60
	current.next = head;
}//this rruns in linear time with constant space requirements