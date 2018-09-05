var mergeTwoLists = function(l1, l2) {
    const ans = []
    while (l1) {
        ans.push(new ListNode(l1.val))
        l1 = l1.next
    }
    while (l2) {
        ans.push(new ListNode(l2.val))
        l2 = l2.next
    }
    if (!ans.length) {
        return null
    }
    ans.sort((a, b) => a.val - b.val)
    for (let i = 0; i < ans.length - 1; i++) {
        ans[i].next = ans[i + 1]
    }
    return ans[0]
}
