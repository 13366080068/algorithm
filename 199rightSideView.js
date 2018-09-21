var rightSideView = function(root) {
  if (!root) return []
  let res = [], cur = [root]
  while (cur.length) {
      const next = []
      res.push(cur[cur.length - 1].val)
      for (let i = 0; i < cur.length; i++) {
          const node = cur[i]
          if (node.left) next.push(node.left)
          if (node.right) next.push(node.right)
      }
      cur = next
  }
  return res
}
