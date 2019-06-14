// string may be rotated forward or backward
// true iff str[2:]+str[0:2] == str2 or vice versa

function isRotated(s1,s2){
	if (s1.length != s2.length){
		return false;
	}
	return (s1.substr(2) + s1.substr(0,2) == s2 ||
		s2.substr(2) + s2.substr(0,2) == s1)
}

let s1 = "alyce";
let s2 = "cealy";
let s3 = "yceal";
console.log(isRotated(s1, s2),isRotated(s1,s3),isRotated(s2,s3)); 
// third test should be false
// this algorithm runs in constant time and space - 
// just looking at reorganized substrings of the input