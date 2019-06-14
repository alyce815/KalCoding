/*
Given two linked lists sorted in ascending order.
Merge them in-place and return head of the merged list.
For example, if first list is 10->20 and second list is 
15->17, then the result list should be 10->15->17->20.

we'll use recursion - to create an elegant merge solution
*/

function mergeLists(h1, h2){
	let temp = null;

	if (h1 == null)
		return h2;
	if (h2 == null)
		return h1;

	if (h1.data <= h2.data){
		temp = h1;
		temp.next = mergeLists(h1.next, h2);
	}
	else{
		temp = h2;
		temp.next = mergeLists(h1, h2.next);
	}
	return temp

}



// this runs in linear time but uses stack space proportional 
// to the length of the lists