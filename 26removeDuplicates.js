const removeDuplicates = nums => {
    const len = nums.length
    if (len === 0) {
        return 0
    }
    let i = 0
    for (let j = 0; j < len; j++) {
        if (nums[j] !== nums[i]) {
            i++
            nums[i] = nums[j]
        }
    }
    return i + 1
}

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))