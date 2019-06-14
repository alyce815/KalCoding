/* 
check if a linked list is a palindrome
we can do this by iterating the list, with a fast and slow pointer
until the fast pointer hits the end, we push slow pointer values to the stack
afterward, we compare pop values to slow - it should be in reverse order 
from the middle onward to be a palindrome
*/

function isPalindrome(head){
	let stack = [];
	let s = head;
	let f = head;
	if (!s.next)
		return true;
	if (!s)
		return false;
	while (f and f.next){
		stack.push(n.data);
		s = s.next;
		f = f.next.next;
	}
	if (f)
		n = n.next;
	while (n){
		if (n != stack.pop)
			return false;
		n = n.next;
	}
	return (stack == []);
}
//this runs in linear time and takes n/2 linear space