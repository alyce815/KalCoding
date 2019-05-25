//plan keep track of maximums in the array scanning from right to left
function printLeaders(arr){
	last = arr.length-1;
	let max;
	let ret = []
	for(let i = last; i >= 0; i++){
		if(i === last || max < arr[i]){
			max = arr[last];
			ret.push(max);
		}
	}
	console.log(ret);

}