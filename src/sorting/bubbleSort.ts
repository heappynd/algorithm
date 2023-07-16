function swap<T>(array: T[], a: number, b: number) {
  let temp = array[a]
  array[a] = array[b]
  array[b] = temp
}

export function bubbleSort1(array: number[]) {
  const n = array.length
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1)
      }
    }
  }
  console.log(array)
}

/**
 * 优化外层循环 引入标志位
 * @param array
 */
export function bubbleSort2(array: number[]) {
  const n = array.length
  for (let i = 1; i < n; i++) {
    let hasSort = true
    for (let j = 0; j < n - i; j++) {
      if (array[j] > array[j + 1]) {
        hasSort = false
        swap(array, j, j + 1)
      }
    }
    if (hasSort) {
      break
    }
  }
  console.log(array)
}

/**
 * 优化内层循环 记录最后一个交换元素的位置
 * @param array
 */
export function bubbleSort3(array: number[]) {
  const n = array.length
  let k = n - 1
  let swapPos = 0
  for (let i = 1; i < n; i++) {
    let hasSort = true
    for (let j = 0; j < k; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1)
        hasSort = false
        swapPos = j // ! 记录最后一个交换元素的位置
      }
    }
    if (hasSort) {
      break
    }
    k = swapPos
  }
  console.log(array)
}

export function cocktailSort(array: number[]) {
  // let left = 0
  // let right = array.length - 1
  // let index = left
  // let i: number

  // while (right > left) {
  //   let isSorted = false
  //   for (i = left; i < right; i++) {
  //     if (array[i] > array[i + 1]) {
  //       swap(array, i, i + 1)
  //       index = i
  //       isSorted = true
  //     }
  //   }
  //   right = index
  //   for (i = right; i > left; i--) {
  //     if (array[i] < array[i - 1]) {
  //       swap(array, i, i - 1)
  //       index = i
  //       isSorted = true
  //     }
  //   }
  //   left = index
  //   if (!isSorted) {
  //     break
  //   }
  // }
  let left = 0
  let right = array.length - 1
  // const n = array.length
  let index = left // ! 临时变量

  while (right > left) {
    // 0 -> len
    for (let i = left; i < right; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1)
        index = i
      }
    }
    right = index
    // -1 -> len-1
    for (let i = right; i > left; i--) {
      // console.log(array[i], '<', array[i - 1])

      if (array[i] < array[i - 1]) {
        swap(array, i, i - 1)
        index = i
      }
    }
    left = index
  }

  console.log('array', array)
}
