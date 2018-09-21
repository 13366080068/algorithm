var rotate = function(nums, k) {
    let n = k % nums.length
    while (n > 0) {
        nums.unshift(nums.pop())
        n--
    }
}
