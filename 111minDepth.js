var minDepth = function(root) {
  const depth = node => {
      if (node === null) return 0
      if (node.left === null && node.right === null) return 1
      const left = node.left ? depth(node.left) : Infinity, right = node.right ? depth(node.right) : Infinity
      return Math.min(left, right) + 1
  }
  return depth(root)
}