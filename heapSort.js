function heapify(arr, len, i) {
    let max = i, left = 2 * i + 1, right = 2 * i + 2
    if (left < len && arr[left] > arr[max]) max = left
    if (right < len && arr[right] > arr[max]) max = right
    if (max !== i) {
        [arr[i], arr[max]] = [arr[max], arr[i]]
        heapify(arr, len, max)
    }
}

function heapSort(arr) {
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) heapify(arr, arr.length, i)
    let len = arr.length
    while (len > 1) {
        len--
        [arr[0], arr[len]] = [arr[len], arr[0]]
        heapify(arr, len, 0)
    }
    return arr
}

console.log(heapSort([2,5,1,8,3,6,4,7,5]))
