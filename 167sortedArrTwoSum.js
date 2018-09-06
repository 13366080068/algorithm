const twoSum = function(numbers, target) {
    let il = 0, ir = numbers.length - 1
    while (il < ir) {
        let sum = numbers[il] + numbers[ir]
        if (sum < target) {
            il++
        } else if (sum > target) {
            ir--
        } else {
            return [il + 1, ir + 1]
        }
    }
    return null
}