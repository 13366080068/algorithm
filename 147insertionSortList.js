var insertionSortList = function(head) {
    const arr = []
    function insert(val) {
        let left = 0, right = arr.length - 1
        while (left < right) {
            const mid = Math.floor((left + right) / 2)
            if (arr[mid] < val) left = mid + 1
            else if (arr[mid] > val) right = mid - 1
            else {
                left = mid
                break
            }
        }
        if (arr[left] > val) arr.splice(left, 0, val)
        else arr.splice(left + 1, 0, val)
    }
    let node = head
    while (node) {
        insert(node.val)
        node = node.next
    }
    node = head
    let index = 0
    while (node) {
        node.val = arr[index]
        node = node.next
        index++
    }
    return head
}