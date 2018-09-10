const preorderTraversal = root => {
    if (!root) return []
    const arr = [], queue = [root]
    while (queue.length) {
        const node = queue.pop()
        arr.push(node.val)
        if (node.right) {
            queue.push(node.right)
        }
        if (node.left) {
            queue.push(node.left)
        }
    }
    return arr
}
