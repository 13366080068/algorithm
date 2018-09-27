var fourSum = function(nums, target) {
    nums = nums.sort((a, b) => a - b)
    const res = []
    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i - 1] === nums[i]) continue
        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j - 1] === nums[j]) continue
            let sum = target - nums[i] - nums[j], il = j + 1, ir = nums.length - 1
            while (il < ir) {
                let sum2 = nums[il] + nums[ir]
                if (sum2 < sum) il++
                else if (sum2 > sum) ir--
                else {
                    res.push([nums[i], nums[j], nums[il], nums[ir]])
                    while (nums[il + 1] === nums[il]) il++
                    while (nums[ir - 1] === nums[ir]) ir--
                    il++
                    ir--
                }
            }
        }
    }
    return res
}
