var input = ["flower","flow","sght"];

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