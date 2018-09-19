var reverse = function(x) {
    const arr = [], isNeg = x < 0 ? '-' : '', num = String(Math.abs(x)).split('')
    for (let i = num.length - 1; i>=0; i--) {
        if (num[i] !== 0 || num[i] === 0 && num.slice(i).some(it => it !== 0)) arr.push(num[i])
    }
    const res = Number(isNeg + arr.join(''))
    if (res < 1 << 31 || res > -(1 << 31) - 1) return 0
    return res
}

reverse = function(x) {
    let abs = x > 0 ? x : -x, res = 0
    while (abs > 0) {
        res = res * 10 + abs % 10
        abs = Math.floor(abs / 10)
    }
    if (res >= -(1 << 31)) return 0
    return x > 0 ? res : -res
}
