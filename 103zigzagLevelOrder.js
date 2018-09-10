var zigzagLevelOrder = function(root) {
    if (!root) return []
    let arr = [], stack = [root], isNeg = 1
    while (stack.length) {
        let res = [], temp = []
        for (let i = 0; i < stack.length; i++) {
            if (stack[i].left) res.push(stack[i].left)
            if (stack[i].right) res.push(stack[i].right)
            if (isNeg > 0) {
                temp.push(stack[i].val)
            } else {
                temp.unshift(stack[i].val)
            }
        }
        stack = res
        arr.push(temp)
        isNeg *= -1
    }
    return arr
}
