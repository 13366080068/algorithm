const inorderTraversal = root => {
    if (!root) return []
    const stack = [], arr = []
    while (root || stack.length) {
        if (root) {
            stack.push(root)
            root = root.left
        } else {
            root = stack.pop()
            arr.push(root.val)
            root = root.right
        }
    }
    return arr
}