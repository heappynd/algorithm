export function mergeSortObject(array: number[]) {
  function sort(obj, toMerge: boolean = false) {
    let { array, begin, end } = obj
    let n = end - begin
    if (n !== 0 && toMerge !== true) {
      let mid = begin + ((end - begin) >> 1)
      obj.left = {
        begin,
        end: mid,
        array,
        top: obj,
      }
      obj.right = {
        begin: mid + 1,
        end,
        array,
        top: obj,
      }
      sort(obj.left)
      sort(obj.right)
    } else if (n === 0 || toMerge) {
      if (obj.top && !obj.merged) {
        let top = obj.top
        let isLeft = obj === top.left
        let neighbor = isLeft ? top.right : top.left
        if (neighbor.end == neighbor.begin || neighbor.sorted) {
          let temp = mergeArrayByIndex(
            array,
            begin,
            end,
            neighbor.begin,
            neighbor.end
          )
          neighbor.merged = true
          let b = top.begin
          for (let i = 0, n = temp.length; i < n; i++) {
            array[b + i] = temp[i]
          }
          top.sorted = true
          sort(top, true)
        }
      }
    }
  }

  debugger
  sort({
    array,
    begin: 0,
    end: array.length - 1,
  })
  return array
}
function mergeArrayByIndex(
  array: number[],
  begin: number,
  end: number,
  begin2: number,
  end2: number
) {
  let indexA = begin,
    indexB = begin2,
    indexMerged = 0,
    mergedArr = []
  while (indexA <= end && indexB <= end2) {
    mergedArr[indexMerged++] =
      array[indexA] < array[indexB] ? array[indexA++] : array[indexB++]
  }

  while (indexA <= end) {
    mergedArr[indexMerged++] = array[indexA++]
  }

  while (indexB <= end2) {
    mergedArr[indexMerged++] = array[indexB++]
  }

  return mergedArr
}

// mergeSortObject([3, 2, 1])

export function mergeSortObject2(array: number[]) {
  function sort(obj, toMerge = false) {
    let { array, begin, end } = obj
    let n = end - begin

    if (n !== 0 && toMerge !== true) {
      let mid = begin + ((end - begin) >> 1)
      obj.left = {
        begin,
        end: mid,
        array,
      }
      obj.right = {
        begin: mid + 1,
        end,
        array,
      }
      sort(obj.left)
      sort(obj.right)
      let temp = mergeArrayByIndex(array, begin, mid, mid + 1, end)
      for (let i = 0, n = temp.length; i < n; i++) {
        array[begin + i] = temp[i]
      }
    }
  }

  sort({
    array,
    begin: 0,
    end: array.length - 1,
  })

  return array
}

// console.log(mergeSortObject2([3, 2, 1]));

export function mergeSortSimple(array: number[]) {
  function sort(array: number[], begin: number, end: number) {
    if (begin !== end) {
      let mid = begin + ((end - begin) >> 1)
      sort(array, begin, mid)
      sort(array, mid + 1, end)
      let temp = mergeArrayByIndex(array, begin, mid, mid + 1, end)
      for (let i = 0, n = temp.length; i < n; i++) {
        array[begin + i] = temp[i]
      }
    }
  }
  sort(array, 0, array.length - 1)
  return array
}
