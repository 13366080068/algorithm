var findKthLargest = function(nums, k) {
    const heapify = (arr, len, i) => {
        let il = 2 * i + 1, ir = 2 * i + 2, max = i
        if (il < len && arr[il] > arr[max]) max = il
        if (ir < len && arr[ir] > arr[max]) max = ir
        if (max !== i) {
            [arr[i], arr[max]] = [arr[max], arr[i]]
            heapify(arr, len, max)
        }
    }
    const buildHeapify = arr => {
        for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
            heapify(arr, arr.length, i)
        }
    }
    const heapPick = (arr, k) => {
        let len = arr.length
        buildHeapify(arr)
        while (len !== arr.length - k) {
            len--
            [arr[0], arr[len]] = [arr[len], arr[0]]
            heapify(arr, len, 0)
        }
        return arr[arr.length - k]
    }
    return heapPick(nums, k)
}