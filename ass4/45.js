function sort012s(arr){
	let zeros = 0;
	let ones = 0;
	let twos = 0;
	let ret = []
	for(a of arr){
		if(a === 0) zeros++;
		else if( a === 1) ones++;
		else if( a === 2) twos++;
	}
	while(zeros > 0){
		zeros--;
		ret.push(0);
	}	
	while(ones > 0){
		ones--;
		ret.push(1);
	}	
	while(twos > 0){
		twos--;
		ret.push(2);
	}

}