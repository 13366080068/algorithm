var postorderTraversal = function(root) {
    if (!root) return []
    const res = [], stack = [root]
    while (stack.length) {
        const item = stack.pop()
        res.unshift(item.val)
        if (item.left) stack.push(item.left)
        if (item.right) stack.push(item.right)
    }
    return res
}
