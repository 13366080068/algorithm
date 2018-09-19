var letterCombinations = function(digits) {
    if (!digits.length) return []
    const letters = [' ', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
    let ans = []
    dfs('', 0, digits)
    return ans
    function dfs(str, index, digits) {
        if (index === digits.length) {
            return ans.push(str)
        }
        const num = Number(digits[index])
        const letterN = letters[num]
        for (let i = 0; i < letterN.length; i++) {
            dfs(str + letterN[i], index + 1, digits)
        }
    }
}
