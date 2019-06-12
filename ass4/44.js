// this time the given array can include negative numbers
// so we'll just iterate through the array and keep a running 
// sum save it in a hash. At each step we'll take the difference
// between the running sum and target sum. if we see that 
// difference in the hash, we know the numbers between that index and
// i sum up to our target

var sumSubarray = (arr, targetSum) => {
	let runningSum = 0;
	let start = 0;
	let end = -99;
	let len = arr.length;
	let map = {};

	for(let i = 0; i < len; i++){
		runningSum = runningSum + arr[i];
		let difference = runningSum - targetSum;
		if(difference === 0){
			console.log(arr.slice(0,i));
			return true;
		}
		else if(difference in map){
			console.log(arr.slice(map[difference]+1, i) 
			return true;
		}
		map[runningSum] = i;
	}
	console.log("subarray summing to %d not found", targetSum);
}

// this runs in O(n) time with linear space as well.