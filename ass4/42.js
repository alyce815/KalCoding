/*
You are given a list of n-1 integers and these integers are in
the range of 1 to n. There are no duplicates in list. One of 
the integers is missing in the list. Write an efficient code 
to find the missing integer.
input ex: 1 2 3 4 5 7 8 9
plan:hash all the elements and then search for numbers 1 through n
*/

function missingInteger(arr){
	elements = {}
	for(let i = 0;i < arr.length; i++){
		elements[arr[i]] = i;
	}
	for(let i = 1;i <= arr.length; i++){
		if (!i in elements){
			return i;
		}
	}
}