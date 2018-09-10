const twoSum = (nums, target) => {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
      let dif = target - nums[i]
      if (map.has(dif)) {
          return [map.get(dif), i]
      }
      map.set(nums[i], i)
  }
  return null
}