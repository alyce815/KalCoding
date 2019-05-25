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
			console.log("sum found from indeces 0 to %d", i);
			return true;
		}
		else if(difference in map){
			console.log("sum found from indeces %d to %d", map[difference] + 1, i)
			return true;
		}
		map[runningSum] = i;
	}
	console.log("subarray summing to %d not found", targetSum);
}