var deleteDuplicates = function(head) {
    if (head === null) {
        return null
    }
    let nodePrev = null, node = head, singlePrev = head
    while(node) {
        if (nodePrev && head.val !== headPrev.val) {
            singlePrev.next = head
            singlePrev = head
        }
        headPrev = head
        node = node.next
    }
    singlePrev.next = null
    return head
}
