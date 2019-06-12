/*
we're printing a 2d array in spiral form. we'll do this by keeping
i and j coordinates and move it around the array
*/
function spiralPrint(arr){
	let cols = arr.length;
	let rows = arr[0].length;
	let j = 0; //starting col index
	let k = 0; //starting row index
	while(j < cols && k < rows){
		//print top row in spiral
		for(let i = j; i < cols; i++)
			console.log(arr[k++][i] + " ");
		//print right col in spiral order
		for(let i = k; i < rows; i++)
			console.log(arr[i][--cols] + " ");
		//print bottom row in spiral order
		if (k < rows)
			for(let i = cols-1; i >= 1; i--)
				console.log(arr[--rows][i] + " ");
		//print left column in spiral order
		if(j < cols)
			for(let i = rows-1; i >= k; i--)
				console.log(arr[i][j++] + " ");
	}
}
// this will take linear time. and constant space.