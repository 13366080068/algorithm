var longestCommonPrefix = function(strs) {
    let res = ''
    const head = strs[0]
    if (!Boolean(head)) return res
    for (let j = 0; j < head.length; j++) {
        if (strs.some(str => str[j] !== head[j])) return res
        else res += head[j]
    }
    return res
}
