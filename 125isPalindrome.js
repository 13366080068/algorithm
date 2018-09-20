var isPalindrome = function(s) {
  let il = 0, ir = s.length - 1
  while (il < ir) {
      const sil = s[il].toLowerCase(), sir = s[ir].toLowerCase(), bothValid = isValid(sil) && isValid(sir)
      if (bothValid && sil !== sir) return false
      if (bothValid && sil === sir) {
          il++
          ir--
      }
      if (!isValid(sil)) il++
      if (!isValid(sir)) ir--
  }
  return true
  function isValid(str) {
      return /^[a-z0-9]$/i.test(str)
  }
}
