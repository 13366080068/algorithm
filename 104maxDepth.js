var maxDepth = function(root) {
  const depth = node => node === null ? 0 : Math.max(depth(node.left), depth(node.right)) + 1
  return depth(root)
};