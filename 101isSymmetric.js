var isSymmetric = function(root) {
  if (root === null) return true
  function compare (left, right) {
      if (left === null && right === null) return true
      if (left === null && right !== null) return false
      if (left !== null && right === null) return false
      else {
          if (left.val !== right.val) return false
          if (!compare(left.left, right.right) || !compare(left.right, right.left)) return false
          return true
      }
  }
  return compare(root.left, root.right)
};