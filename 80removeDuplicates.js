var removeDuplicates = function(nums) {
  let i = 1
  for (let j = 2; j < nums.length; j++) {
      if (!(nums[j] === nums[i] && nums[j] === nums[i - 1])) nums[++i] = nums[j]
  }
  return ++i
}
