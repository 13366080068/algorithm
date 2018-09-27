var fractionToDecimal = function(numerator, denominator) {
    let isNeg = ''
    if (numerator * denominator < 0) isNeg = '-'
    const nume = Math.abs(numerator), deno = Math.abs(denominator)
    let left = Math.floor(nume / deno), rem = nume % deno
    if (!rem) return isNeg + left
    let right = [], arr = [rem]
    while(rem) {
        rem *= 10
        right.push(Math.floor(rem / deno))
        rem %= deno
        const pos = arr.indexOf(rem)
        if (pos !== -1) {
            right.splice(pos, 0, '(')
            right.push(')')
            break
        }
        arr.push(rem)
    }
    return isNeg + left + '.' + right.join('')
}
