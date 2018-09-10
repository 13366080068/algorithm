var buildTree = function(preorder, inorder) {
    function dfs(start, end) {
      if (start > end) return null
      const rootIndex = inorder.indexOf(preorder.shift())
      const root = new TreeNode(inorder[rootIndex])
      root.left = dfs(start, rootIndex - 1)
      root.right = dfs(rootIndex + 1, end)
      return root
    }
    return dfs(0, preorder.length - 1)
}
