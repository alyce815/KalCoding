/*
Given a linked list, find the n'th node from the end. 
we can achieve this by having two pointers, i and j point
at the head. then we can advance j by n nodes,(i is n nodes from j)
then start moving i and j at the same time until j hits the end/null. 
i will be at the nth node from the end, where j is.
*/

function nthFromEnd(head, n){
	let i = head;
	let j = head;
	while(n > 0){
		j = j.next;
		n--;
	}
	while(j != null){
		i = i.next;
		j = j.next;
	}
	return i;
}
// this runs in linear time with using constant space
