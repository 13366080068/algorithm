var fractionToDecimal = function(numerator, denominator) {
    let isNeg = ''
    if (numerator * denominator < 0) {
        isNeg = '-'
    }
    numerator = Math.abs(numerator)
    denominator = Math.abs(denominator)
    const left = Math.floor(numerator / denominator)
    let rem = numerator % denominator
    if (!rem) {
        return isNeg + left
    }
    let right = [], hash = [rem]
    while (rem) {
        rem *= 10
        const num = Math.floor(rem / denominator)
        rem %= denominator
        const pos = hash.indexOf(rem)        
        right.push(num)
        hash.push(rem)
        if (pos !== -1) {
            right.splice(pos, 0, '(')
            right.push(')')
            break
        }
    }
    return isNeg + left + '.' + right.join('')
}