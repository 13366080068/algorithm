var lengthOfLastWord = function(s) {
  const arr = s.split(' ').filter(item => Boolean(item))
  if (!arr.length) return 0
  return arr[arr.length - 1].length
}

lengthOfLastWord = function(s) {
  if (!s.length) return 0
  let ir = s.length - 1
  while(ir >= 0 && s[ir] === ' ') ir--
  if (ir < 0) return 0
  let il = ir
  while(il >= 0 && s[il] !== ' ') il--
  return ir - il
}