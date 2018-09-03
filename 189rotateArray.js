const rotateArray = (nums, k) => {
    const len = nums.length
    const n = k % len
    if (n === 0) {
        return nums
    }
    for (let i = 0; i < n; i++) {
        const num = nums.pop()
        nums.unshift(num)
    }
    return nums
}

console.log(rotateArray([1,2,3,4,5,6], 2))
console.log(rotateArray([1,2,3,4,5,6], 16))
console.log(rotateArray([1,2,3,4,5,6], 12))

