var convertToTitle = function(n) {
  const indexA = 'A'.charCodeAt(0)
  let res = ''
  while (n > 0) {
      const add = n % 26 === 0 ? 25 : n % 26 - 1
      const item = String.fromCharCode(indexA + add)
      res = item + res
      n = Math.ceil(n / 26 - 1)
  }
  return res
}
