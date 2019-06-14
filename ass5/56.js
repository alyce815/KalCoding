// find the first non repeating character each time a character 
// is inserted to the stream
// we'll do this by creating a queue of chars 
// and an array of counts for each character
// we store each character in the queue and increase its frequency
// in the hash array
// that's the first non repeating character, otherwise we dequeue it

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
// if the queue is empty, there are no non repeating characters, 
// so we print -1

		if(q.length === 0){
			ret.push(-1);
		}
	}
	print ret;
}