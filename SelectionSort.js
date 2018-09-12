const SelectionSort = arr => {
  let len = arr.length, indexMin
  for (let i = 0; i < len - 1; i++) {
    indexMin = i
    for (j = i; j < len; j++) {
      if (arr[indexMin] > arr[j]) indexMin = j
    }
    if (i !== indexMin) [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]]
  }
  return arr
}

console.log(SelectionSort([4,2,3,5,1,9,6,8,7]))