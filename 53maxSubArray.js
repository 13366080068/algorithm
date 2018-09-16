var maxSubArray = function(nums) {
  let maxSum = -Number.MAX_VALUE, curSum = 0
  for (let i = 0; i < nums.length; i++) {
      curSum = curSum <= 0 ? nums[i] : nums[i] + curSum
      maxSum = curSum > maxSum ? curSum : maxSum
  }
  return maxSum
}
