const mergeKLists = function(lists) {
  const arr = []
  lists.forEach(list => {
    while(list) {
      arr.push(list.val)
      list = list.next
    }
  })
  arr.sort((a, b) => a - b)
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i].next = arr[i + 1]
  }
  return arr
}