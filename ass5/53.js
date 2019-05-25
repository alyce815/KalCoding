class myStack{
	constructor(){
		this.q1 = [];
		this.q2 = [];
		this.size = 0;
	}

	push(element){
		this.size++;
		this.q2.push(element);
		while(this.q1.length > 0)
			this.q2.push(this.q1.shift()); // shift is same as dequeue
		//swap q1 and q2
		let q = this.q1;
		this.q1 = this.q2;
		this.q2 = this.q;
	}
	pop(){
		if(this.q1.length == 0)
			return null;
		this.size--;
		return q1.shift()
	}
	top(){
		if(this.q1.length == 0)
			return null;
		return q1[0];
	}
}