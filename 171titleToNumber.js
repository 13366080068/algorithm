var titleToNumber = function(s) {
  const indexA = 'A'.charCodeAt(0)
  let res = 0
  for (let i = 0; i < s.length; i++) {
      let temp = s[i].charCodeAt(0) - indexA + 1
      for (let j = 1; j < s.length - i; j++) {
          temp *= 26
      }
      res += temp
  }
  return res
}
