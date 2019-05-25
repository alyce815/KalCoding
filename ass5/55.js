class LRUCache{
	constructor(capacity=256){
		this.capacity = capacity;
		this.queue = [];
		this.map = {};
	}
	get(key){
		if (!key in this.map) return null;
		let item = this.map[key];
		if(this.queue[0] != item)
			this.queue.unshift(this.queue.splice(arr.indexOf(item),1));
		return item.value;
	}
	set(key,value){
		//find and remove with key if key exists
		let item;
		if(key in this.map){
			item = this.map[key];
			this.queue.splice(this.arr.indexOf(item),1);
		}

		//if full shift queue
		if (this.queue.length >= this.capacity){
			this.queue.shift();
		}

		//push new item
		item = {key:key,value:value};
		this.map[key] = item;
		this.queue.push(item);
	}
}