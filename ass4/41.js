
/*
	The max sum will be found only over
	the positive segments so we'll iterate the array
	and save positive sums along the way
	return the maximum by the end of the array
*/

function MaxContiguousSum(arr){
	let max = 0;
	let positiveSum = 0;
	for (let a of arr){
		positiveSumsum = max(0, positiveSum+a);
		max = max(sum,max);
	}
	return max;
}