function firstNonRepeat(str){
	var q = [];
	var counts = new Array(26+1).join('0').split('').map(parseFloat)
	let ret = []
	for(let i = 0; i < str.len; i++){
		q.push(str[i]);
		//increment frequency count for current character in stream
		counts[str[i].charCodeAt(0)-'a'.charCodeAt(0)]++;
		while (q.length > 0){
			if (counts[q[0].charCodeAt(0)-'a'.charCodeAt(0)] > 1){
				q.shift();
			}
			else{
				ret.push(q[0]);
				break;
			}
		}
		if(q.length === 0){
			ret.push(-1);
		}
	}
	print ret;
}