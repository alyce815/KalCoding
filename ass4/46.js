/*
to find the equilibrium index, we'll keep track of a left-sum
and a total sum so far.

for each element in the array we add it to the sum

then for each element, we subtract it from the total
and add it to a left-sum

*/

function equlibrium(arr, n){
	let leftSum = 0;
	let totalSum = 0;
	for(let a of arr){
		totalSum += a;
	}
	for(let i = 0; i < n; i++){
		totalSum -= arr[i];
		if (leftSum === totalSum){
			return i;
		}
		leftSum += arr[i];
	}
	return false;
}

// this runs in linear time and takes constant space.