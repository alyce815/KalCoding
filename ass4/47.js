/* 
leaders are elements where all elements to the right 
are smaller. to find all the leaders, we can list the maximums 
we find in the array scanning from right to left.
*/
function printLeaders(arr){
	last = arr.length-1; // get the last index
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
// this runs in linear time, we iterate backwards
// over the array