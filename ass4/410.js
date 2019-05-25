// put all elements into a hash/dictionary/js object 
// with the count as the value O(n) time
// copy hash to an array, sorted by counts - O(m*logm) time
// use a second hash to keep track of index of 
// each value's first appearance to maintain order

function elementsByFrequency(arr){
	countMap = {};
	firstIndex = {};
	for(let i = 0; i < arr.length; i++){
		if(i not in countMap){
			countMap[arr[i]] = 1;
			firstIndex[arr[i]] = i;
		}
		else
			++countMap[arr[i]];
	}
	// here, we have a map of all the counts, 
	// as well as a map of the first appearances.
	// next we want to create an array of objects, 
	// each with element, count, and first properties
	elementObjects = [];
	for(let key in countMap){
		obj = {};
		obj.element = key;
		obj.count = countMap[key];
		obj.first = firstIndex[key];
		elementObjects.push(obj);
	}
	// sorts the objects in the array by 
	// count and then by first index (if the counts are the same)
	elementObjects.sort(compare); 
	arr = [];
	for(var obj of elementObjects)
		while(obj.count > 0){
			arr.push(obj.element);
			obj.count--;
		}
	return arr;
}


function compare(a,b){
	let countA = a.count;
	let countB = b.count;
	if (countA == countB){
		return a.first - b.first;
	}
	return countB - countA;
}