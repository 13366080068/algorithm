var minDepth = function(root) {
  if (!root) return 0
  if (!root.left && !root.right) return 1
  const left = root.left ? minDepth(root.left) : Infinity, right = root.right ? minDepth(root.right) : Infinity
  return Math.min(left, right) + 1
}
