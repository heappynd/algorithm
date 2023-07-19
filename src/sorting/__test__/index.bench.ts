import { bench, describe, expect } from 'vitest'
import { cocktailSort } from '../bubbleSort'

describe('sort a completely sorted array', () => {
  bench('bubbleSort', () => {
    const input = Array.from({ length: 10000 }, (_, index) => index + 1)
    const sortedArray = cocktailSort(input)
    expect(sortedArray).toEqual(input)
  })
})

describe('sort a completely unsorted array', () => {
  bench('bubbleSort', () => {
    const input = Array.from(
      { length: 10000 },
      () => Math.floor(Math.random() * 10000) + 1
    )
    const expectedOutput = [...input].sort((a, b) => a - b)
    const sortedArray = cocktailSort(input)
    expect(sortedArray).toEqual(expectedOutput)
  })
})

// bench('should correctly sort a completely unsorted array', () => {
//   const input = Array.from(
//     { length: 10000 },
//     () => Math.floor(Math.random() * 10000) + 1
//   )
//   const expectedOutput = [...input].sort((a, b) => a - b)
//   const sortedArray = bubbleSort1(input)
//   expect(sortedArray).toEqual(expectedOutput)
// })
