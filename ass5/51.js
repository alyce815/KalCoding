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