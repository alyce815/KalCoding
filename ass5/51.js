/*
we want to print the next greater element for every element 
in an input array. i.e. the first greater element to the right
of the current element. we'll do this by iterating through the
array, and nested looping through the rest of the array until we
find an element that is larger.
*/
function printNGE(arr){
	for(let i = 0;i < arr.length; i++){
		let nge = -1;
		for(let j = 0; j < arr.length; j++){
			if(arr[i] < arr[j]){
				nge = arr[j]; // j is index of nge
				break;
			}
		}
		console.log(arr[i]+" element --> nge "+ nge);
	}
}
//This runs in O(n^2) time with constant space