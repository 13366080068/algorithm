var searchInsert = function(nums, target) {
    let il = 0, ir = nums.length - 1
    while (il <= ir) {
        const mid = Math.floor((il + ir) / 2)
        if (nums[mid] > target) {
            if (nums[mid - 1] < target) return mid
            ir = mid - 1
        } else if (nums[mid] < target) {
            if (nums[mid + 1] > target) return mid + 1
            il = mid + 1
        } else {
            return mid
        }
    }
    return il
}
