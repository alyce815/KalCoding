// we can sort the array and move to the kth element in O(nlogn) time
function kthSmallest(arr, k){
	sArr = arr.sort();
	for(let i = 0; i < arr.length; i++){
		if(i === k){
			return arr[i];
		}
	}
}