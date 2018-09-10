var levelOrderBottom = function(root) {
    if(!root) return []
    let arr = [], stack = [root]
    while(stack.length) {
        let res = [], temp = []
        for (let i = 0; i < stack.length; i++) {
            if (stack[i].left) res.push(stack[i].left)
            if (stack[i].right) res.push(stack[i].right)
            temp.push(stack[i].val)
        }
        stack = res
        arr.unshift(temp)
    }
    return arr
}