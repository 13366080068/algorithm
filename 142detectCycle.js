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

detectCycle = function(head) {
    let slow = head, fast = head
    while (fast && fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
        if (slow == fast) {
            slow = head
            while (slow != fast) {
                slow = slow.next
                fast = fast.next
            }
            return slow
        }
    }
    return null
}
