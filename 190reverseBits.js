var reverseBits = function(n) {
  let res = 0, count = 0
  while(n) {
      res = res | ((n % 2) << (31 - count))
      count++
      n = ~~(n / 2)
  }
  return res >= 0 ? res : res + 4 * (1 << 30)
}
