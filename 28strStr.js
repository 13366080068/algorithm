var strStr = function(haystack, needle) {
    const hlen = haystack.length, nlen = needle.length
    if (!nlen) return 0
    if (hlen < nlen) return -1
    let i = 0
    while (i <= hlen - nlen) {
        let k = 0
        if (haystack[i] !== needle[k]) i++
        else {
            let j = 0
            while (haystack[i] === needle[k] && k < nlen) {
                k++
                i++
                if (haystack[i] === needle[0] && !j) j = i
            }
            if (k === needle.length) return i - k
            else if (j) i = j
        }
    }
    return -1
}
