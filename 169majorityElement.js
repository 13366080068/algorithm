var majorityElement = function(nums) {
  let hash = {}, len = nums.length
  for (let i = 0; i < len; i++) {
      if (!hash[nums[i]]) hash[nums[i]] = 1
      else hash[nums[i]] += 1
      if (hash[nums[i]] > Math.floor(len / 2)) return nums[i]
  }
};
