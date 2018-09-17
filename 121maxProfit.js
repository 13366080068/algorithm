var maxProfit = function(prices) {
  let min = Infinity, max = 0
  for (let i = 0; i < prices.length; i++) {
      min = prices[i] < min ? prices[i] : min
      max = prices[i] - min > max ? prices[i] - min : max
  }
  return max
}
