function mergeArray(arrA: MergeArr, arrB: MergeArr) {
  let lengthA = arrA.length
  let lengthB = arrB.length
  let mergedArr = []
  let IndexA = 0
  let IndexB = 0
  let indexMerged = 0

  while (IndexA <= lengthA - 1 && IndexB <= lengthB - 1) {
    mergedArr[indexMerged++] =
      arrA[IndexA] < arrB[IndexB] ? arrA[IndexA++] : arrB[IndexB++]
  }

  while (IndexA <= lengthA - 1) {
    mergedArr[indexMerged++] = arrA[IndexA++]
  }

  while (IndexB <= lengthB - 1) {
    mergedArr[indexMerged++] = arrB[IndexB++]
  }

  return mergedArr
}

// console.log(mergeArray([1, 2, 11], [3, 4, 5]))

type MergeArr = {
  top: MergeArr | undefined
  left: MergeArr
  right: MergeArr
  length: number
  slice(start?: number, end?: number): MergeArr
  [index: number]: number
  // [key: string]: unknown
}

export function mergeSort(array: MergeArr, toMerge: boolean = false) {
  if (array.length > 1 && toMerge !== true) {
    let top = array
    let mid = array.length >> 1
    top.left = array.slice(0, mid)
    top.right = array.slice(mid)

    top.left.top = top
    top.right.top = top
    // console.log(top.left, top.right, '分割')
    mergeSort(top.left)
    mergeSort(top.right)
  } else if (array.length === 1 || toMerge) {
    // 有上层 且 merge属性为false
    if (array.top && (array.merged === false || array.merged === undefined)) {
      let isLeft = array === array.top.left
      // 找到邻居
      let neighbor = isLeft ? array.top.right : array.top.left
      // 判断邻居是只有一位 或者 是存在sorted属性
      if (neighbor.length === 1 || neighbor.sorted === true) {
        let temp = mergeArray(array, neighbor)
        neighbor.merged = true
        // console.log(temp, '合并')
        // 让他是有序的
        for (let i = 0, n = temp.length; i < n; i++) {
          array.top[i] = temp[i]
        }
        // 给当前 打标记 sorted
        array.top.sorted = true
        mergeSort(array.top, true)
      }
    }
  }
}

// mergeSort([3, 4, 9, 1, 8, 2, 0, 7, 6, 5] as unknown as MergeArr)

// debugger
// mergeSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5] as unknown as MergeArr)
