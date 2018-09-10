var postorderTraversal = function(root) {
  if (!root) return []
  const arr = [], stack = [root], stack1 = []
  while (stack.length) {
      root = stack.pop()
      stack1.push(root.val)
      if (root.left) {
          stack.push(root.left)
      }
      if (root.right) {
          stack.push(root.right)
      }
  }
  while (stack1.length) {
      arr.push(stack1.pop())
  }
  return arr
}
