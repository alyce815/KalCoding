/*
Given a linked list, check if the the linked list has a loop. 
We can check if the linked list has a loop by iterating and 
inserting nodes we haven't seen into a hashmap. if we see a 
node repeated, we'll know that a loop exists, returning true
*/
function findLoop(node){
	map = {};
	while(node.next){
		if (node in map)
			return true;
		map[node] = true;
		node = node.next;
	}
	// if we reach the end of he linked list, there's obviously no loop
	return false;
}
//this runs in linear time with linear space requirements