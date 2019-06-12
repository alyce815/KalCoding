/* to find a particular sum in a subarray we'll iterate through
the array with two pointers and keep a running sum,
when we move the left pointer, we'll subtract the preceding
element, and when we move the right pointer, we'll add the 
next element
*/

function sumSubarray(arr, targetSum){
	let runningSum = arr[0];
	let len = array.length;
	let start = 0;
	let end = 1;
	while(end <= len){
		while(runningSum > targetSum && start < end-1){
			runningSum -= arr[start]
			start += 1
		}
		//print indeces and return true when we find the subarray that sums to target
		if(runningSum === targetSum){
			console.log("Sum found between indexes %d and %d"%(start, end-1));
			return true;
		}
		//add element at 'i' to the running sum
		if(start < len){
			runningSum = runningSum + arr[start];
		}
		start++;
	console.log("target sum not found");
	return false;
	}
}

// this will take O(n) or linear time with O(1) or constant space
