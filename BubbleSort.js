const BubbleSort = arr => {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j + 1] < arr[j]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
    }
  }
  return arr
}

console.log(BubbleSort([4,2,3,5,1,9,6,8,7]))