const threeSum = nums => {
    nums.sort((a,b) => a - b)
    const len = nums.length, result = []
    for (let i = 0; i < len - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) { // skip duplicate 
            continue
        }
        let target = -nums[i], il = i + 1, ir = len - 1
        while (il < ir) {
            let sum = nums[il] + nums[ir]
            if (sum < target) {
                il++
            } else if (sum > target) {
                ir--
            } else {
                result.push([nums[i], nums[il], nums[ir]])
                while (nums[il] === nums[il + 1]) { // skip duplicate 
                    il++
                }
                while(nums[ir] === nums[ir - 1]) { // skip duplicate 
                    ir--
                }
                il++
                ir--
            }
        }
    }
    return result
}
