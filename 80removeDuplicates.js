const removeDuplicates = nums => {
  const len = nums.length
  if (len < 3) {
      return len
  }

  let prev = 1, curr = 2
  while (curr < len) {
    if (nums[curr] === nums[prev] && nums[curr] === nums[prev - 1]) {
      curr++
    } else {
      prev++
      nums[prev] = nums[curr]
      curr++
    }
  }
  
  return prev + 1
}

console.log(removeDuplicates([0,0,0,0,0]))