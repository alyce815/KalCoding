class MyQueue{
	constructor(){
		this.new = [] // s1
		this.old = [] // s2
	}
	enqueue(value){
		while(this.old.length > 0)
			this.new.push(this.old.pop());
		this.new.push(value);
		while(this.new.length > 0)
			this.old.push(this.new.pop());
	}
	dequeue(){
		if(this.new.length == 0)
			return null;
		return this.new.pop();
	}
}