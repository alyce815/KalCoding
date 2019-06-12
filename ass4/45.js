// here we're sorting an array of 0s, 1s and 2s.
// we'll just keep count of all the zeros, ones and twos
// in individual variables and then build an array pushing
// 0s, then 1s, then 2s

function sort012s(arr){
	let zeros = 0;
	let ones = 0;
	let twos = 0;
	let ret = []
	for(let a of arr){
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
// this runs in linear time, as we basicallyjust count as we iterate.
// this takes linear space in the array we create