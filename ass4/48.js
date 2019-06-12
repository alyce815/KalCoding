// we can sort the array and advance to the kth element 
// taking O(nlogn) time to sort 
// and O(n) space to store the sorted array

function kthSmallest(arr, k){
	sArr = arr.sort(); //sort the array
	for(let i = 0; i < arr.length; i++){
		if(i === k){
			return sArr[i];
		}
	}
}

