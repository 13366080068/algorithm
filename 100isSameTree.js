var isSameTree = function(p, q) {
  if (!p && !q) return true
  if (!p && q || p && !q) return false
  if (p.val !== q.val) return false
  if (!isSameTree(p.left, q.left) || !isSameTree(p.right, q.right)) return false
  return true
}
