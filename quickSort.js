partition = (arr, l, r) => {
    let mid = Math.floor((l + r) / 2)
    while (l <= r) {
        while (arr[l] < arr[mid]) l++
        while (arr[r] > arr[mid]) r--
        if (l <= r) {
            [arr[l], arr[r]] = [arr[r], arr[l]]
            l++
            r--
        }
    }
    return l
}

quick = (arr, l, r) => {
    if (arr.length > 1) {
        let i = partition(arr, l, r)
        if (l < i - 1) quick(arr, l, i - 1)
        if (r > i) quick(arr, i, r)
    }
    return arr
}

quickSort = (arr) => quick(arr, 0, arr.length - 1)

console.log(quickSort([3,8,7,2,1,5,6,4]))