// write atoi taking a string as an argument, converting it to an integer
function atoi(string){
	let ret = 0;
	for  (let i = 0; i < string.length; i++){
		ret = ret*10 + (string[i] - '0');
	}
	return ret;
}

console.log(atoi('999'));
// atoi takes O(n) time where n is the length of the string
// it takes constant space