function equlibrium(arr, n){
	let leftSum = 0;
	let totalSum = 0;
	for(a of arr){
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