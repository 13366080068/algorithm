const removeElement = (nums, val) => {
    let i = 0
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[i] = nums[j]
            i++            
        }
    }
    return i
}

console.log(removeElement([0,1,2,2,3,0,4,2], 2))