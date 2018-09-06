const fourSum = (nums, target) => {
    nums.sort((a, b) => a - b)
    const len = nums.length, result = []
    for (let i = 0; i < len - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }
        let sum3 = target - nums[i]
        for (let j = i + 1; j < len - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue
            }
            let sum2 = sum3 - nums[j], il = j + 1, ir = len - 1
            while (il < ir) {
                let sum = nums[il] + nums[ir]
                if (sum < sum2) {
                    il++
                } else if (sum > sum2) {
                    ir--
                } else {
                    result.push([nums[i], nums[j], nums[il], nums[ir]])
                    while (nums[il] === nums[il + 1]) {
                        il++
                    }
                    while (nums[ir] === nums[ir - 1]) {
                        ir--
                    }
                    il++
                    ir--
                }
            }
        }
    }
    return result
}