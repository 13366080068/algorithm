var isPalindrome = function(x) {
    const arr = String(x).split('')
    while(arr.length >= 2) {
        const head = arr.shift(), tail = arr.pop()
        if (head !== tail) return false
    }
    return true
}

var isPalindrome = function(x) {
    if (x < 0) return false
    const str = String(x)
    const mid = Math.floor(str.length / 2)
    let num = x, i = 0
    while (i < mid) {
        if (str[i] != num % 10) return false
        i++
        num = Math.floor(num / 10)
    }
    return true
}

var isPalindrome = function(x) {
    if (x < 0 || (x !== 0 && x % 10 === 0)) return false
    let num = 0
    while (x > num) {
        num = num * 10 + x % 10
        x = Math.floor(x / 10)
    }
    return x === num || x === Math.floor(num / 10)
}