function MaxContiguousArraySum(arr){
	
	let maxSum = 0;
	let potentialMax = 0;
	for (a of arr){
		potentialMax = potentialMax + a
		if(potentialMax < 0)
			potentialMax = 0;
		else if (potentialMax > maxSum)
			maxSum = potentialMax;
	}
	return maxSum;
}

/*
	look for the positive subarrays. track the max sum over only 
	the positive segments (using potential max)
	return the largest sum we have compiled by the end of the array
*/