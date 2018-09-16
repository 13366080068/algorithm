var rob = function(nums) {
  const len = nums.length
  if (!len) return 0
  let dp = []
  for (let i = 0; i < len; i++) {
      dp[i] = []
      if (i === 0) {
          dp[i][0] = 0
          dp[i][1] = nums[i]
      } else {
          dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1])
          dp[i][1] = dp[i - 1][0] + nums[i]
      }
  }
  return Math.max(dp[len - 1][0], dp[len - 1][1])
}
