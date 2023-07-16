import {
  bubbleSort1,
  bubbleSort2,
  bubbleSort3,
  cocktailSort,
} from './bubbleSort'

function shuffle(a: number[]) {
  let len = a.length
  for (let i = 0; i < len - 1; i++) {
    let index = parseInt(Math.random() * (len - i) + '')
    let temp = a[index]
    a[index] = a[len - i - 1]
    a[len - i - 1] = temp
  }
}

function test(sortFn: (array: number[]) => void) {
  let array = []
  for (let i = 0; i < 10000; i++) {
    if (i <= 1000) {
      array[i] = 1000 - i
    } else {
      array[i] = i
    }
  }
  console.warn('===========================', sortFn.name)
  console.time('部分有序的情况')
  sortFn(array)
  console.timeEnd('部分有序的情况')
  // console.log('部分有序的情况', sortFn.name, Date.now() - start)

  shuffle(array)
  console.time('完全乱序的情况')
  sortFn(array)
  console.timeEnd('完全乱序的情况')
  // console.log('完全乱序的情况', sortFn.name, Date.now() - start)
}

// test(bubbleSort1)
// test(bubbleSort2)
// test(bubbleSort3)
test(cocktailSort)

// cocktailSort([2, 3, 4, 5, 1])
// cocktailSort([2, 3, 11, 4, 5, 1, 6, 7])
