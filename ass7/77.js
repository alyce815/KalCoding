/* 
flatten a linked list where each node represents a linked list
with two pointers, next and bottom.

we'll merge the lists recursively the current list with the
processed list
*/

//build a utility function to merge sorted lists
function merge(h1, h2){
	if (h1 == null)
		return h2
	if (h2 == null)
		return h1

	let res;

	if (h1.data < h2.data){
		res = h1;
		res.down = merge(h1.down, h2);
	}else{
		res = h2;
		res.down = merge(h1, h2.down);
	}

	return res;
}

function flatten(head){

	if (head == null || head.right == null)
		return head;

	//recurse on list to the right
	head.right = flatten(head.right);

	head = merge(head, head.right)

	return head;
}

// this solution runs in linear time and only takes up constant space
// since it's recursive, it takes space on the call stack as well