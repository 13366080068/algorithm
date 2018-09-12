var sortColors = function(nums) {
  if (!nums.length) return []
  let red = 0, white = 0, blue = 0
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
          nums[red] = 0
          if (white > 0) nums[red + white] = 1
          if (blue > 0) nums[red + white + blue] = 2
          red++
      } else if (nums[i] === 1) {
          nums[red + white] = 1
          if (blue > 0) nums[red + white + blue] = 2
          white++
      } else {
          blue++
      }
  }
}