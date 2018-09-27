var zigzagLevelOrder = function(root) {
    if (!root) return []
    let res = [], stack = [root], isNeg = 1
    while (stack.length) {
        let temp = [], arr = []
        for (let i = 0; i < stack.length; i++) {
            if (stack[i].left) temp.push(stack[i].left)
            if (stack[i].right) temp.push(stack[i].right)
            if (isNeg) arr.push(stack[i].val)
            else arr.unshift(stack[i].val)
        }
        stack = temp
        res.push(arr)
        isNeg ^= 1
    }
    return res
}
