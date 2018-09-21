var isValid = function(s) {
    const relation = {
        "}": "{",
        "]": "[",
        ")": "("
    }, res = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "{" || s[i] === "[" || s[i] === "(") res.unshift(s[i])
        else if (relation[s[i]] === res[0]) res.shift()
        else return false
    }
    return !res.length
}
