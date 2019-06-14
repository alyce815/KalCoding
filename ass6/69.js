// we're finding the longest common prefix in array of strings

var input = ["flower","flow","floss"];

var longestCommonPrefix = function(strs) {
    let lcp = '';
    for (let i in strs[0]){
        for (let s of strs){
            if (s[i].toLowerCase() != strs[0][i].toLowerCase())
                return lcp;
        }
        lcp += strs[0][i]
    }
    return lcp;
};

console.log(longestCommonPrefix(input));

// this will take worst case O(n^2) time and constant space