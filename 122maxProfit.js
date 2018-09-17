var maxProfit = function(prices) {
    let max = 0
    for (let i = 0; i < prices.length; i++) {
        const dif = prices[i] - prices[i - 1]
        if (dif > 0) max += dif
    }
    return max
}
