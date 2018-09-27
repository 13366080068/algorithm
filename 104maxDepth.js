var maxDepth = function(root) {
  return root ? Math.max(maxDepth(root.left), maxDepth(root.right)) + 1 : 0
}
