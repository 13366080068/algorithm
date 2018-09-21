var plusOne = function(digits) {
    addOne(digits.length - 1)
    return digits
    function addOne(i) {
        if (digits[i] !== 9) digits[i] += 1
        else {
            digits[i] = 0
            if (i === 0) digits.unshift(1)
            else addOne(i - 1)
        }
    }
}

console.log(plusOne([9,9,9]))
console.log(plusOne([1,9,9,9]))