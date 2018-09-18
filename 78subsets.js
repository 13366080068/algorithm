var subsets =function(nums) {
  function findSubsets(k) {
      if (!k) return [[], [nums[0]]]
      const arr = findSubsets(k - 1), res = arr.slice()
      for (let i = 0; i < arr.length; i++) {
          const temp = arr[i].slice()
          temp.push(nums[k])
          res.push(temp)
      }
      return res
  }
  return findSubsets(nums.length - 1)
}
