import { bench, describe } from 'vitest'
import { cocktailSort } from '../bubbleSort'
import { insertSort1, shellSort, shellSort2, shellSort3 } from '../insertSort'

function getSortedArray() {
  return Array.from({ length: 10000 }, (_, index) => index)
}

function getUnsortedArray() {
  return Array.from(
    { length: 10000 },
    () => Math.floor(Math.random() * 10000) + 1
  )
}

describe('sort a completely sorted array', () => {
  bench('bubbleSort', () => {
    cocktailSort(getSortedArray())
  })
  bench('insertSort1', () => {
    insertSort1(getSortedArray())
  })
  bench('shellSort', () => {
    shellSort(getSortedArray())
  })
  bench('shellSort2', () => {
    shellSort2(getSortedArray())
  })
  bench('shellSort3', () => {
    shellSort3(getSortedArray())
  })
})

describe('sort a completely unsorted array', () => {
  bench('bubbleSort', () => {
    cocktailSort(getUnsortedArray())
  })
  bench('insertSort1', () => {
    insertSort1(getUnsortedArray())
  })
  bench('shellSort', () => {
    shellSort(getUnsortedArray())
  })
  bench('shellSort2', () => {
    shellSort2(getUnsortedArray())
  })
  bench('shellSort3', () => {
    shellSort3(getUnsortedArray())
  })
})
