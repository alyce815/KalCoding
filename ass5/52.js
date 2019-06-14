/*
we are building a queue using 2 stacks
we'll have two stacks, which we'll call new and old.
*/
class MyQueue{
	constructor(){
		this.new = [] // s1
		this.old = [] // s2
	}
//when we add an element to the queue we empty old onto 
//new and then add the new element to new, and 
	enqueue(value){
		while(this.old.length > 0)
			this.new.push(this.old.pop());
		this.new.push(value);
		while(this.new.length > 0)
			this.old.push(this.new.pop());
	}
// when we remove an element from the queue, we simply pop
// the top element off of the new stack
	dequeue(){
		if(this.new.length == 0)
			return null;
		return this.new.pop();
	}
}