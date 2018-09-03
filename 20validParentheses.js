const validParentheses = s => {
    let stack = []
    const relations = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }
    for (let i = 0; i < s.length; i++) {
        if (stack.length === 0) {
            stack.push(s[i])
        } else {
            if (s[i] === relations[stack[stack.length - 1]]) {
                stack.pop()
            } else {
                stack.push(s[i])
            }
        }
    }
    return !stack.length
}

console.log(validParentheses('()'))
console.log(validParentheses('()[]{}'))
console.log(validParentheses('(]'))
console.log(validParentheses('([)]'))
console.log(validParentheses('{[]}'))
console.log(validParentheses('{[]}()'))