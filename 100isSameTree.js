var isSameTree = function(p, q) {
    if (p === null && q === null) {
      return true
    } else if (p === null && q !== null) {
      return false
    } else if (p !== null && q === null) {
      return false
    } else {
      if (p.val !== q.val) {
        return false
      }
      if (!isSameTree(p.left, q.left)) {
        return false
      }
      if (!isSameTree(p.right, q.right)) {
        return false
      }
      return true
    }
}