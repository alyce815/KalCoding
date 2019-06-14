/*
Given a singly linked list, write a function to swap elements 
pairwise. For example, if the linked list is 1->2->3->4->5
then the function should change it to 2->1->4->3->5, 
and if the linked list is 1->2->3->4->5->6 then the function 
should change it to 2->1->4->3->6->5.

this is similar to reversing every k elements, simply with k = 2
*/


function swapPairs(head){
	let current = head;
	while(current != null && current.next != null){
		let tempData = current.data;
		current.data = current.next.data;
		current.next.data = tempData;
		current = current.next.next;
	}
}// this runs in linear time with constant space requirements