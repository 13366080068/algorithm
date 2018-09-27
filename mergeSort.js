function merge (left, right) {
    let arr = [], il = 0, ir = 0
    while (il < left.length && ir < right.length) {
        if (left[il] < right[ir]) arr.push(left[il++])
        else arr.push(right[ir++])
    }
    while (il < left.length) arr.push(left[il++])
    while (ir < right.length) arr.push(right[ir++])
    return arr
}

function mergeSort(arr) {
    if (arr.length === 1) return arr
    const mid = Math.floor(arr.length / 2)
    return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid, arr.length)))
}

console.log(mergeSort([4,3,1,5,2,8,6,7]))
