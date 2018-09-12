const InsertionSort = arr => {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    let j = i, temp = arr[j]
    while (j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1]
      j--
    }
    arr[j] = temp
  }
  return arr
}

console.log(InsertionSort([4,2,3,5,1,9,6,8,7]))
