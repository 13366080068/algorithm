const hasPathSum = (root, sum) => {
  if (!root) return false
  if (!root.left && !root.right) return root.val === sum
  if (root.left) var left = hasPathSum(root.left, sum - root.val)
  if (root.right) var right = hasPathSum(root.right, sum - root.val)
  return Boolean(left || right)
}
