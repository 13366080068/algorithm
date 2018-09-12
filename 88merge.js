var merge = function(nums1, m, nums2, n) {
  let result = [], il = 0, ir = 0
  while (il < m && ir < n) {
      if (nums1[il] < nums2[ir]) result.push(nums1[il++])
      else result.push(nums2[ir++])
  }
  while (il < m) result.push(nums1[il++])
  while (ir < n) result.push(nums2[ir++])
  for (let i = 0; i < result.length; i++) {
      nums1[i] = result[i]
  }
}