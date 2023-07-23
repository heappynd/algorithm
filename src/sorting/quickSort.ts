import { swap } from './sorting/utils'

function partition(arr: number[], left: number, right: number) {
  let cur = left
  let prev = cur - 1
  let pivot = arr[right]

  console.log('pivot', pivot)
  console.log('right', right)
  while (cur <= right) {
    console.log('cur', cur)
    console.log('prev', prev)
    console.log('%d <= 5', arr[cur], arr[cur] <= pivot)

    if (arr[cur] <= pivot && ++prev != cur) {
      console.log('swap arr', arr)
      swap(arr, prev, cur)
    }
    cur++
    console.log('----------')
  }

  console.log(arr)

  console.log('prev', prev)

  return prev
}

console.log(partition([4, 1, 7, 6, 9, 2, 8, 0, 3, 5], 0, 9))
