const plusOne = arr => {
    let len = arr.length
    addOne(len - 1)
    return arr
    function addOne(i) {
        if (arr[i] === 9) {
            arr[i] = 0
            if (i === 0) {
                arr.unshift(1)
            } else {
                addOne(i - 1)
            }
        } else {
            arr[i]++
        }
    }
}

console.log(plusOne([9,9,9]))
console.log(plusOne([1,9,9,9]))