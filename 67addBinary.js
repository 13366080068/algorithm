var addBinary = function(a, b) {
  a = a.split('').reverse()
  b = b.split('').reverse()
  const len = Math.max(a.length, b.length)
  let res = [], sum = 0, add = 0
  for (let i = 0; i < len; i++) {
      sum = (a[i] ? Number(a[i]) : 0) + (b[i] ? Number(b[i]) : 0) + add
      res.unshift(sum & 1)
      if (sum >= 2) add = 1
      else add = 0
  }
  if (add === 1) res.unshift(1)
  return res.join('')
}
