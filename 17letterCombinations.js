var letterCombinations = function(digits) {
    if (!Boolean(digits)) return []
    const letters = [' ', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
    const res = []
    function dfs(str, key) {
        if (key === digits.length) return res.push(str)
        const letter = letters[Number(digits[key])]
        for (let i = 0; i < letter.length; i++) dfs(str + letter[i], key + 1)
    }
    dfs('', 0)
    return res
}
