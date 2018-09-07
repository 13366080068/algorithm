const addBinary = (a, b) => {
  a = a.split('').reverse()
  b = b.split('').reverse()

  let c= [], add = 0
  const len = Math.max(a.length, b.length)
  for (let i = 0; i < len; i++) {
    let sum = (a[i] === undefined ? 0 : Number(a[i])) + (b[i] === undefined ? 0 : Number(b[i])) + add
    c[i] = sum & 1
    if (sum >= 2) {
      add = 1
    } else {
      add = 0
    }
  }

  if (add) {
    c[len] = 1
  }

  return c.reverse().join('')
}
