export function insertSort1(a: number[]) {
  for (let i = 1; i < a.length; i++) {
    // 1. 复制插入元素
    const x = a[i]

    let j
    // 2. 记录后移，查找插入位置
    for (j = i - 1; j >= 0 && a[j] > x; j--) {
      a[j + 1] = a[j]
    }
    // 3. 插入到正确位置
    a[j + 1] = x
  }
  return a
}

export function insertSort2(a: number[]) {
  // 第一位设置成哨兵位置，占位 可以减少越界比较次数
  for (let i = 2; i < a.length; i++) {
    if (a[i] < a[i - 1]) {
      a[0] = a[i] // ! 加入哨兵
      let j
      for (j = i - 1; a[0] < a[j]; j--) {
        a[j + 1] = a[j]
      }
      a[j + 1] = a[0]
    }
  }
  return a
}

export function insertSort3(a: number[]) {
  // 采用二分查找法
  for (let i = 2; i < a.length; i++) {
    if (a[i] < a[i - 1]) {
      a[0] = a[i] // ! 加入哨兵
      let low = 1
      let high = i - 1
      while (high >= low) {
        let mid = Math.floor((high + low) / 2)
        if (a[0] < a[mid]) {
          high = mid - 1
        } else {
          low = mid + 1
        }
      }
      // 循环结束 `high + 1` 为插入位置
      for (let j = i - 1; j >= high + 1; j--) {
        a[j + 1] = a[j]
      }
      a[high + 1] = a[0]
    }
  }
  return a
}

export function shellSort(array: number[]) {
  // 生成增量序列
  let n = array.length
  let gaps = [1]
  let gap = 1
  while (true) {
    gap = gap * 3 + 1
    // 增量不能大于数组长度
    if (gap >= n) {
      break
    }
    gaps.push(gap)
  }
  // console.log('gaps', gaps)

  // 排序
  while ((gap = gaps.pop())) {
    for (let g = 0; g < gap; g++) {
      for (let i = g + gap; i < n; i += gap) {
        let target = array[i]
        // eg: 0 4 比较
        if (target < array[i - gap]) {
          let j = i
          while (j > 0 && array[j - gap] > target) {
            array[j] = array[j - gap]
            j -= gap
          }
          array[j] = target
        }
      }
    }
  }

  return array
}

export function shellSort2(array: number[]) {
  let n = array.length
  let gaps = []
  let gap = n
  while (gap !== 1) {
    gap = gap >> 1
    gaps.unshift(gap)
  }
  // console.log('gaps', gaps)

  // 排序
  while ((gap = gaps.pop())) {
    for (let g = 0; g < gap; g++) {
      for (let i = g + gap; i < n; i += gap) {
        let target = array[i]
        // eg: 0 4 比较
        if (target < array[i - gap]) {
          let j = i
          while (j > 0 && array[j - gap] > target) {
            array[j] = array[j - gap]
            j -= gap
          }
          array[j] = target
        }
      }
    }
  }

  return array
}

function getSedgewickSeq(n) {
  let startup1 = 0,
    startup2 = 2,
    array = []
  for (let i = 0; i < n; i++) {
    if (i % 2 == 0) {
      array[i] = 9 * Math.pow(4, startup1) - 9 * Math.pow(2, startup1) + 1
      startup1++
    } else {
      array[i] = Math.pow(4, startup2) - 3 * Math.pow(2, startup2) + 1
      startup2++
    }
    if (array[i] >= n) {
      break
    }
  }
  return array
}

export function shellSort3(array: number[]) {
  // 生成增量序列 [1, 5, 19, 41, 109, 209, 505, 929, 2161, 3905, 8929, 16001]
  let n = array.length,
    gaps = getSedgewickSeq(n),
    gap = 1
  // 排序
  while ((gap = gaps.pop())) {
    for (let g = 0; g < gap; g++) {
      for (let i = g + gap; i < n; i += gap) {
        let target = array[i]
        // eg: 0 4 比较
        if (target < array[i - gap]) {
          let j = i
          while (j > 0 && array[j - gap] > target) {
            array[j] = array[j - gap]
            j -= gap
          }
          array[j] = target
        }
      }
    }
  }

  return array
}
