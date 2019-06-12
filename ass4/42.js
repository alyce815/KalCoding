/*
Given a list of n - 1 integers, with no duplicates.
and one number missing between 1 and n. find the missing number

ex:
with an input of: [1, 3]
we should return: 2

Our plan is to put all the array elements in a hash
then search for numbers 1 through n in the hash
if it's not found in the hash keys, we return it.
*/

function missingInteger(arr){
	let elements = {};
	for(let i = 0;i < arr.length; i++){
		elements[arr[i]] = i;
	}
	for(let i = 1;i <= arr.length; i++){
		if (!i in elements){
			return i;
		}
	}
}