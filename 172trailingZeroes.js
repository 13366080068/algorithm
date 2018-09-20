var trailingZeroes = function(n) {
  let res = 0
  while (n) {
      n = ~~(n / 5)
      res += n
  }
  return res
}
