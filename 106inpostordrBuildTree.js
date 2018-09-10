var buildTree = function(inorder, postorder) {
  function dfs(start, end) {
      if (start > end) return null
      const rootIndex = inorder.indexOf(postorder.pop())
      const root = new TreeNode(inorder[rootIndex])
      root.right = dfs(rootIndex + 1, end)
      root.left = dfs(start, rootIndex - 1)
      return root
  }
  return dfs(0, postorder.length - 1)
}
