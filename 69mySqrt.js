var mySqrt = function(x) {
    if (x === 0 || x === 1) return x
    let i = 1
    while (i * i < x) {
        i = 2 * i
    }
        return binarySearch(i / 2, i)
    function binarySearch(l, r) {
        if (l * l === x) return l
        if (r * r === x) return r
        if (r === l + 1) return l
        const mid = Math.floor((l + r) / 2)
        const midValue = mid * mid
        if (x < midValue) return binarySearch(l, mid)
        else if (x > midValue) return binarySearch(mid, r)
        else return mid
    }
}