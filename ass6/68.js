//check if s1 is in s2
let s  = 'xyz';
let x = 'abcxyzabc';

function strstr(s, x){
	let l1 = s.length;
	let l2 = x.length;
	for(let i = 0; i <= l2 - l1; i++){
		let j;
		for(j = 0; j < l1; j++)
			if (x[i+j] != s[j])
				break;

		if (j == l1){
			console.log("string s is a substring of x beginning at index %d", i);
			return i;
		}
	}
	return false;
}

console.log(strstr(s,x));