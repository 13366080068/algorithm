var maxProfit = function(prices) {
    const len = prices.length
    let min = prices[0], proMax = []
    proMax[0] = 0
    for (let i = 1; i < len; i++) {
        const price = prices[i]
        if (price < min) min = price
        proMax[i] = Math.max(proMax[i - 1], price - min)
    }
    let max = prices[len - 1], postMax = []
    postMax[len - 1] = 0
    for (let i = len - 2; i >= 0; i--) {
        const price = prices[i]
        if (price > max) max = price
        postMax[i] = Math.max(postMax[i + 1], max - price)
    }
    let maxSum = 0
    for (let i = 0; i < len; i++) {
        const sum = proMax[i] + postMax[i]
        if (sum > maxSum) maxSum = sum
    }
    return maxSum
}