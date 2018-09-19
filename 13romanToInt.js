var romanToInt = function(s) {
    const hash = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let res = 0
    for (let i = 0; i < s.length; i++) {
        const cur = hash[s[i]], next = i + 1 < s.length ? hash[s[i + 1]] : 0
        if (next > cur) {
            res += next - cur
            i++
        } else {
            res += cur
        }
    }
    return res
}
