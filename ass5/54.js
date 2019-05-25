class minStack{
	constructor(arr=[]){
		this.vals = arr;
		this.mindex = null;
		this.mindeces = [];
	}
	min(){
		return this.vals[this.mindex];
	}
	push(value){
		//stack the indeces of the minimum useful for when we pop
		this.minsBefore.push(self.mindex);
		//set minimum value index
		if(self.mindex == null)
			self.mindex = 0;
		else if(self.vals[mindex] > value){
			self.mindex = len(self.values);
		}
		self.vals.push(value);
	}
	pop(){
		if (this.vals.length === 0) return null;
		this.mindex = this.mindeces.pop();
		return this.vals.pop();
	}
}