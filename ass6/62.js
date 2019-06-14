// plan, start at index 0, remove adjacent duplicates-
// recurse on the str from index + 1, end
// check that the new string doesn't have new duplicates
// e.g. "xoox" => ""

function remove(str, removed=0){
	// no possible duplicates with length of string 0 or 1
	if (str.length == 0 || str.length == 1){
		return str;
	}
	// remove left dup chars and recurse
	if (str[0] == str[1]){
		removed = str[0];
		while (str.length > 1 && str[0] == str[1]){
			str = str.substring(1);
		}
		str = str.substring(1);
		return remove(str, removed);
	}

	// str[0] != str[1] - so we can ignore the first character
	// remove duplicate characters from the rest
	let remainder = remove(str.substring(1), removed);
	
	// checks whether first character of the remainder matches 
	// first char of original string 
	if (remainder != "" && remainder[0] == str[0]){
		removed = str[0];
		return remainder.substring(1);
	}
	// check for empty string and last char removed is same as original string 
	// e.g. xooxoox, the x's will touch and need to be taken out
	if (remainder.length == 0 && removed == str[0]){
		return remainder;
	}
	// append remainder to str[0]
	return str[0] + remainder;
}

console.log(remove('xdxoooxd')); // x at index 0 should remain
// this should run in linear time, and space complexity
