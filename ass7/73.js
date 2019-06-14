/*
Given a linked list, write a function to reverse every k nodes 
If a linked list is given as 1->2->3->4->5->6->7->8->NULL 
and k = 3 then output will be 3->2->1->6->5->4->8->7->NULL.

1) Reverse the k elements keep track of the next and previous.
2) head->next = reverse(next, k) 
Recursively call for list, linking sublists
3) return prev prev becomes the new head of the list 
*/

function reverse(head, k){
	let current = head;
	let next, previous;
	let count = 0;

	//reverse first k elements, essentially iterating down the list
	// and flipping the references with temp variables
	while (count < k && current != null){
		next = current.next;
		current.next = previous;
		previous = current;
		current = next;
		++count;
	}

	//recursively call on the rest of the list,
	if (next != null){
		head.next = reverse(next, k);
	}
	return prev; // new head
}// this runs in linear time with constant space requirements