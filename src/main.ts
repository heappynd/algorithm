// import './sorting/test'
// import './sorting/insertSort'

import { swap } from './sorting/utils'

function shellSort(array: number[]) {
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
  console.log(gaps)

  // 排序
  while ((gap = gaps.pop())) {
    for (let g = 0; g < gap; g++) {
      for (let i = g + gap; i < n; i += gap) {
        let target = array[i]
        // eg: 0 4 比较
        if (target < array[i - gap]) {
          let j = i
          while (j > 0 && array[j - gap] > target) {
            array[j] = array[i - gap]
            j -= gap
          }
          array[j] = target
        }
      }
    }
  }

  return array
}
console.log(shellSort([5, 7, 8, 3, 1, 2, 4, 6]))
