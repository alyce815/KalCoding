// write atoi taking a string as an argument, converting it to an integer
function atoi(string){
	let ret = 0;
	for  (let i = 0; i < string.length; i++){
		ret = ret*10 + (string[i] - '0');
	}
	return ret;
}

console.log(atoi('999'));