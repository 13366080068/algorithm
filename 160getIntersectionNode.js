var getIntersectionNode = function(headA, headB) {
    const getLen = node => {
        let len = 0
        while (node) {
            node = node.next
            len++
        }
        return len
    }
    let lenA = getLen(headA), lenB = getLen(headB)
    while (lenA < lenB) {
        headB = headB.next
        lenB--
    }
    while (lenA > lenB) {
        headA = headA.next
        lenA--
    }
    while (headA && headB) {
        if (headA === headB) {
            return headA
        }
        headA = headA.next
        headB = headB.next
    }
    return null
}   
