var subsets = function(nums) {
    let res = [[]]
    for (let i = 0; i < nums.length; i++) {
        const temp = res.slice()
        for (let j = 0; j < temp.length; j++) res.push(temp[j].concat(nums[i]))
    }
    return res
}
