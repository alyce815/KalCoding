/*
Given two numbers represented by two lists, write a function 
that returns sum list. The sum list is list representation of 
addition of two input numbers.
Suppose you have two linked list 5->4 ( 4 5 )and 5->4->3( 3 4 5) 
you have to return  a resultant linked list 0->9->3 (3 9 0).

since the lists are reverse order of the number they represent,
we can just get a partial sum, set the value of a new node,
and carry any extra 10s digit over to the next node
*/


function addLists(l1, l2){
	let head = null;
	let prev = null;
	let temp = null;
	let carry = 0;
	let sum;

	while (l1 != null || l2 != null){
		sum = carry + (l1? l1.data: 0) + (l2? l2.data: 0);
		if (sum >= 10){
			carry = 1;
			sum = sum % 10;
		}else
			carry = 0;
		temp = new Node(sum);

		if (head == null)
			head = temp;
		else
			prev.next = temp;
		prev = temp;

		if (l1)
			l1 = l1.next;
		if (l2)
			l2 = l2.next;
	}

	if (carry > 0)
		temp.next = new Node(carry);

	return head;
}
// this runs in linear time with constant space requirements