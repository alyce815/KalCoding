// dynamic programming problem lets us solve in O(m*n) time
// with m and n as the length of the two strings.


function longestCommonSubstring(x, y){
	let m = x.length;
	let n = y.length;
	let longestSuffices = new Array(m).fill(0).map(x => Array(n).fill(0));
	let longestSubstringLength = 0;
	for (let i = 0; i < m+1; i++){
		for (let j = 0; j < n+1; j++){
			if (i == 0 || j == 0)
				longestSuffices[i][j] = 0;
			else if (x[i-1] == y[j-1]){
				longestSuffices[i][j] = longestSuffices[i-1][j-1] + 1;
				longestSubstringLength = longestSubstringLength > longestSuffices[i][j] ? longestSubstringLength: longestSuffices[i][j];
			}
			else
				longestSuffices[i][j] = 0;
		}
	}
	return longestSubstringLength;
}