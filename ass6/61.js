// dynamic programming solution, storing results of subproblems

var longestPalindromicSubstring = (str) => {
	let n = str.length;
	let palindromeMatrix = [[0]*n]*n];
	// special cases are 1 and 2 character palindromes
	// single chars are palindromes
	let maxLength = 1;
	let i = 0;
	while (i < n){
		palindromeMatrix[i][i] = true;
		i++;
	}
	// two of the same char are palindromes
	let start = 0;
	i = 0;
	while (i < n-1){
		if (str[i] == str[i+1]){
			palindromeMatrix[i][i+1] = true;
			start = i;
			maxLength = 2;
		}
		i++;
	}

	// check for longer palindromes, 
	// using ssl is substring length
	let ssl = 3;
	while (ssl <= n){
		i = 0;
		while i < (n - ssl + 1){

			// get ending index of substring - based on i and ssl
			let end = i + ssl - 1;

			//checking for substring from i to j
			if (palindromeMatrix[i+1][j-1] and str[i] == str[end]){
				palindromeMatrix[i][j] == true;
				if (k > maxLength){
					start = i;
					maxLength = ssl;
				}
			}
			i++;
		}
		ssl++;
	}
	return str.substring(start, start + maxLength);
}