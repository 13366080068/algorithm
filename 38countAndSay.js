var countAndSay = function(n) {
  let a = ['1']
  for (let i = 1; i < n; i++) {
      a = nextSeq(a)
  }
  return a.join('')
  function nextSeq(arr) {
      let res= [], il = 0, ir = il
      while(ir < arr.length) {
          while(arr[il] === arr[ir] && ir < arr.length) ir++
          let num = ir - il
          res.push(String(num))
          res.push(arr[il])
          il = ir
      }
      return res
  }
}
