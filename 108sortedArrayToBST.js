var sortedArrayToBST = function (nums) {
  function dfs(start, end) {
    if (start > end) return null
    const mid = Math.floor((start + end) / 2)
    const node = new TreeNode(nums[mid])
    node.left = dfs(start, mid - 1)
    node.right = dfs(mid + 1, end)
    return node
  }
  return dfs(0, nums.length - 1)
}