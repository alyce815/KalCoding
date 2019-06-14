// now we are creating a stack out of 2 queues
// q1 and q2
class myStack{
	constructor(){
		this.q1 = [];
		this.q2 = [];
		this.size = 0;
	}
// to push to the stack, we'll increment size,
// enqueue q2 with the element and then enqueue q2 with
// all of the elements in q1
// then we simply swap the references between q1 and q2
	push(element){
		this.size++;
		this.q2.push(element);
		while(this.q1.length > 0)
			this.q2.push(this.q1.shift()); // shift is same as dequeue
		//swap q1 and q2
		let q = this.q1;
		this.q1 = this.q2;
		this.q2 = q;
	}
// popping is as simple as decrementing the size and dequeuing q1
	pop(){
		if(this.q1.length == 0)
			return null;
		this.size--;
		return q1.shift()
	}
// top, or peek involves looking at the first value in q1 
// (without removing it)
	top(){
		if(this.q1.length == 0)
			return null;
		return q1[0];
	}
}