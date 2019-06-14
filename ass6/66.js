// find the (first) longest substring with unique chars.
// linear solution - store last indeces of visited chars.
// iterate through string, keeping track of max length unique substring
// also track length of current string of uniques
// currentChars is the array of characters in the current string of uniques

function longestUniqueSubstring(string){
	let n = string.length;
	let length = 1;
	let longest = 1;
	let longestUnique = '';
	let previ = 0;

	// save index of chars found in the string in a hashmap (js object)
	let visited = {};

	// initialize visited with the first character in string;
	visited[string[0]] = 0;

	for (let i = 1; i < n; i++){
		if (string[i] in visited)
			previ = visited[string[i]];

		// increase length of current unique substring when we haven't seen the char
		// or it's not part of the current unique substring
		if (!string[i] in visited || (i-length > previ))
			length++;
		// update the unique substring to the substring from indexes prev through i
		else{
			if (length > longest){
				longest = length;
				longestUnique = string.substring(previ, i);
			}
			length = i - previ;
		}

		// update index of char at i
		visited[string[i]] = i;
	}
	if (length > longest)
		longestUnique = string.substr(-length);

	return longestUnique;

}
// this runs in linear time and constant space