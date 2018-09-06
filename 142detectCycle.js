var detectCycle = function(head) {
    if (head === null) {
        return null
    }
    let set = new Set(), node = head
    while (node) {
        if (set.has(node)) {
            return node
        }
        set.add(node)
        node = node.next
    }
    return null
}